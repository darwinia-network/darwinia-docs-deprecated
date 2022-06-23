---
sidebar_position: 3
---

### Introduction

[Darwinia.js](https://github.com/darwinia-network/darwinia.js) API library allows application developers to query Darwinia, crab, pangolin, pangoro chain and interact with the chain's substrate interfaces using JavaScript. In this docs, we will look into how we can use some commonly code example to interact with darwinia node using darwinia.js API library.

#### Dependencies

The library sample mainly depends on the following libraries:

- @polkadot/api The polkadot api library provides a Promise-style interface for performing related operations on the Darwinia chain

- ethers.js The ethers aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.

#### Usage

Install libarries

```nodejs

yarn add @polkadot/api \
 @darwinia/types \
 @darwinia/api-augment \
 @darwinia/types-augment \
 @darwinia/rpc-augment \
 @darwinia/types-known \
 ethers

```

darwinia.js has those darwinia, pangolin, pangoro, crab and parachain substrate interfaces, if you want to query and interact darwinia node. Here you should config **tsconfig.json** compilerOptions to use darwinia types
applying type augmentation explicitly.

applying darwinia API augmentations in tsconfig.json

```json
{
      "compilerOptions": {
            "baseUrl": ".",
            "paths": {
                  "@polkadot/api-augment": [
                        "./node_modules/@darwinia/api-augment/index.d.ts"
                  ],
                  "@polkadot/types-augment": [
                        "./node_modules/@darwinia/types/interfaces/augment-types.d.ts"
                  ],
                  "@polkadot/rpc-augment": [
                        "./node_modules/@darwinia/rpc-augment/index.d.ts"
                  ],
                  "@poladot/types/lookup": [
                        "./node_modules/@darwinia/types-augment/index.d.ts"
                  ]
            }
      }
}
```

#### Create API Instance

You ust first instantiate an API instance of Darwinia.js api. Create the wsProvider using the websocket endpoint of the darwinia node.

```typescript

// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

...
// Construct
const wsProvider = new WsProvider('wss://rpc.darwinia.network');
const api = await ApiPromise.create({ provider: wsProvider });

// Do something
console.log(api.genesisHash.toHex());

```

Due to darwinia has own substrate module and types, this mean developers are adding sepcific types for implementation as well. to close the gap, we have define types for different node spec versions. you could inject types by our **typesBundle** . let's change instantiate api instance to let Api know our types.

```typescript



// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

import { typesBundle } from "@darwinia/types/mix";


...
// Construct
const wsProvider = new WsProvider('wss://rpc.darwinia.network');
const api = await ApiPromise.create({ provider: wsProvider, typesBundle: typesBundle.spec.darwinia });

// Do something
console.log(api.genesisHash.toHex());

```

our typesBundle also contain crab, pangolin, pangoro and parachain types, each chain node has it's own special types.

#### Metadata and API Decoration

It's useful to understand some basic workings of the library.
When the API connects to a node, one of the first things it does is to retrieve the metadata and decorate the API based on the metadata information. The metadata effectively provides data in the form of api.`<type>`.`<module>`.`<section>` that fits into one of the following `<type>` categories: consts, query and tx.

None of the information contained within the api.{consts, query, tx}.`<module>`.`<method>` endpoints are hard coded in the API. Rather everything is fully decorated by what the metadata exposes and is therefore completely dynamic. This means that when you connect to different chains, the metadata and API decoration will change and the API interfaces will reflect what is available on the chain you are connected to.

#### Storage Queries

This section will walk through the concepts behind making queries to the chain to retrieve current state. The api.query.`<module>`.`<method>` interfaces,The API uses the metadata information provided to construct queries based on the location and parameters provided to generate state keys, and then queries these via RPC.

Here is a code sample for retrieving basic account information given its address:

```typescript


// Initialize the API as in previous sections using darwinia node
...

// The actual address that we will use
const ADDR = '<address>';

// Retrieve the last timestamp
const now = await api.query.timestamp.now();

// Retrieve the account balance & nonce via the system module
const { nonce, data: balance } = await api.query.system.account(ADDR);

console.log(`${now}: balance of Ring ${balance.free},  balance of Kton ${balance.freeKton} and a nonce of ${nonce}`);

```

#### Query Subscription

In this example we will expand on that knowledge to introduce subscriptions to stream results from the state, as it changes between blocks.

Here is an example to subscribe to balance changes in an account:

```typescript
  // Initialize the API provider as in the previous section
...

// Define wallet address
const addr = '<address>';

// Subscribe to balance changes for a specified account
const unsub = await api.query.system.account(addr, ({ nonce, data: balance }) => {
  console.log(`${now}: balance of Ring ${balance.free},  balance of Kton ${balance.freeKton} and a nonce of ${nonce}`);
});


```

it returns a subscription unsub() function that can be used to stop the subscription and clear up any underlying RPC connections. The supplied callback will contain the value as it changes, streamed from the node.

#### Multi queryies

It is useful to monitor a number of like-queries at the same time. For instance, we may want to track the balances for a list of accounts we have. The api.query interfaces allows this via the .multi subscription call.

```typescript
// Subscribe to balance changes for 2 accounts, ADDR1 & ADDR2 (already defined)
const unsub = await api.query.system.account.multi(
      [ADDR1, ADDR2],
      (balances) => {
            const [{ data: balance1 }, { data: balance2 }] = balances;

            console.log(
                  `The balances are ${balance1.free} and ${balance2.free}`
            );
      }
);
```

For queries of the same type we can use .multi, for example to retrieve the balances of a number of accounts at once

#### RPC Queries

The RPC calls provide the backbone for the transmission of data to and from the node. This means that all API endpoints such as api.query, api.tx or api.derive just wrap RPC calls, providing information in the encoded format as expected by the node.

The api.rpc interface follows the same format api.query.

```typescript
 // Initialize the API provider as in the previous section
...

 // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion, metadata] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
    api.rpc.state.getMetadata()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}  metadata ${metadata}`);


