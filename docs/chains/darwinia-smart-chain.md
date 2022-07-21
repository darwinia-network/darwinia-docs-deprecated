---
sidebar_position: 2
title: Darwinia Smart Chain
---

## Introduction

Darwinia Smart Chain is a substrate based ethereum compatible smart contract platform where contract developers can easily migrate
smart contracts from the Ethereum chain to run their business. In this article we will cover a number of topics that are important to contract developers, such as network configuration, pre-compiles and so on. In addition, we have set up a free test network, the pangoro network, where the latest features will be fully tested before they are added to the Darwinia Smart Chain. The user can obtain test tokens at [Pangoro Test Token Faucet](https://apps.darwinia.network/?network=pangoro).

###  Network RPC Configuration

#### For Darwinia Smart Chain

- Network Name: `Darwinia`
- Token Name: `RING`
- Token Decimal: `18`
- ChainId: `46`
- Block Explorer URL: `https://darwinia.subscan.io/`
- HTTP Endpoints:
    - `https://crab-rpc.darwinia.network`
    - `https://darwinia-rpc.dwellir.com`
- WSS Endpoints:
    - `wss://rpc.darwinia.network`
    - `wss://darwinia-rpc.dwellir.com`

#### For Pangoro Smart Chain

- Network Name: `Pangoro`
- Token Name: `ORING`
- Token Decimal: `18`
- ChainId: `45`
- Block Explorer URL: `https://pangoro.subscan.io/`
- HTTP Endpoints:
    - `https://pangoro-rpc.darwinia.network`
- WSS Endpoints:
    - `wss://pangoro-rpc.darwinia.network`


### Precompiled Contracts

#### For Darwinia Smart Chain

Ethereum compatible:

- `0x0000000000000000000000000000000000000001`: ECRecover
- `0x0000000000000000000000000000000000000002`: Sha256
- `0x0000000000000000000000000000000000000003`: Ripemd160
- `0x0000000000000000000000000000000000000004`: Identity
- `0x0000000000000000000000000000000000000005`: Modexp
- `0x0000000000000000000000000000000000000006`: Bn128Add
- `0x0000000000000000000000000000000000000007`: Bn128Mul
- `0x0000000000000000000000000000000000000008`: Bn128Pairing
- `0x0000000000000000000000000000000000000009`: Blake2F
- `0x0000000000000000000000000000000000000009`: StateStorage
- `0x0000000000000000000000000000000000000009`: Dispatch

Darwinia dedicated:

- `0x0000000000000000000000000000000000000400`: StateStorage
- `0x0000000000000000000000000000000000000401`: Dispatch

#### For Pangoro Smart Chain

Ethereum compatible:

- `0x0000000000000000000000000000000000000001`: ECRecover
- `0x0000000000000000000000000000000000000002`: Sha256
- `0x0000000000000000000000000000000000000003`: Ripemd160
- `0x0000000000000000000000000000000000000004`: Identity
- `0x0000000000000000000000000000000000000005`: Modexp
- `0x0000000000000000000000000000000000000006`: Bn128Add
- `0x0000000000000000000000000000000000000007`: Bn128Mul
- `0x0000000000000000000000000000000000000008`: Bn128Pairing
- `0x0000000000000000000000000000000000000009`: Blake2F
- `0x0000000000000000000000000000000000000009`: StateStorage
- `0x0000000000000000000000000000000000000009`: Dispatch

Darwinia dedicated:

- `0x0000000000000000000000000000000000000400`: StateStorage
- `0x0000000000000000000000000000000000000401`: Dispatch
- `0x0000000000000000000000000000000000000800`: BLS12381

### Things Dapp developers must know

#### Ethereum Block Author

The author(miner) of the ethereum block you get from `eth_getBlockByNumber()` or `eth_getBlockByHash()` is the last 20 bytes of the actual substrate block author. It's because the ethereum block is built based on substrate block and who's author is a 32-bytes address. We have to truncate to adapt ethereum block needs. **Please do not tranfer to the ethereum block author, since the private key of this address is unknown.**
#### Genesis Block

It is particularly important to note that Darwinia Smart Chain's genesis block does not start at 0 like Ethereum. It is `9453251`. This means that if you try to query the block history before this with `eth_getBlockByNumber()` or `eth_getBlockByHash()`, you will get `null`.  This is because the DVM smart contract solution was added in the middle of the Substrate-base Darwinia chain, there are no Ethereum transactions in the Substrate history blocks and no corresponding Ethereum history blocks generated.

#### Consensus Related Field

Ethereum uses a consensus protocol named Proof-of-Work (PoW). While Darwinia Smart Chain uses the Nominated Proof of Stake(NPOS). They are two completely different consensus mechanisms. Consequently, Proof of Work concepts, such as `difficulty`, `uncles`, `hashrate`, generally is not applicable to Darwinia Smart Chain. For APIs that return value related to Ethereum’s Proof of Work, default value are returned.

#### Use `block.timestamp` instead of `block.number`

On Ethereum or other EVM-Compatible platform, you may use `block.number` in contract, but this is not recommended in Darwinia Smart Chain. We may introduce Darwinia Smart Chain 2.0 (The Next Generation) in the future and export the data from Darwinia Smart Chain 1.0 to Darwinia Smart Chain 2.0, which may reset the chain height to zero, so we recommend using `block.timestamp`.

