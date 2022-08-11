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

  

### Darwinia  typical API 

#### Overview

These sections provide a static list of available interfaces as generated from a running Darwinia node. 
Those interfaces are unique in Darwinia comparing with other substrate node. 

#### Consts 

The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via api.consts.`<module>`.`<method>`.

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)


- [<font color="blue" size="5">bridgeCrabGrandpa</font>](#bridgeCrabGrandpa)
- [<font color="blue" size="5">bridgeCrabMessages</font>](#bridgeCrabMessages)
- [<font color="blue" size="5">feeMarket</font>](#feeMarket)
- [<font color="blue" size="5">ktonTreasury</font>](#ktonTreasury)
- [<font color="blue" size="5">phragmenElection</font>](#phragmenElection)
- [<font color="blue" size="5">toCrabBacking</font>](#toCrabBacking)
- [<font color="blue" size="5">tronBacking</font>](#tronBacking)

 


***

<span id="bridgeCrabGrandpa"><font size="6">bridgeCrabGrandpa</font></span>
 <br></br>
 <br></br>

 <font size="5">headersToKeep: u32 </font>
 <br></br>

 - **interface**:  `api.consts.bridgeCrabGrandpa.headersToKeep`<br></br>


 - **summary**: Maximal number of finalized headers to keep in the storage.<br></br>
 
    The setting is there to prevent growing the on-chain state indefinitely. Notethe setting does not relate to block numbers - we will simply keep as much items in the storage, so it doesn't guarantee any fixed timeframe for finality headers.


 <font size="5">maxRequests: u32</font>

  - **interface**: `api.consts.bridgeCrabGrandpa.maxRequests`<br></br>

  - **summary**: The upper bound on the number of requests allowed by the pallet.<br></br>

    Once this bound is reached the pallet will not allow any dispatchables to be called until the request count has decreased.

<span id="bridgeCrabMessages"><font size="6">bridgeCrabMessages</font></span>
<br></br>
<br></br>
<font size="5">bridgedChainId: u8aFixed </font>




 - **interface**:  `api.consts.bridgeCrabMessages.bridgedChainId`<br></br>


 - **summary**: Gets the chain id value from the instance.<br></br>


<span id="feeMarket"><font size="6">feeMarket</font></span>
<br></br>
<br></br>

<font size="5">assignedRelayersRewardRatio: Permill </font>
 <br></br>

 - **interface**:  `api.consts.feeMarket.assignedRelayersRewardRatio`<br></br>


 - **summary**: Reward parameters.<br></br>



<font size="5">collateralPerOrder: u128 </font>
 <br></br>

 - **interface**:  `api.consts.feeMarket.collateralPerOrder`<br></br>


 - **summary**: The collateral relayer need to lock for each order.<br></br>


<font size="5">minimumRelayFee: u128 </font>
 <br></br>

 - **interface**:  `api.consts.feeMarket.minimumRelayFee`<br></br>


 - **summary**: The minimum fee for relaying.<br></br>



<font size="5">slot: u32 </font>
 <br></br>

 - **interface**:  `api.consts.feeMarket.slot`<br></br>


 - **summary**: The slot times set.<br></br>



<font size="5">treasuryPalletId: FrameSupportPalletId </font>
 <br></br>

 - **interface**:  `api.consts.feeMarket.treasuryPalletId`<br></br>


 - **summary**: Some reward goes to Treasury.<br></br>



<font size="5">messageRelayersRewardRatio: Permill </font>
 <br></br>

 - **interface**:  `api.consts.feeMarket.messageRelayersRewardRatio`<br></br>

 - **summary**: <br></br>

<font size="5">lockId: U8aFixed </font>
 <br></br>

 - **interface**:  `api.consts.feeMarket.lockId`<br></br>

 - **summary**: <br></br>





<span id="ktonTreasury"><font size="6">ktonTreasury</font></span>
<br></br>
<br></br>

<font size="5">burn: Permill </font>
<br></br>

- **interface**:  `api.consts.ktonTreasury.burn`<br></br>

- **summary**:  Percentage of spare funds (if any) that are burnt per spend period. <br></br>



<font size="5">maxApprovals: u32 </font>
<br></br>

- **interface**:  `api.consts.ktonTreasury.maxApprovals`<br></br>

- **summary**:  The maximum number of approvals that can wait in the spending queue. <br></br>



<font size="5">palletId: FrameSupportPalletId </font>
<br></br>

- **interface**:  `api.consts.ktonTreasury.palletId`<br></br>

- **summary**:  The treasury's pallet id, used for deriving its sovereign account ID. <br></br>


<font size="5">proposalBond: Permill </font>
<br></br>

- **interface**:  `api.consts.ktonTreasury.proposalBond`<br></br>

- **summary**: Fraction of a proposal's value that should be bonded in order to place the proposal. An accepted proposal gets these back. A rejected proposal does not. <br></br>



<font size="5">proposalBondMinimum: u128 </font>
<br></br>

- **interface**:  `api.consts.ktonTreasury.proposalBondMinimum`<br></br>

- **summary**: Minimum amount of funds that should be placed in a deposit for making a proposal. <br></br>


<font size="5">spendPeriod: u32 </font>
<br></br>

- **interface**:  `api.consts.ktonTreasury.spendPeriod`<br></br>

- **summary**: Period between successive spends. <br></br>




 

<span id="phragmenElection"><font size="6">phragmenElection</font></span>
<br></br>
<br></br>


<font size="5">candidacyBond: u128 </font>
<br></br>

- **interface**:  `api.consts.phragmenElection.candidacyBond`<br></br>

- **summary**: How much should be locked up in order to submit one's candidacy. <br></br>

<font size="5">desiredMembers: u32 </font>
<br></br>

- **interface**:  `api.consts.phragmenElection.desiredMembers`<br></br>

- **summary**: Number of members to elect. <br></br>




<font size="5">desiredRunnersUp: u32 </font>
<br></br>

- **interface**:  `api.consts.phragmenElection.desiredRunnersUp`<br></br>

- **summary**: Number of runners_up to keep. <br></br>



<font size="5">votingBondBase: u128 </font>
<br></br>

- **interface**:  `api.consts.phragmenElection.votingBondBase`<br></br>

- **summary**: Base deposit associated with voting. <br></br>

  This should be sensibly high to economically ensure the pallet cannot be attacked by creating a gigantic number of votes.


<font size="5">votingBondFactor: u128 </font>
<br></br>

- **interface**:  `api.consts.phragmenElection.votingBondFactor`<br></br>

- **summary**: The amount of bond that need to be locked for each vote (32 bytes). <br></br>




<span id="toCrabBacking"><font size="6">toCrabBacking</font></span>
<br></br>
<br></br>



<font size="5">maxLockRingAmountPerTx: u128 </font>
<br></br>

- **interface**:  `api.consts.toCrabBacking.maxLockRingAmountPerTx`<br></br>

- **summary**: The max lock amount per transaction for security. <br></br>



<font size="5">ringMetadata: DpAssetTokenMetadata </font>
<br></br>

- **interface**:  `api.consts.toCrabBacking.ringMetadata`<br></br>

- **summary**: The local ring metadata. <br></br>


<font size="5">palletId: FrameSupportPalletId </font>
<br></br>

- **interface**:  `api.consts.toCrabBacking.palletId`<br></br>

- **summary**: The pallet id of this pallet. <br></br>





<span id="tronBacking"><font size="6">tronBacking</font></span>
<br></br>
<br></br>


<font size="5">palletId: FrameSupportPalletId </font>
<br></br>

- **interface**:  `api.consts.tronBacking.palletId`<br></br>

- **summary**: The pallet id of this pallet. <br></br>
















#### Storage 

The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via api.query.`<module>`.`<method>`.

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)


#### Extrinsic

The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via api.tx.`<module>`.`<method>`.

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

#### JSON-RPC

The following sections contain known RPC methods that may be available on specific nodes (depending on configuration and available pallets) and allow you to interact with the actual node, query, and submit.







