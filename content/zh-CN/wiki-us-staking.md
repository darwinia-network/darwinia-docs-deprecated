---
id: wiki-us-staking
title: Staking
sidebar_label: Staking
---

Darwinia uses NPoS (Nominated Proof-of-Stake) as its mechanism for selecting the validator set. It is designed with the roles of `validators` and `nominators`, to maximize chain security. Actors who are interested in maintaining the network can run a validator node.

The system encourages RING/KTON holders to participate as nominators. Nominators may back up to 16 validators as trusted validator candidates.

The staking system pays out rewards essentially equally to all validators regardless of stake. Having more stake on a validator does not influence the amount of block rewards it receives. 

Distribution of the rewards are pro-rata to all stakers after the validator payment is deducted. In this way, the network incents the nomination of lower-staked validators to create an equally-staked validator set.

# Basic

用户可以通过 Stake RING 来进行 NPoS 挖矿，如果用户取回 Staking 的 RING，那么挖矿将停止，解除质押的 RING 将需要 14 天时间可以完全到账。

![basic](assets/wiki-us-staking-basic.png)

# Advanced

为了鼓励用户进行长期锁定和承诺投入，用户在 Staking RING 的过程中，可以承诺锁定 RING 1 - 36 个月，系统会给参与 Staking 的用户一个 KTON 的通证进行奖励，但在承诺锁定期间无法进行解锁 RING 操作(除非缴纳 3 倍的 KTON 罚金)。

KTON 同样也可以参与 PoS 挖矿。用户通过质押 KTON 进行 Staking，如果用户取回 Staking 质押的 KTON ，那么挖矿将停止，解除质押的 KTON 将需要 14 天时间可以完全到账。

![advanced](assets/wiki-us-staking-advanced.png)

# Validators and nominators

There are two roles of the NPoS mechanism, the validator, and the nominator. And There is a time period for a completed process of an NPoS mechanism named `era`. The `era` is a period of time around 1 week, it will be delayed or ahead based on the different network and computing environments of the participants. A validator can hold an validator pool in an `era`, and nominators can participate in it. An account can only be one role in one `era`.

Since validator slots are limited, most of those who wish to stake their RING/KTON and contribute economic security to the network will be nominators.

Validators do most of the heavy lifting: they produce new block candidates in BABE, vote and come to consensus in GRANDPA.

Nominators, on the other hand, have far fewer responsibilities. Those include monitoring their validators' performance (uptime), keeping an eye on changing commission rates (a validator can change commission at any time), and general health monitoring of their and their validators' account. Thus, while not exactly set-it-and-forget-it, a nominator's experience is pretty hands-off.

# Validator pool

A validator pool consists of an elected validator together with the nominators backing it.

# Staking 算力

不管是用 RING 还是 KTON 参与 Staking，其本质是通过 Stake RING/KTON 获得 算力，然后以算力进行NPOS挖矿。

Staking 算力可以类比为 PoW 中的算力，某账户的 Staking 算力代表此账户当前时间对 Staking 的贡献值大小， 每个账户的算力值由该账户中质押的 RING 和 氪石 资产来决定，一旦解除质押，相应的算力也将消失。算力不能转移或者转账。

- validator pool 的算力

    `validator pool 的算力占比`：这个 validator pool 中质押的资产 占 总质押的资产 的比例。

    `validator pool 的算力`： 总算力 * validator pool 的算力占比

- 账户投入validator pool中的算力

    `账户的算力占比` ：其质押的资产 占 总质押的资产 的比例。

    `账户的算力` ： 总算力 * 账户的算力占比。

    `账户投入validator pool中的算力` ： 账户的算力 / N，假设 账户 投了 N 个 validator。

那么，通过上面两个数据，我们就能算出 `账户在validator pool中的算力占比`

  `账户在validator pool中的算力占比`： 账户投入validator pool中的算力 / validator pool 的算力

# Staking Rewards Distribution

For each validator pool, we keep a list of nominators with the associated stakes.

The general rule for rewards across validator pools is that two validator pools get paid essentially the **same amount of tokens** for equal work, i.e. they are NOT paid proportional to the stakes in each pool. There is a probabilistic component to staking rewards in the form of era points and tips but these should average out over time.

