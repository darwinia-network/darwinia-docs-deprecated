---
sidebar_position: 1
title: Crab
---

Crab Network is a canary network with real economic value for Darwinia, and its positioning is similar to Polkadot's Kusama Network. To expect chaos is a reasonable assumption!

##  Network Info

- Network Name: Crab
- Token Name: CRAB
- Token Decimal: 9
- Block Explorer: 
    - https://crab.subscan.io/
- HTTP Endpoints:
    - https://crab-rpc.darwinia.network
    - https://darwinia-crab.api.onfinality.io/public
    - https://darwiniacrab-rpc.dwellir.com
- WSS Endpoints:
    - wss://crab-rpc.darwinia.network
    - wss://darwinia-crab.api.onfinality.io/public-ws
    - wss://darwiniacrab-rpc.dwellir.com

#### EVM Info
- Network Name: Crab Smart Chain
- Token Name: CRAB
- Token Decimal: 18
- ChainId: 44
- Block Explorer: 
    - https://crab.subscan.io/
- HTTP Endpoints:
    - https://crab-rpc.darwinia.network
    - https://darwinia-crab.api.onfinality.io/public
    - https://darwiniacrab-rpc.dwellir.com
- WSS Endpoints:
    - wss://crab-rpc.darwinia.network
    - wss://darwinia-crab.api.onfinality.io/public-ws
    - wss://darwiniacrab-rpc.dwellir.com

## Params

### Block, Epoch and Era Time

| Darwinia | Time      | Slots |
| -------- | --------- | ----- |
| Block    | 6 seconds | 1     |
| Epoch    | 1 hour    | 600   |
| Era      | 6 hours   | 3,600 |

### Staking, Validating, and Nominating

| Darwinia                | Time                               | Slots                                                      | Description                                                                                                                                      |
| ----------------------- | ---------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Validator Slots         | 7                                  | Initial slots for active validators, gradually increasing. |                                                                                                                                                  |
| Term duration           | 6 hours                            | 3,600                                                      | The time for which a validator is in the set after being elected. Note,  this duration can be shortened in the case that a validator misbehaves. |
| Nomination period       | 6 hours                            | 3,600                                                      | Every 6 hours, a new validator set is elected according to Phragmen's method.                                                                    |
| Bonding duration        | 14 days                            | 201,600                                                    | How long until your funds will be transferrable after unbonding.                                                                                 |
| Slash defer duration    | 14 days                            | 201,600                                                    | Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves                         |
| Slash Cancellation Vote | Requires 3/4 of Council to Approve |                                                            |                                                                                                                                                  |
### Governance 

| Democracy        | Time   | Slots   | Description                                                                                                                                                  |
| ---------------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Voting period    | 7 days | 100,800 | How long the public can vote on a referendum.                                                                                                                |
| Launch period    | 7 days | 100,800 | How long the public can select which proposal to hold a referendum on. i.e., Every week, the highest-weighted proposal will be selected to have a referendum |
| Enactment period | 8 days | 115,200 | Time it takes for a successful referendum to be implemented on the network.                                                                                  |

| Council       | Time  | Slots | Description                                                          |
| ------------- | ----- | ----- | -------------------------------------------------------------------- |
| Term duration | 1 day | 3,600 | The length of a council member's term until the next election round. |
| Voting period | 1 day | 3,600 | The council's voting period for motions.                             |

| Technical committee     | Time    | Slots   | Description                                                                                    |
| ----------------------- | ------- | ------- | ---------------------------------------------------------------------------------------------- |
| Cool-off period         | 7 days  | 100,800 | The time a veto from the technical committee lasts before the proposal can be submitted again. |
| Emergency voting period | 3 hours | 1,800   | The voting period after the technical committee expedites voting.                              |

### Treasury

| Parameter                   | Value                     | Description                                                                                                                        |
| --------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Budgeting Period**          | 6 days                    | When the treasury can spend again after spending previously.                                                                       |
| Proposal Bond               | 5% and minumum 1000 CRAB | The amount required to bond in order to propose a treasury spend. If approved, it is returned, if the proposal fails, it is burnt. |
| Burn unspent treasury funds | Off                       | This deactivates a burn of all  unspent treasury funds at the end of a budgeting period.                                           |

### SS58 Address Format

Chain specification name: Crab

SS58 prefix: 42

