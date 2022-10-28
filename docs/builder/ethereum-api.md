---
sidebar_position: 105
---

# Ethereum API

### Introduction

DVM(Darwinia Virtual Machine) is fully compatible with EVM (Ethereum Virtual Machine) in Darwinia Network. We have Crab and Pangolin chain for dapp developer to apply dapp. Darwinia.js also provide common api to interact with Darwinia DVM  same as web3.js interact with ethereum.





Install it in your project directory with the following command:

``` javascript
yarn add @darwinia/api-evm
```


####  Balance Tranfer

In this example we will introduce Crab Smart chain(EVM comatible) to Crab Chain balance tranfer.

Here is an example to call DVM api to send transaction from ethereum address to substrate account.


``` javascript 
// Import 
import { ethers } from 'ethers';
import { DarwiniaDvmApi } from '@darwinia/api-evm/index';
import { CrabCallIndex } from '@darwinia/api-evm/model';

// Crab node provider
const providerRPC = {
    carb: {
      chainId: 44,
      name: 'Crab',
      rpc: 'https://crab-rpc.darwinia.network'
    }
  };

 // ethereum address 
 const from = "<address>";
 // substrate address
 const to = "<address>";
   
 const gasLimit = 10000; 
 const amount =  1; // crab precision is 1000_000_000, 1 present 1/10*9 token 
  
 const provider = new ethers.providers.JsonRpcProvider(providerRPC.carb.rpc, {
    chainId: providerRPC.carb.chainId,
    name: providerRPC.carb.name
 });
 
 const dvm = new DarwiniaDvmApi(CrabCallIndex, provider);
 const resulte = await balanceTransfer(from, to, amount, gasLimit);
 console.log(`transaction resulte ${resulte}`);
  
```

Then return contains transcation hash and check more detail information at [Crab Subscan](https://crab.subscan.io/)