```

#### System events

You can subscribe system event and extract information from them.

```typescript

  // Initialize the API provider as in the previous section
  ...

  // Subscribe to system events via storage
  api.query.system.events((events) => {
    console.log(`\nReceived ${events.length} events:`);

    // Loop through the Vec<EventRecord>
    events.forEach((record) => {
      // Extract the phase, event and the event types
      const { event, phase } = record;
      const types = event.typeDef;

      // Show what we are busy with
      console.log(`\t${event.section}:${event.method}:: (phase=${phase.toString()})`);
      console.log(`\t\t${event.meta.documentation.toString()}`);

      // Loop through each of the parameters, displaying the type and data
      event.data.forEach((data, index) => {
        console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
      });
    });


```

#### Keyring

Key management of user accounts including generation and retrieval of keyring pairs from a variety of input combinations and the signing of any data.

you can create an instance by just creating an instance of the **Keyring** class

```typescript

// Import the keyring as required
import { Keyring } from '@polkadot/api';

// Initialize the API as we would normally do
...

// Create a keyring instance
const keyring = new Keyring({ type: 'sr25519' });

```

#### Transactions

Transaction endpoints are exposed, as determined by the metadata, on the api.tx endpoint. These allow you to submit transactions for inclusion in blocks, be it transfers, setting information or anything else your chain supports.

This is an example of sending a basic transaction

```javascript

    // Initialize the API provider as in the previous section
    ...

    const BOB = '<wallet address>';
    const transferAmount = '123456789';
    // Create a extrinsic, transferring amount units to Bob.
    const transfer = api.tx.balances.transfer(BOB, transferAmount);
    const keyring = new Keyring({ type: 'sr25519' });

    // Add Alice to our keyring with a private key
    const alice = keyring.addFromUri('*** mnemonic  ***');

    await transfer.signAndSend(alice, ({ events = [], status }) => {
      if (status.isInBlock) {
        console.log('Successful transfer of ' + transferAmount + ' with hash ' + status.asInBlock.toHex());
      } else {
        console.log('Status of transfer: ' + status.type);
      }

      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString());
        if (status.type === 'Finalized' && section + '.' + method === 'system.ExtrinsicSuccess') {
          console.log('transfer success');
          api.disconnect();
        }
      });

```

Any transaction will emit events, as a bare minimum this will always be either a system.ExtrinsicSuccess or system.ExtrinsicFailed event for the specific transaction. These provide the overall execution result for the transaction, i.e. execution has succeeded or failed.

#### API-derive

Common function derived from RPC calls and storage queries. Note that darwinia.js libary version must be greate than v2.8.0 including api-derive feature.

Install it in your project directory with the following command:

```json

	yarn add @darwinia/api-derive

```

Inject our **darwiniaDerive** when creating API instance

```typescript

// Import
import { ApiPromise, WsProvider } from '@polkadot/api';
import { darwiniaDerive } from '@darwinia/api-derive/bundle';
import { typesBundle } from "@darwinia/types/mix";


...
// Construct
const wsProvider = new WsProvider('wss://rpc.darwinia.network');
const api = await ApiPromise.create({ provider: wsProvider, typesBundle: typesBundle.spec.darwinia, derives: darwiniaDerive });


```

Since you are already familiar with the api.query interface, the api.derive interface follows the same format, for instance **usableBalance** derived function to query account's Ring Balance.

```typescript

// Import darwinia token type (ring, kton)
import { TokenType } from '@darwinia/api-derive/accounts/types';

// Initialize the API as in previous sections injecting darwiniaDerive
...

// The actual address that we will use
const ADDR = '<address>';

await api.derive.usableBalance.balance(TokenType.Ring, ADDR).then((balance) => {
        console.log(` ring usable  balance ${balance.usableBalance} `)

```

#### Customer api-derive

Darwinia.js allow application developer to extend their derived section. first you should put function declaration in ExactDerive interface. for example there is 'custome.something' augmentation.

```typescript
// augmentDerives.ts
import type { Observable } from "rxjs";

declare module "@polkadot/api-derive/derive" {
      // extend, add our custom section
      export interface ExactDerive {
            custom: {
                  something: ReturnType<() => () => Observable<number[]>>;
            };
      }
}
```

and then, ensure 'custom.somethinig' augmentation is applied.

```typescript
// customeDerive.ts
custom: {
      something: () => (): Observable<number> => from([1, 2, 3]);
}
```

create api instance to use this derived api.

```typescript
import { custom } from "customeDerive.ts";
import { darwiniaDerive } from "@darwinia/api-derive/bundle";
import { DeriveCustom } from "@polkadot/api/types";

const cutomeDerives = {
      ...darwiniaDerive, // it's optinal
      // assignment your augmentation
      custom: {
            something: custome.something,
      },
} as DeriveCustom;

const api = await ApiPromise.create({
      provider: wsProvider,
      typesBundle: typesBundle.spec.darwinia,
      derives: cutomeDerives,
});

// use it
await api.derive.custom.something().then((res) => {
      console.log(`somthing is ${res}`); // return [1,2,3]
});
```

### DVM-Api

DVM(Darwinia Virtual Machine) is fully compatible with EVM (Ethereum Virtual Machine) in Darwinia Network. We have Crab and Pangolin chain for dapp developer to apply dapp. Darwinia.js also provide common api to interact with smart contract.

Darwinia.js
