---
id: bridge-glossary
title: Glossary  
sidebar_label: Glossary
sidebar_position: 6
---

### Darwinia
Short for Darwinia Network, a decentralized cross-chain bridge network building on Substrate.

### Crab
Short for Crab Network, a canary network of Darwinia.

### Pangolin
Short for Pangolin Test Network, the testnet set aside for testing related technology.

### bridge
A mechanism to transfer assets between different blockchains.

### finality
Finality in blockchain means that after a given block has been finalized, it will never be reverted.

### GRANDPA
GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement) is the finality gadget that is implemented for the Polkadot Relay Chain.

### BEEFY
A secondary protocol running along GRANDPA Finality to support efficient bridging with non-Substrate blockchains.

### bridger
The relayer client(s) of Darwinia-related bridges.

### Staking
The act of bonding tokens (for Darwinia, RING) by putting them up as "collateral" for a chance to produce a valid block (and thus obtain a block reward). Validators and nominators stake their RING in order to secure the network.

### BFT
Byzantine Fault Tolerance (BFT), the property of a system that is able to resist the class of failures derived from the Byzantine Generals’ Problem. This means that a BFT system is able to continue operating even if some of the nodes fail or act maliciously. 

### commitment scheme
A cryptographic primitive that allows one to commit to a chosen value (or chosen statement) while keeping it hidden to others, with the ability to reveal the committed value later.

### Wormhole
The front-end portal of Darwinia cross-chain bridges.

### Smart App
Smart App is the front-end to transfer assets between an EVM-compatible account (DVM account) and a Substrate account within the same blockchain.

### Substrate
A modular framework for building blockchains developed by Parity Technologies.

### Polkadot
A sharded heterogeneous multi-chain architecture that enables external networks as well as customized layer one "parachains" to communicate, creating an interconnected internet of blockchains.

### nominator
A type of participant in the staking subsystem of Darwinia who appoints their stake to the validators.

### validator
A node that secures the Relay Chain by staking RING/KTON, validating proofs from collators and voting on consensus along with other validators.

### consensus
A fault-tolerant mechanism that is used in blockchain systems to achieve the necessary agreement on a single data value or a single state of the network among distributed systems, such as PoW, PoS etc.

### runtime (of a blockchain)
The business logic that defines the state transition function of a blockchain.

### epoch
An epoch is a time duration in the BABE protocol that is broken into smaller time slots. In Darwinia, an epoch is a segment of 2,400 consecutive blocks, roughly 4 hours. In Crab, it is a segment of 600 consecutive blocks, roughly 1 hour.

### era
An era is the period that the validator set is recalculated and where rewards are paid out. In Darwinia, an era is a segment of 14,400 consecutive blocks, roughly 24 hours. In Crab, it is a segment of 3,600 consecutive blocks, roughly 6 hours.

### power (staking ~)
An indicator calculated based on the assets staked and the length of the staking period.

### faucet
A website or app where users can claim test tokens.

### Subscan
A blockchain explorer which can support Substrate ecological networks.

### Evolution Land
A virtual simulation blockchain game that supports cross-chain interactions.

### RING
The native token for Darwinia.

### CRAB(token)
The native token on the Crab Network.

### KTON
A derivative commitment token of RING, which can only be obtained by staking RINGs.

### parachain
Any individual Layer-1 blockchain that runs in parallel on Polkadot, connected to the Polkadot Relay Chain and secured by the Relay Chain’s validator set.

### slot (parachain ~)
A scarce resource on Polkadot or Kusama for a parachain to be added to Polkadot or Kusama.

### relay chain
The chain that coordinates consensus and communication between parachains (and external chains, via bridges).
