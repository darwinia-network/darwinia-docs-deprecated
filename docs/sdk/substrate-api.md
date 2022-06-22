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

yarn add @polkadot/api
 @darwinia/types
 @darwinia/api-augment
 @darwinia/types-augment
 @darwinia/rpc-augment
 @darwinia/types-known
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

For queries of the same type we can use .multi, for example to retrieve the balances of a number of accounts at once -
