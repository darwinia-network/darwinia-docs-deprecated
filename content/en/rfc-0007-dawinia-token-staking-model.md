---
id: rfc-0007-dawinia-token-staking-model
title: 0007 Dawinia Token Staking Model
sidebar_label: 0007 Dawinia Token Staking Model
custom_edit_url: https://github.com/darwinia-network/rfcs/edit/master/RFC/en_US/0007-dawinia-token-staking-model.md
---

- Function description: Darwinia Token and Staking model (Darwinia AppChain)
- Start time: 2019-05-23
- RFC PR: None
- Github Issue: None

# Summary

The design draft here introduces the token and staking model of Darwinia Network.

# Native assets

RING is the native asset of the Darwinia Network, and RING can be used as a fuel fee for transactions. Fuel costs include transaction costs, contract execution costs, network bandwidth costs, storage costs, and so on.

The supply of RING on the Darwinia Network's mainnet is 2 billion. After that, the newly issued RING will be distributed to the Staking system and Treasury through block rewards.

After the Darwinia mainnet is launched, the block reward for that year is adjusted once a year, and the block reward for the Nth year is `1-(99 /100)^sqrt(N)` of the remaining issuable supply.

```angular2
Total remaining issuable = total hard cap-current supply

Supply in the next year = Supply in the previous year + Sum of actual block rewards for the year
```

The total hard cap of RING is 10 billion.

According to the annual block reward and the block interval time (unit: second), the block reward for each block in the year can be calculated.

```angular2
Block reward for each block = block reward for the year × block generation interval ÷ total number of seconds per year (that is, 365 times 24 times 3600)
```

# Income Distribution

Darwinia's total revenue includes block rewards and Darwinia's transaction fees. Darwinia network transaction fees include network fees, cross-chain service pledge fees, application chain access fees, and related applications such as the income that Evolution Planet independently chooses to allocate to Darwinia Network. ![Revenue distribution](assets/rfc-en-reward.jpeg)

```angular2
Staking = system revenue × Y
Treasury = system revenue × (1-Y)
```

Treasury is mainly used to pay for system proposal budgets, which may include system operation proposals such as NFT mining or App mining, Polkadot slot bidding incentives, or for ecological developer support.

Note: The system staking income is a percentage Y of the total income of the Darwinia network (Y is a system parameter). Staking on Darwinia Network will distribute the main income as incentives to the participants of Staking. The staking process can also be understood as the POS mining process, where miners obtain staking energy by pledged assets to conduct POS mining.

Generally speaking, users can staking the basic asset RING for POS mining. If the user takes out the pledged RINGs, mining will stop, and it will take 14 days for the staked RING to be fully credited to their account


Staking can be divided into basic version and professional version according to its simplicity and complexity.

![Staking process](assets/rfc-en-staking_flow.jpeg)

# Kryptonite (KTON)

In order to encourage users to lock in for a long time and commit to investment, users can promise to lock the RING for 1-36 months during the staking RING process. The system will reward users who participate in staking with a kryptonite token, but the user cannot, during the lock time period, unlock the RING (unless they pay 3 times the Kryptonite reward as fine)

Therefore, when using RING for staking, users can choose to promise to lock RING for a period of time to obtain kryptonite. The initial supply of kryptonite is zero, but the mainnet launch of the Evolution Land application has begun to lock RING to obtain kryptonite, so there will be a certain supply of kryptonite when the mainnet is launched. The earliest design to obtain kryptonite by locking the RING was in the Evolution Land Gringotts Bank. For more information, please refer to the Gringotts Kryptonite Model [5].

Kryptonite can be used to pledge to obtain staking energy, so it can also participate in POS mining. If the user takes out the pledged kryptonite, mining will stop, and it will take 14 days for the kryptonite to be fully credited to their account

# Staking computing power

The staking computing power of an account represents the contribution of the account to staking process at the current time, and the staking computing power can be analogous to the computing power in POW. The computing power value of each account is determined by the RING and KTON assets pledged in the account. Once the pledge is released, the corresponding computing power will disappear.

The staking calculation power ratio of the account changes continuously with the amount of pledged assets, and cannot be transferred or sold. Staking participants can modify or completely change the validators that they vote for without unlocking the pledge.

