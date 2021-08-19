---
id: wiki-us-governance
title: Governance
sidebar_label: Governance
---

## Intro

Darwinia uses a governance mechanism inherited from [Polkadot](https://wiki.polkadot.network/docs/learn-governance/) to ensure that most of the stake can always command the network. To do this, all changes to the Darwinia protocol must be agreed upon by stake-weighted referenda.

## Mechanism

Active token holders and the council work together to administrate a network upgrade decision. Whether the proposal is proposed by the public (token holders) or the council, it will eventually have to go through a referendum to let all holders, weighted by stake, decide.

## Referenda

Referenda are inclusive stake-based voting schemes. Each referendum has a specific proposal that takes the form of a privileged function call in the runtime (that includes the most powerful call: `set_code`, which can switch out the entire runtime code, achieving what would otherwise require a "hard fork").

Referenda happen periodically. Voters can only choose "aye," or "nay" or abstain entirely. If the proposal is approved, a function call is made. 

Referenda can be started in one of the following ways:
	1) Publicly submitted proposals;
	2) Proposals submitted by the Council, either through a majority or unanimously;
	3) Proposals submitted as part of the enactment of a prior referendum;
	4) Emergency proposals submitted by the Technical Committee and approved by the Council.
An approved proposal must wait a period of time, `enactment delay` , before becoming effective. The length of the enactment delay depends on how the referendum is launched. For the first two types, the value is fixed.  For Crab, it is 8 days; in Darwinia network, it is 28 days. For the third type, it can be set. `Emergency proposals` deal with severe problems with the network that need to be *fast-tracked*. These will have a shorter enactment time.

### Proposing a Referendum

#### Public Referenda

Anyone can propose a referendum by depositing the minimum amount of tokens for a certain period (number of blocks). If someone agrees with the proposal, they may deposit the same amount of tokens to support it (`seconding`). The proposal with the highest amount of bonded tokens in total will become a referendum in the next voting cycle. The bonded tokens will be released once the proposal is brought to a vote(`tabled` ). There can be no more than *100* public proposals in the proposal queue.


#### Council Referenda

**Unanimous Council**: When all council members agree on a proposal, it can proceed to a referendum. This referendum will have a `negative turnout bias`.

**Majority Council**: When a simple majority of council members reach an agreement, they can vote on a referendum, but it will be `majority-carries` (51% wins).

There can be only one active referendum at any time, except when there is also an **emergency referendum** in progress.

#### Voting Timetables

Every 28 days on Darwinia or 7 days on Crab, a new referendum will come up for a vote, assuming at least one proposal in one of the queues. There is a queue for Council-approved proposals and a queue for publicly submitted proposals. The referendum alternates between the heads of the two queues.

#### Voting on a Referendum

To vote, a voter generally must lock their tokens up at least during the enactment delay period. It guarantees some economic buy-in to the result to dissuade vote selling.You can increase your influence on the referenda by inreasing the locking durationg of the bonded tokens.

#### Tallying

We use different tallying approaches for different types referenda. Following are the three scenarios. 


**Public Proposal**:
For a Public proposal, if the following inequality holds, it is approved. It is called `positive turnout bias`.

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bagainst&space;%5Cover&space;%5Csqrt%7Bturnout%7D%7D&space;%3C&space;%7Bapprove&space;%5Cover&space;%5Csqrt%7Belectorate%7D%7D" style="width:200px !important" />
</p>

```
approve - the number of aye votes
against - the number of nay votes
turnout - the total number of voting tokens (does not include conviction)
electorate - the total number of DOT tokens issued in the network
```

**Council (Complete agreement)**
For a Unanimous Council proposal, if the following inequality holds, it is appoved. It is called `negative turnout bias`.

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bagainst&space;%5Cover&space;%5Csqrt%7Belectorate%7D%7D&space;%3C&space;%7Bapprove&space;%5Cover&space;%5Csqrt%7Bturnout%7D%7D" style="width:200px !important" />
</p>

The meanings of the terms are the same with those in the previous inequality.

