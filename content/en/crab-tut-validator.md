---
id: crab-tut-validators
title: How to become a validator
sidebar_label: Become a validator
---

## Check your address

1) Enter Darwinia Web Wallet and make sure you already have 2 available addresses, including the Session Key above. 

2) Change the current account to the Stash Account of the custody asset.

## Staking

1) [Node] on the left menu bar and click [Staking Now]

Validator please select [Node], Nominator please select [Nomination], "Nominator" and "Validator" are two mutually exclusive identities.

2) [Bond Funds] window pops up, you can bond RING / KTON, set bond parameters.

`[Controller Account]:` It is used to manage verification, voting and other activities, and cannot be reused.  
`[Payment Destination]:` The address used to earn rewards.  
`[Value Bonded]:` Enter the Value to be bonded (accuracy is 9) and Fund Type(RING / KTON).  
`[Lock Limit]: `The bonding limit can be set from 3 to 36 months. After bonding, you will get extra KTON rewards.  
`[You Will Get]: `Power/KTON estimates based on the Value and Limit of bonded funds you set.

## Bond More / Unbond

In the [Power Manager] of the [Nomination] page on the left menu bar, click [Bond] to add more bonded funds, and click "Unbond" to unbond funds.

1) [Unbonding] funds have a 14-day unbonding period. After the unbonding period, they will be automatically released to the account [Available].

2) RING with Lock Limit, please go to the [Assets] on the left menu bar and go to the [Bond History] to unbond the time limit. Then return to this page and use the Unbond fund.

3) Unbonding a RING with Lock Limit in advance requires paying a 3x penalty for KTON rewards.

## Set Session Key

1) After Bonded funds, it will enter the set session key process. 

2) Fill in the generated Session Key here. For the generation method, reference [Starting a node] - [Generate Session Key].
(1) You can skip it temporarily and set it up after ensuring that the node runs stably.   
(2) Be sure to bind the real Session Key, and make sure that the node is running before participating in the verification, otherwise you may be penalized for missing blocks.

## Validate

Set Validator preferences and participate in node elections. Be sure that the node is running before participating in verification.

`[Node Name]:` Node name  
`[Reward Commission]: `the proportion of the node's retained revenue (this part will not be shared with the voter and will be exclusively owned by the node)

Now you can go to [Explorer] to check your validator nodes. Election information is updated every 1000 blocks / era, so thedata may be delayed, which is normal.