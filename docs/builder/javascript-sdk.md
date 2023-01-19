---
sidebar_position: 105
---

# Javascript SDK

## darwinia-js-sdk

The **darwinia-js-sdk** is an EVM-compatible library that allows for easy interaction with a Darwinia node. 

It enables developers to fetch storages and dispatch substrate calls, as well as providing derived APIs to simplify tasks. Additionally, it works with ethers.js and can be used with MetaMask and other web3-compatible wallets.

It works roughly like this:

```typescript
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send('eth_requestAccounts', []);
const signer = provider.getSigner();

const pangolin = clientBuilder.buildPangolinClient(provider);
const receipt = await pangolin.calls.session.setKeys(
    signer,
    {
        aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da28c"
    }, // keys
    "" // proof
);

console.log(`tx hash: ${receipt.transactionHash}`);
```
  
[code](https://github.com/darwinia-network/darwinia-js-sdk) | [doc](http://xxx)