We thus give nominators an economic incentive to gradually shift their preferences to lower staked(has lower powers) validators that gain a sufficient amount of reputation. The reason for this is that we want the stake across validator pools to be as evenly distributed as possible, to avoid a concentration of power among a few validators.

在一个 `era` 之后，平台将生成的额外的 RING 作为奖励（见Inflation），平分给所有这个 era 中的 validator pools，每个 validator pool 拿到奖励后，先会从中扣除一部分作为 commission 费用分配给 validator，剩余的会平分成两个等分，一部分是给予质押 RING 的验证人和提名人，另一部分是给予质押氪石的验证人和提名人。这部分的奖励是按 `账户在validator pool中的算力占比` 来奖励给账户的（账户得到的 Token 奖励由奖励分配比例决定，分配比例则由 Staking 算力呈现）。所以用户为了获得更多的奖励，他会选择那些 算力 较小的 validator pool。

# Accounts

There are two different accounts for managing your funds: `Stash` and `Controller`.

- **Stash:** This account holds funds bonded for staking, but delegates some functions to a Controller. As a result, you may actively participate with a Stash key kept in a cold wallet, meaning it stays offline all the time. You can also designate a Proxy account to vote in [governance](https://wiki.polkadot.network/docs/learn-governance) proposals.
- **Controller** This account acts on behalf of the Stash account, signalling decisions about nominating and validating. It sets preferences like payout account and commission. If you are a validator, it also sets your [session keys](https://wiki.polkadot.network/docs/learn-keys#session-keys). It only needs enough funds to pay transaction fees.

Controller and Stash account keys can be either sr25519 or ed25519. For more on how keys are used in Polkadot and the cryptography behind it see [here](https://wiki.polkadot.network/docs/learn-keys).

# Slashing

Slashing will happen if a validator misbehaves (e.g. goes offline, attacks the network, or runs modified software) in the network. They and their nominators will get slashed by losing a percentage of their bonded/staked tokens. Any slashed tokens will be added to the Treasury.

Validator pools with larger total stake backing them will get slashed more harshly than less popular ones, so we encourage nominators to shift their nominations to less popular validators to reduce the possible losses.

In order to prevent the network from validators’ attacking or unstable block validation, when the attack or error occurs, the system needs to punish the validator (and the voters) by slashing its staked tokens. The process and mechanism of the penalty is the slash algorithm.

Since there are two different tokens (RING and KTON) existing in the Darwinia Network, supplementary explanation of slash algorithm is required.

The punishment related parameter in Staking system are in percentage, in the occurrences of slashing event, tokens staked by the validator and the voters will be slashed by a certain percentage, no matter whether the tokens are RING or KTON.

In the staking system of Darwinia Network, there are four main states for RING: account balance, in staking, staking lock, un-staking, so there exists two different states for staked RING token: in staking and staking lock, and the RINGs in staking lock may have different unlock date. In the occurrences of slashing, it is essential to confirm the sequential and priority of RINGs that is being slashed. The staking system will follow the order of unlocking expiration, and slash tokens with earlier expiration dates first. The staked tokens that are not locked will be slashed first, and then comes the tokens that locked and with earlier expiry date.

# Inflation

The total cap of the block reward (`MAX_BLOCK_REWARD_YEAR`) is adjusted once a year. The block reward of year N is `1 - (99 /100)^sqrt(N)` of total remaining issuable.

```
Total remaining issuable RING = HARD_CAP - CURRENT_SUPPLY

Supply in the next year = supply in the previous year + total actual reward in the year
```

The total number of `HARD_CAP` for RING is 10 billion.

According to the annual block reward limit and the block interval (in seconds), you can calculate the block reward toplimit (`MAX_BLOCK_REWARD`) for each block of the year.

```
Block Reward Limit for Each Block = Total Reward Limit for the Year × Block Interval Time /Total Number of Seconds per Year ( 365 * 24 * 3600)
```

The following table shows RING’s Annual development statistics:

![inflation](assets/wiki-us-staking-inflation.png)