The computing power value may also play an important role in the governance and upgrade of the system. (Remark 2)

The ratio of computing power to the total computing power is called the percentage of computing power.

<!-- Please review the Formulae -->
```angular2
Computing power = total computing power × percentage of computing power

The percentage of computing power in this account = percentage of computing power (RING part) + percentage of computing power (kryptonite part)
```

The calculation formula for the percentage of computing power contributed by RING and kryptonite are:

```angular2
Proportion of computing power (RING part) = RING computing power contribution ratio × RING pledged / total number of RING pledges

Proportion of computing power (kryptonite part) = (1-RING computing power contribution ratio) × kryptonite in pledge / total kryptonite pledge
```

The staking income formula for an account is:

```angular2
Account Staking Income = (Total Revenue of Darwina Network × Y) × Proportion of Account Computing Power
```

The voting weight formula for an account is:

```angular2
Account voting weight = total voting weight × account computing power percentage
```

Note 1: The RING computing power contribution ratio is 0.5 by default.

Note 2: Because kryptonite can be resold to others, liquid kryptonite may not fully represent the long-term commitment investment. Only the “asset × days” promised to lock and pledge can accurately represent the commitment investment to the Darwinia Network. 

# Slash algorithm:

In order to prevent the validator from attacking or generating unstable blocks, when an attack or error occurs, the system needs to punish the assets pledged by the validator (including voters nominating the validator). The punishment process and mechanism is called the Slash algorithm.

Because there are actually two pledge assets of RING and KTON in the Darwinia Network, some supplementary explanations on the algorithm of Slash are needed.

The penalty-related parameters in the staking system will be based on a percentage. When a slash occurs, the assets pledged by the validator or user will be punished according to this percentage, regardless of whether the pledged asset is RING or KTON.

In addition, in the Darwinia network staking system, RING has four main states: account balance, staking, locked staking, and released. Therefore, there are two staking states of RING assets, namely staking and locked staking, and RINGs locked in staking state may have different unlocking expiration times. Therefore, when Slash occurs, it is necessary to determine the sequence and priority of different RING pledge assets being Slashed. The staking system will prioritize Slash's pledged assets that expire earlier, that is, Slash's pledged assets that are not in the locked state first, and *then* Slash those pledged assets whose unlocking time expires first.

# Staking model design explanation

The Darwinia Network will distribute all income as incentives to staking participants.

The income sources of the Darwinia Network are roughly divided into two types:

-Block reward (BLOCK_REWARD), the annual block reward upper limit will decrease over time, and the inflation rate will shrink and decrease rapidly over time.
-Darwinia network transaction fee (NETWORK_FEE), including developers' use of the Darwinia network's cross-chain services, the access fee of the Darwinia network parachain, and related applications such as Evolution Land's independent selection of the income allocated to the Darwinia Network.

Because the Polkadot network uses a shared pool security model, when in the Polkadot connection mode, the security of the parachain will be guaranteed by the verifier of the relay chain. In this case, the Darwinia network does not need to be responsible for verification, only the Collator will be.

Therefore, the security incentives of Darwinia Network Staking in these two modes will also be very different, and are explained below:

## Solo model income distribution

Validators and KTON holders will share the income of the Evolution Land according to a ratio. KTON holders can vote for their KTON to the validator at the same time to obtain part of the validator's staking incentive. (Y is a system parameter, which will be set through the governance mechanism of KTON voting)

```angular2
(Lock KTON, all KTON, Treasury) = [(Block reward upper limit × kryptonite lock rate + NETWORK_FEE)×X%, (block reward upper limit × RING lock rate + NETWORK_FEE)×Y%, (block reward upper limit + NETWORK_FEE) × (100-X-Y)%]
```

## Polkadot connection mode income distribution

When the Darwinia network intends to connect to the Polkadot network, according to the model of the Polkadot Parachain Auction [4], the Darwinia relay chain will need to lock enough DOTs to participate in the Parachain Slots auction. Whether it wins is only related to the number of locked DOTs, depending on the time. Market conditions. In order to gain sufficient competitiveness, Darwinia Networks will design a crowdfunding lock-in bidding mechanism to incentivize Darwinia community participants to help bidding.

