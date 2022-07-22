---
sidebar_position: 0
title: Introduction
---

Darwinia offers a number of different chains for development of messaging infrastructure and Dapp deployment, each with its own features and benefits.

## [Darwinia Chain](darwinia-chain.md)

Darwinia Chain is designed to be the primary chain for tokens and governance, main communication hub and routing point of the LCMP, and will support most on-chain light clients for other public chains.

Darwinia Chain is a public chain that can operate independently with its own consensus and security model, with its core business and application services, including cross-chain functionality of each application chain, controlled by the Darwinia Chain itself.

## [Darwinia Parachain](darwinia-parachain.md)
Darwinia Parachain is designed to be protected by the shared security of the Polkadot Relay Chain. It will integrate Polkadot’s XCMP, open channels with other parachains, and connect to the Darwinia Chain via LCMP.

Darwinia Parachain does not have its own economy.

## [Darwinia Smart Chain](darwinia-smart-chain.md)

Darwinia Smart Chain adds an Ethereum-Compatible layer to the Darwinia Chain and provides users with the ability to create and interact with solidity smart contracts. The node of Darwinia Smart Chain provides Ethereum RPCs endpoint for reading chain states and sending transactions which can be included in Ethereum blocks, and these blocks are chained together as an Ethereum blockchain in the Darwinia Chain. Therefore, it is easy for projects in the Ethereum ecosystem to migrate to the Darwinia Chain.