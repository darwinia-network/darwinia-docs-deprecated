---
sidebar_position: 105
---

# Ethereum API

## Introduction

DVM(Darwinia Virtual Machine) is fully compatible with EVM (Ethereum Virtual Machine) in Darwinia Network. 

You can use `web3.js` or other ethereum libs to interact with Darwinia using Ethereum compactible RPC api.

## RPC List

> Note: The currently implemented RPC apis is compatible with Ethereum, but some apis are not yet implemented.

## Supported Interfaces

- [x] debug_traceBlockByNumber
- [x] debug_traceByHash
- [x] debug_traceTransaction
- [x] eth_accounts
- [x] eth_blockNumber
- [x] eth_chainId
- [x] eth_coinbase
- [x] eth_call
- [x] eth_estimateGas
- [x] eth_feeHistory
- [x] eth_gasPrice
- [x] eth_getBlockByHash
- [x] eth_getBlockByNumber
- [x] eth_getTransactionCount
- [x] eth_getBlockTransactionCountByHash
- [x] eth_getBlockTransactionCountByNumber
- [x] eth_getCode
- [x] eth_getTransactionByBlockHashAndIndex
- [x] eth_getTransactionByHash
- [x] eth_getTransactionByBlockNumberAndIndex
- [x] eth_getTransactionReceipt
- [x] eth_getUncleByBlockHashAndIndex
- [x] eth_getUncleByBlockNumberAndIndex
- [x] eth_getUncleCountByBlockHash
- [x] eth_getUncleCountByBlockNumber
- [x] eth_getLogs
- [x] eth_getWork
- [x] eth_getBalance
- [x] eth_getFilterChanges
- [x] eth_getFilterLogs
- [x] eth_hashrate
- [x] eth_mining
- [x] eth_newFilter
- [x] eth_newBlockFilter
- [x] eth_newPendingTransactionFilter
- [x] eth_protocolVersion
- [x] eth_sendTransaction
- [x] eth_sendRawTransaction
- [x] eth_submitWork
- [x] eth_submitHashrate
- [x] eth_subscription
- [x] eth_syncing
- [x] eth_unsubscribe
- [x] eth_uninstallFilter
- [x] net_version
- [x] net_peerCount
- [x] net_listening
- [x] trace_filter
- [x] web3_clientVersion
- [x] web3_sha3

## Things Dapp developers must know

### Use `block.timestamp` instead of `block.number`

On Ethereum or other EVM-Compatible platform, you may use `block.number` in contract, but this is not recommended in CSC. We may introduce CSC 2.0 (The Next Generation of CSC) in the future and export the data from CSC 1.0 to CSC 2.0, which may reset the chain height to zero, so we recommend using `block.timestamp`.

### Consensus Related Field

Ethereum uses a consensus protocol named Proof-of-Work (PoW). While CSC uses the Nominated Proof of Stake(NPOS). They are two completely different consensus mechanisms. Consequently, Proof of Work concepts, such as `difficulty`, `uncles`, `hashrate`, generally is not applicable to CSC. For APIs that return value related to Ethereum’s Proof of Work, default value are returned.

### Genesis Block

It is particularly important to note that CSC's genesis block does not start at 0 like Ethereum. It is `4969901`. This means that if you try to query the block history before `4969901` with `eth_getBlockByNumber()` or `eth_getBlockByHash()`, you will get `null`.  This is because the DVM smart contract solution was added in the middle of the Substrate-base Crab chain, there are no Ethereum transactions in the Substrate history blocks and no corresponding Ethereum history blocks generated.

### Ethereum Block Author

The author(miner) of the ethereum block you get from `eth_getBlockByNumber()` or `eth_getBlockByHash()` is the last 20 bytes of the actual substrate block author. It's because the ethereum block is built based on substrate block and who's author is a 32-bytes address. We have to truncate to adapt ethereum block needs. **Please do not tranfer to the ethereum block author, since the private key of this address is unknown.**


