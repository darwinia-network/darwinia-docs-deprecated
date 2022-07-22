---
sidebar_position: 1
title: Darwinia Chain
---

## Introduction

The Darwinia Chain is a public chain based on substrate with cross-chain components, including substrate to ethereum and substrate to substrate. In this article we will cover a number of topics that are important to developers, such as network configuration, on-chain runtime params and so on. In addition, we have set up a free test network, the pangoro network, where the latest features will be fully tested before they are added to the Darwinia Chain. The user can obtain test tokens at [Pangoro Test Token Faucet](https://apps.darwinia.network/?network=pangoro).

###  Network Info

#### For Darwinia Chain

- Network Name: `Darwinia`
- Token Name: `RING`
- Token Decimal: `9`
- Block Explorer URL: `https://darwinia.subscan.io/`
- HTTP Endpoints:
    - `https://rpc.darwinia.network`
    - `https://darwinia-rpc.dwellir.com`
- WSS Endpoints:
    - `wss://rpc.darwinia.network`
    - `wss://darwinia-rpc.dwellir.com`

#### For Pangoro Chain

- Network Name: `Pangoro`
- Token Name: `ORING`
- Token Decimal: `9`
- Block Explorer URL: `https://pangoro.subscan.io/`
- HTTP Endpoints:
    - `https://pangoro-rpc.darwinia.network`
- WSS Endpoints:
    - `wss://pangoro-rpc.darwinia.network`

### On-Chain Params

> This page intends to reflect the current configurations of the Darwinia Chain and provide some brief explanation to their meanings when necessary.

- Block, Epoch and Era Time

    | Darwinia | Time      | Slots |
    | -------- | --------- | ----- |
    | Block    | 6 seconds | 1     |
    | Epoch    | 4 hour    | 2,400 |
    | Era      | 24 hours  |14,400 |


- Staking, Validating and Nominating Time

    | Darwinia | Time | Slots | Description |
    | --- | --- | --- | --- |
    | Term duration | 24 hours | 14,400 | The time for which a validator is in the set after being elected. Note, this  duration can be shortened in the case that a validator misbehaves. |
    | Nomination period | 24 hours | 14,400 | Every 24 hours, a new validator set is elected according to Phragmen's    method. |
    | Bonding duration | 14 days | 201,600 | How long until your funds will be transferable after unbonding. |
                                                            
- Parameters of Validators

    One preliminary method to make profit is to nominate a validator. There are multiple factors to consider when  choosing a validator wisely. Although we do not make recommendations out of neutrality, we provide an explanation of the meaning of the parameters related to a validator. A comprehensive understanding can help you assess your candidates accurately.

- Active Commission

    The *active commission* is the percentage of the gain that the validator will draw before distributing according to staking power in the current era. This parameter is set by the validator. From one perspective, it measures the willingness of the validator to share the profit with nominators. Meanwhile, it can be interpreted as an indicator  of their confidence in themselves. In a nutshell, one cannot say that the higher the better or otherwise.

- Next Commission

    The *next commission* is the percentage of the gain that the validator will draw before distributing according to staking power in the next era. This parameter is set by the validator. It may directly affect your profit if you endorse this validator. As explained above, this is not a simple measure of good or bad.

- Own Stake(Power)

    The *own stake (power)* is the amount of power that the validator has locked for staking currently. It indicates how much stake the validator has put in the game. Since if the validator is punished for some reason, part of the staking power will be slashed, the higher this number is, the higher risk the validator is willing to take.

- Other Stake(Power)

    The *other stake (power)* is the amount of power that nominators have trusted the validator with. This partly  indicates the level of confidence that nominators have on the validator.

- Points

    The *point* is a measure of the validator's achievement in the current era. The validator normally gets 20 points for each block produced by them. If a validator has 1200 *points*, it means that this validator has produced 60(1200/20) blocks successfully so far in current era.