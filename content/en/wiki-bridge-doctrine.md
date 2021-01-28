---
id: wiki-bridge-doctrine
title: The Darwinia Bridge Doctrine
sidebar_label: The Darwinia Bridge Doctrine
---
# Trustfree

In the blockchain field, trustless means that you can manage or access your own assets without trusting any centralized system, or any participant in the system, and you can ensure the security of your own assets.

There are many ways to achieve the cross-chain of assets, including centralized and decentralized. The custodial model is the simplest.  You rely on an intermediary or a custodian to keep your asset safe and be honest. But the biggest drawback of the centralized approach is the heavy need of trust.

Darwinia Bridges, is designed to provide cross-chain capabilities in a decentralized manner. Users only need to trust the cross-chain protocols, the code, cryptography and game theory that implement this set of protocols. All participants are incentivized to follow the rules of the game enforced by these cross-chain protocols, including Darwinia's developers.

# Low Gas Consumption

Everyone knows that the operation of the blockchain has a cost, so the use of the blockchain is not free.

Many decentralized cross-chain solutions are implemented by running light clients in the opponent blockchain, and Darwinia’s solution falls under this category. But classic light clients need to maintain all the block headers of the complete blockchain. This is an ever-growing overhead, especially if the chain is already very long, it will occupy a large amount of storage space on the opponent chain.

However, Darwinia's light client is a super light client. Compared with classic linear light clients that store each and every block header, It only requires a limited, on-demand block headers to achieve the goal of the light client, that is to verify the proof of existence of any transaction using merkle tree. The solution will be introduced in the following sections.

Classic light client is technically workable, but not economically sustainable.  Darwinia’s sub-linear super light client solves this issue.
