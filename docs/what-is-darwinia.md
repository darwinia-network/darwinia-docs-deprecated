---
sidebar_position: 0
slug: /
---

# What is DARWINIA?

Darwinia is a cross-chain messaging infrastructure. Darwinia provides a reliable and programmable cross-chain platform for decentralized applications. Darwinia provides developers with an SDK, and developers can easily integrate cross-chain capabilities into their Dapps.

In the figure below, the colored part is the area that Darwinia focuses on. Decentralized application developers only need to use the Darwinia SDK; in addition, integrated developers can expand more cross-chain facilities based on the Message Protocols.

![whatisdarwinia](/img/whatisdarwinia.png)

By developing and integrating various cross-chain message protocols and cross-chain infrastructure, Darwinia provides developers with consistent and friendly cross-chain message services and SDKs.

## General Purpose

Darwinia is a programmable general purpose cross-chain platform.

The value of cross-chain is not only the assets cross-chain transfers, but also one of the key future for decentralized application innovation. When the infrastructure is ready, various innovations will break out based on it. Ethereum provided a programmable environment EVM, which has led to the explosive growth of decentralized applications.

Based on the cross-chain messaging, Darwinia provides a programmable environment for the cross-chain applications. Developers can easily develop decentralized applications with cross-chain capabilities through the Darwinia SDK.

Darwinia's cross-chain message is a general data structure that can carry any cross-chain intent, as long as the target chain can understand it. Dapps in the source chain use cross-chain messages to call functions with parameters of the target chain remotely. Like remote procedure calls (RPCs), messages contain data identifying the source application, the target application, and a valid encoding that the target application expects to understand.

Darwinia made no assumptions about the application layer. Darwinia provides an application-agnostic interface for the application layer. The application layer can implement any cross-chain Dapps.

General purpose cross-chain capabilities break the boundaries of decentralized applications, bringing more possibilities, and in the near future, new applications and new lego ideas will emerge.

## Security

Different applications have different security requirements. The highest security level is not necessarily suitable for all applications, and the higher the security level, the higher the cost. Darwinia provides different options for different security requirements, and can also provide a combination of any security levels. Darwinia's goal is to provide cross-chain Dapp developers with various security options, and developers only need to choose the appropriate service according to their security needs.

There are two main security domains for cross-chain security.

1. Engineering security
    
    Engineering security refers to the security of the engineering implementation of the project itself. Design defects, code bugs, and insufficient auditing may cause engineering security problems.
    
    At present, the main security problems of cross-chain projects are the engineering security.
    
2. Consensus security
    
    Consensus security is determined by the underlying consensus mechanism, which determines the security cap of a cross-chain message protocol.
    
    Consensus security is the underlying security source of cross-chain. The difference of the underlying mechanism is the main difference between different cross-chain message protocols and the main reason for their different security.
    
    The comparison of cross-chain message protocols of different mechanisms:
    
    | Solution | General | Decentralized | Extensible | Use cost | Difficulty | Sample |
    | --- | --- | --- | --- | --- | --- | --- |
    | Centralized | Bad | Bad | Normal | Very Low | Very Low | Cex |
    | MPC(multisig, or collateral  based) | Normal | Normal | Very Good | Low | Low | Anyswap |
    | Oracle based | Good | Normal | Good | Medium | Medium| Chainlink |
    | Atomic swap | Bad | Good | Normal | High | High | ? |
    | Light client based | Good | Good | Normal | High | High | Darwinia |
    | Shard/Parachain | Good | Very Good | Bad | High | High | Polkadot |
    | Rollup | Good | Very Good | Bad | High | High | Ethereum Rollup |
