---
id: bridge-overview
title: Overview of Bridge Technologies
sidebar_label: Overview
sidebar_position: 1
---

*A cornerstone technology of blockchain interoperability is the blockchain bridge. Blockchain bridges are ways for two economically sovereign and technologically diverse chains to communicate with each other.Bridge designs come in a variety of flavors ranging from centralized and trusted to more decentralized and trustless.*

## What does Cross-chain Mean?

Cross-chain means transferring information from one chain to another. There are two problems to address here:

- First, the chains cannot directly call each other and need a third party, which we call a relayer, to relay the information. The relayer constantly fetches information for the source chain and submits it to the target chain. The relayer must also exist in a decentralized way, and anyone can become a relayer. The incentive for the relayers is that they get a reward for the relaying work.
- Second, the target chain does not understand the information from the source chain. Since anyone can become a relayer, we cannot rule out the existence of relayers who can do evil. Therefore, when the target chain gets the information from the source chain, it first needs to prove that it is safe and trustworthy.

From another point of view, the essence of cross-chain is the mapping of actions. Cross-chain means that an action in the source chain is mapped to another one in the target chain, action in the source chain ⇒ action in the target".

The cross-chain data is no more than the "evidence that an action has occurred on the source chain." For example, the following actions are mapped for cross-chain transfer of assets, and the mapping rules are coded in the target chain.

> Asset lock on the source chain ⇒ Asset issue on the target chain
> 

The remote call is made by abstracting a unified action mapping, and the mapping rules are defined in the source chain as follows.

> Generate a Remote Call on the source chain ⇒ Execute the Remote Call on the target chain
> 

"***Asset lock performed on the source chain***" triggers the action "***Generate a Remote Call on the source chain*** ",  and the content of the Remote Call is "***Asset issue on the target chain***."

## Bridging Methods

### Centralized

Centralized crypto exchanges such as Binance are a type of bridge with which one can transfer assets (USDT) from one blockchain (Ethereum) to another (Tron) by a series of deposits and withdrawals.

### Semi-decentralized

More decentralized(semi-decentralized) solutions include custody by MultiSig or Oracle service, which provides a higher level of decentralization and security.

### Decentralized

There is no custodian in fully decentralized cross-chain solutions, and assets are not controlled by one person/institution or a small group. These solutions fall into two categories:

- Hashed Timelock Contract (***HTLC)***
- ***On-chain Light Client***

## Cross-chain Process

Darwinia applies a cross-chain approach with an on-chain ultra-light client. There is an ultra-light client of the source chain running on the target chain. In the cross-chain process, the relayer submits the data from the source chain to the target chain, and the target chain will use the ultra-light client to verify the data after receiving the data. If the verification passes,  the runtime of the target chain will execute the corresponding action. Simply put, the block header (state) is used to verify the cross-chain data.

This process is divided into two steps:

- First, the state preparation of the ultralight client,
- Second, the cross-chain action of the source chain.

### The State Preparation of the Ultra-light Client

The source chain state typically comes in the form of the block header of the source chain.

Only when the state is ready can it prove that the "source chain action" data is authentic and trustworthy.  The state contains some form of root that can verify the "source chain action" instead of the "source chain action data." The preparation process for this step may generally have two more steps.

1. (Required) The finality proof of the source chain state
    
    To proceed with proof or verification, we need to ensure that the latest state of the "ultra-light client of the source chain" is finalized because the data from the source chain is meaningless unless the corresponding state is finalized on the source chain. Most of our cross-chain-related work for different chains focuses on this process. Different types of source chains need to adopt different approaches to achieve finality proofs.
    
2. (Optional) Supplementary state
    
    This step is not required if the latest block header or the existing block header is sufficient to prove the "source chain action." Otherwise, the relayer needs to submit an additional state to the target chain. In other words, this step is on-demand, and the state is committed only when there is a source chain action to be proven.
    

### The Cross-chain Action of the Source Chain

To prove the existence of the source chain action, one needs to provide the *trace generated by this action* and the *proof of this trace* to the target chain. Once the target chain gets the data and uses it to verify that the trace is included in the "*state of the ultra-light client*". Since the finality of the state has been validated, we can be sure that the action has really happened. The trace can be a log entry, an event, or any specially devised on-chain storage item.

## Technical considerations for Darwinia cross-chain

Cross-chain bridges are still in their early stages, and there have not been too many used heavily in production. In a nutshell, it is still a work in progress. Currently, we are focusing on the following aspects in the design of Darwinia bridges : 

1. How to get the data and proof of cross-chain;
2. How to reduce the amount of data;
3. How to reduce the amount of computation;
4. Generalization.
