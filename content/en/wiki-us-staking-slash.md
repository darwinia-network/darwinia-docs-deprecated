---
id: wiki-us-staking-slash
title: Slash Algorithm
sidebar_label: Slash Algorithm
---

In order to prevent the network from validators’ attacking or unstable block validation, when the attack or error occurs, the system needs to punish the validator (and the voters) by slashing its pledged tokens. The process and mechanism of the penalty is the Slash algorithm.

Since there are two different tokens (RING and KTON) existing in the Darwinia Network, supplementary explanation of Slash algorithm is required.

The punishment related parameter in Staking system are in percentage, in the occurrences of Slashing event, tokens pledged by the validator and the voters will be slashed by a certain percentage, no matter whether the tokens are RING or KTON. 

In the Staking system of Darwinia Network, there are four main states for RING: account balance, in Staking, Staking lock, un-Staking, so there exists two different states for pledged RING token: in Staking and Staking lock, and the RINGs in Staking lock may have different unlock date. In the occurrences of Slashing, it is essential to confirm the sequential and priority of RINGs that is being Slashed. The Staking system will follow the order of unlocking expiration, and Slash tokens with earlier expiration dates first. The pledged tokens that are not locked will be Slashed first, and then comes the tokens that locked and with earlier expiry date.
