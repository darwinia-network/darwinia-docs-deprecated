---
sidebar_position: 3
---

# Substrate API

### Introduction

[Darwinia.js](https://github.com/darwinia-network/darwinia.js) API library allows application developers to query Darwinia, Pangoro chain and interact with the chain's substrate interfaces using JavaScript. In this docs, we will look into how we can use some commonly code example to interact with Darwinia node using Darwinia.js API library.

### Dependencies

The library sample mainly depends on the following libraries:

- @polkadot/api The polkadot api library provides a Promise-style interface for performing related operations on the Darwinia chain

- ethers.js The ethers aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.

### Usage

Install libarries

```nodejs

yarn add @polkadot/api \
 @darwinia/types \
 @darwinia/api-augment \
 @darwinia/types-augment \
 @darwinia/rpc-augment \
 @darwinia/types-known 

```

Darwinia.js include Darwinia, Pangoro chain interfaces for developer to interact one of them. In this  you want to query and interact Darwinia node. Here is a config sample for using those node interfaces. we must configure **tsconfig.json** at compilerOptions section to apply type augmentation explicitly.



1. applying Darwinia Chain type augmentation in tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api-augment": ["./node_modules/@darwinia/api-augment/index.d.ts"],
      "@polkadot/types-augment": ["./node_modules/@darwinia/types/interfaces/augment-types.d.ts"],
      "@polkadot/rpc-augment": ["./node_modules/@darwinia/rpc-augment/index.d.ts"],
      "@poladot/types/lookup": ["./node_modules/@darwinia/types-augment/index.d.ts"]
    }
  }
}
```


2. applying Pangoro Chain type augmentation in tsconfig.json



``` json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@polkadot/api-augment": ["./node_modules/@darwinia/api-augment/pangoro/index.d.ts"],
      "@polkadot/types-augment": ["./node_modules/@darwinia/types/interfaces/augment-types.d.ts"],
      "@polkadot/rpc-augment": ["./node_modules/@darwinia/rpc-augment/pangoro/index.d.ts"],
      "@poladot/types/lookup": ["./node_modules/@darwinia/types-augment/lookup/pangoro/index.d.ts"]
    }
  }
}

```


####  Create API Instance

You must first instantiate an API instance of Darwinia.js api. Create the wsProvider using the websocket endpoint of the Darwinia node.

```typescript
// Import
import { ApiPromise, WsProvider } from '@polkadot/api';
...
// Construct with darwinia node endpoint
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




####  Metadata and API Decoration

It's useful to understand some basic workings of the library.
When the API connects to a node, one of the first things it does is to retrieve the metadata and decorate the API based on the metadata information. The metadata effectively provides data in the form of api.`<type>`.`<module>`.`<section>` that fits into one of the following `<type>` categories: consts, query and tx.

None of the information contained within the api.{consts, query, tx}.`<module>`.`<method>` endpoints are hard coded in the API. Rather everything is fully decorated by what the metadata exposes and is therefore completely dynamic. This means that when you connect to different chains, the metadata and API decoration will change and the API interfaces will reflect what is available on the chain you are connected to.

#### API Example

We take some common examples on ApiPromise version of API, They are same with Polkadot.js API  allow application developers to interact with node's interface 
including "runtime constants", "state queries", "RPC queries" and so on. You can check the [Polkadot Docs](https://polkadot.js.org/docs/api/start) for more detail usage description.



### API-Derive

Common function derived from RPC calls and storage queries. Note that Darwinia.js libary version must be greate than v2.8.0 including api-derive feature.

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

####  Customer Api-Derive

Darwinia.js allow application developer to extend their derived method. first you should put function declaration in ExactDerive interface. for example there is 'custome.something' augmentation.

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

// your derived method
await api.derive.custom.something().then((res) => {
      console.log(`somthing is ${res}`); // return [1,2,3]
});
```

  

