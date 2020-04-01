---
id: crab-parameters
title: Crab Network Parameters
sidebar_label: Parameters
---

> This page intends to reflect current network configurations, it reflects the [runtime file](https://github.com/darwinia-network/darwinia-common/blob/master/bin/node-template/runtime/src/lib.rs), which is still a work in progress. 

## Consensus

| Parameter               | Value   |
| ----------------------- | ------- |
| **Consensus Mechanism** | BABE    |
| **Finality Gadget**     | GRANDPA |

## Accounts and Transactions

| Parameter               | Value   | Description                                                                         |
| ----------------------- | ------- | ----------------------------------------------------------------------------------- |
| **Reaping Threshold**   | 1 cRING | The minimum cRING required in the account balance to create or maintain an account. |
| **Transaction Minimum** | ???     | The Min. amount you can send to an Darwinia Address.                                |

## Identity

| Parameter                                        | Value     | Description                                                  |
| ------------------------------------------------ | --------- | ------------------------------------------------------------ |
| Required Bond Per Identity                       | 10 cRING  | Bond required to store IDs on-chain.                         |
| Required Bond Per Each Additional Identity Field | 2.5 cRING | Bond required to store additional IDs on-chain               |
| Sub-Account Deposit                              | 2 cRING   | Amount required to deposit in order to create a sub account. |
| Maximum Sub-Accounts                             | 100       | The maximum number of sub account an account may have.       |

## Periods of common actions and attributes

| Darwinia | Time       | Slots* |
| -------- | ---------- | ------ |
| Block    | 10 seconds | 1      |
| Epoch    | 10 minutes | 60     |
| Session  | 10 minutes | 60     |
| Era      | 6 hours    | 2,160  |

**A maximum of one block per slot can be in a chain.*

## Staking, Validating, and Nominating

| Darwinia                | Time                               | Slots                                                      | Description                                                                                                                                      |
| ----------------------- | ---------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Validator Slots         | 7                                  | Initial slots for active validators, gradually increasing. |                                                                                                                                                  |
| Term duration           | 6 hours                            | 2,160                                                      | The time for which a validator is in the set after being elected. Note,  this duration can be shortened in the case that a validator misbehaves. |
| Nomination period       | 6 hours                            | 2,160                                                      | Every 6 hours, a new validator set is elected according to Phragmen's method.                                                                    |
| Bonding duration        | 14 days                            | 120,960                                                    | How long until your funds will be transferrable after unbonding.                                                                                 |
| Slash defer duration    | 7 days                             | 60,480                                                     | Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves                         |
| Slash Cancellation Vote | Requires 3/4 of Council to Approve |                                                            |                                                                                                                                                  |

## Governance 

| Democracy        | Time   | Slots  | Description                                                                                                                                                  |
| ---------------- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Voting period    | 7 days | 60,480 | How long the public can vote on a referendum.                                                                                                                |
| Launch period    | 7 days | 60,480 | How long the public can select which proposal to hold a referendum on. i.e., Every week, the highest-weighted proposal will be selected to have a referendum |
| Enactment period | 8 days | 69,120 | Time it takes for a successful referendum to be implemented on the network.                                                                                  |

| Council       | Time  | Slots | Description                                                          |
| ------------- | ----- | ----- | -------------------------------------------------------------------- |
| Term duration | 1 day | 8,640 | The length of a council member's term until the next election round. |
| Voting period | 1 day | 8,640 | The council's voting period for motions.                             |

| Technical committee     | Time    | Slots  | Description                                                                                    |
| ----------------------- | ------- | ------ | ---------------------------------------------------------------------------------------------- |
| Cool-off period         | 7 days  | 60,480 | The time a veto from the technical committee lasts before the proposal can be submitted again. |
| Emergency voting period | 3 hours | 1,080  | The voting period after the technical committee expedites voting.                              |

## Treasury

| Parameter                   | Value                     | Description                                                                                                                        |
| --------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Budgeting Period**          | 7 days                    | When the treasury can spend again after spending previously.                                                                       |
| Proposal Bond               | 5% and minumum 1000 cRING | The amount required to bond in order to propose a treasury spend. If approved, it is returned, if the proposal fails, it is burnt. |
| Burn unspent treasury funds | Off                       | This deactivates a burn of all  unspent treasury funds at the end of a budgeting period.                                           |

## SS58 Address Format
| Network Alias | Network ID | Network Type     |
| ------------- | ---------- | ---------------- |
| darwinia      | 18         | Darwinia Mainnet |
| crab          | 42         | Crab Network     |

## Seed Nodes

| Seed Nodes | 
| ---------- | 
| TBC        | 
| TBC        | 
| TBC        | 