### Crowdfunding to lock in bids

Polkadot's Parachain Slot auction bidding allows any type of abstract account to participate in the bidding, including ordinary address accounts, smart contract accounts, and parachain accounts. This extensive abstract account support provides flexibility for participating bidders to design various decentralized bidding models. Darwinia Networks will design a Polka connection mode to lock DOT through crowdfunding to participate in Parachain Slots bidding. Crowdfunders do not need to transfer DOT ownership, but only need to lock the DOT and provide the lock certificate, and open a certain vote for the bidding authority used by the Darwinia relay chain. The DOTs locked in bidding are safe, because the entire process is completed through smart contracts (or relay chains), and no one can control this part of the locked assets.

When the Darwinia Network switches to the Polkadot connection mode, the Darwinia Network no longer needs its own validators. The part that was used to incentivize the Staking of KTON lockers will be used to reward those participants who help the Darwinia Network conduct DOT lock bidding, that is, It is said that DOT holders in the Darwinia community will be able to obtain RING network income rewards by providing DOT bidding and locking credentials.

```angular2
(Darwinia bidding locked in DOT, all KTON, Treasury) = [(Block reward upper limit + NETWORK_FEE) × X%, (block reward upper limit × RING lock rate + NETWORK_FEE) × Y%, (block reward upper limit + NETWORK_FEE) × (100-X-Y)%]
```

## Other architecture references

- [Cosmos Staking](<https://blog.cosmos.network/economics-of-proof-of-stake-bridging-the-economic-system-of-old-into-the-new-age-of-blockchains-3f17824e91db>)

- [Polkadot Staking](https://medium.com/polkadot-network/polkadot-proof-of-concept-4-arrives-with-new-ways-to-stake-3b27037346cc)

- [Polkadot Parachain Slot Auction](https://wiki.polkadot.network/en/latest/polkadot/learn/auction/)

# Reference and implementation

## Code library

<https://github.com/darwinia-network/darwinia/tree/develop/srml/staking>

## Main features and innovations [WIP]

- Support seamless switching between Solo mode and Polkadot connection mode
- Second-order staking model: locked kryptonite is equivalent to second-order locked RING
- Kryptonite is generated based on the Gringotts Kryptonite interest algorithm, which encourages long-term lock-in and long-term investment
- Tokenization of staking rights and voting rights, the locked kryptonite after staking is the voting right

# Disadvantages

- Design changes: The liquidity model at the application level can adopt a scheme similar to the Uniswap model

# Reason [WIP]

# Current technology

- <https://github.com/evolutionlandorg/bank>
- <https://github.com/evolutionlandorg/darwinia-appchain/tree/master/srml/token>

# Question

[WIP]


# Future possibilities

### The loan business of KTON Virtual Bank's future business expansion plan

When the RING has sufficient liquidity in the future and there is a locked RING in the virtual bank, any player can mortgage enough (3 times) assets (such as ETH) to borrow from the virtual bank, but needs to pay kryptonite at the time of the loan Loan interest. After the user expires, he can return to the RING loaned out in exchange for mortgage assets.

```angular2
D(N, X, S) = R(N, X, S) * (Loan Multiple) The tentative loan multiple is 2
```

The kryptonite loan interest paid by the borrower will be destroyed by the virtual bank.

At any time, if the virtual bank finds that the collateral is insufficient (the liquidation line is lower than 1.3 times), anyone can use the liquidation action to pay the RING to the virtual bank in exchange for the locked collateral. (This part of the design can refer to MakerDAO)

Kryptonite will serve as a reward for long-term RING holders and value investors, and will play an important role in the important voting of the system and the purchase of system founding items. For example, some reserved plots can only be purchased with kryptonite.

# Reference

- [1] [Evolution Planet Virtual Bank and Kryptonite](https://forum.evolution.land/topics/55)

- [2] [Benefits of PoW](https://mp.weixin.qq.com/s/-Va8Q8I6zTtpNdJImkslrg)

- [3] [Annualized interest rate](<https://baike.baidu.com/item/%E5%B9%B4%E5%8C%96%E5%88%A9%E7%8E%87/5834305>)