**Council (Majority agreement)**
For a Majority Council proposal, it is approved as long as the most common `majority-carries` holds.

<p align="center">
<img src="https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bapprove%7D&space;%3E&space;%7Bagainst%7D" style="width:200px !important" />
</p>

We can easily check the details of tallying easily in [Subscan](https://darwinia.subscan.io/).

<p align="center">
![timeline](assets/wiki-us-governance-subscan.png)
</p>

#### Voluntary Locking

Darwinia inherits from Polkadot the idea of Voluntary Locking that allows token holders to increase their voting power by extending the locking period of their tokens. The number of votes is calculated by the following formula.

```markdown
votes = tokens * conviction_multiplier
```
The conviction multiplier increases the vote multiplier by one every time the number of lock periods double and can be looked up in the following table.

<center>
| Lock Periods | Conviction Multiplier |
| ------------ | --------------- |
| 0            | 0.1             |
| 1            | 1               |
| 2            | 2               |
| 4            | 3               |
| 8            | 4               |
| 16           | 5               |
| 32           | 6               |
</center>

The maximum number of "doublings" of the lock period is set to 6 (and thus 32 lock periods in total), and one lock period equals 28 days on Darwinia and 8 days on Crab.

While a token is locked, you can still use it for voting and staking; you may not transfer these tokens to another account.

Votes are still "counted" at the same time (at the end of the voting period), no matter for how long the tokens are locked.

# Council

The council is an on-chain entity comprising several actors, each represented as an on-chain account. On Darwinia and Crab, the council currently consists of 7 members. The council is responsible for the following tasks:
    1. Controlling the treasury;
    2. Proposing sensible referenda;
    3. Cancelling uncontroversially dangerous or malicious referenda;
    4. Electing the technical committee.

### Cancelling

A proposal can be cancelled if the technical committee unanimously agrees to do so, or if Root origin (e.g. sudo) triggers this functionality. A cancelled proposal's deposit is burned.

Additionally, a two-thirds majority of the council can cancel a referendum. Cancelling can function as a last resort if an issue is found late in a referendum's proposal, such as a bug in the runtime code that the proposal would institute.

Suppose the cancellation is controversial enough that the council cannot get a two-thirds majority. In that case, it will be left to the stakeholders en masse to determine the proposal's fate.

### Blacklisting

A proposal can be blacklisted by Root origin (e.g. sudo). A blacklisted proposal and its related referendum (if any) is immediately cancelled. The hash of the blacklisted proposal is saved. Therefore, a blacklisted proposal's hash cannot re-appear in the proposal queue. Blacklisting can prevent an erroneous proposal from being submitted again inadvertently.

### How to be a council member?

Council elections are handled by the Phragmén election process. Council terms last for one day on Crab and one week on Darwinia.

At the end of each term, the Phragmén election algorithm runs, and the result will choose the new councillors based on the vote configurations of all voters. Unlike a "first-past-the-post" electoral system, a Phragmén election is a multi-round process to include each voters' views. Token holders can support as many candidates as they want. The election also chooses a set number of runners up (currently 5 on Darwinia and 7 on Crab) that will remain in the queue with their votes intact. 


### Prime Members

`The council` implements what's called a prime member whose vote acts as the default for other members that fail to vote before the timeout.

The purpose of having a prime member of the council is to ensure a quorum, even when several members abstain from a vote. It forces councillors to be explicit in their votes or have their vote counted for whatever is voted on by the prime.

## Technical Committee

The `Technical Committee` is composed of the teams that have successfully implemented or specified either a Darwinia/Crab runtime or Darwinia Host. Members are added or removed from the Technical Committee via a simple majority vote of the Counsel.
The Technical Committee can, along with the Council, produce emergency referenda, which are fast-tracked for voting and implementation. 
Fast-tracked referenda are the only type of referenda that can be active alongside another active referendum. Thus, with fast-tracked referenda it is possible to have two active referenda at the same time. 

## Reference

[Sequential Phragmén Method](https://wiki.polkadot.network/docs/learn-phragmen)

