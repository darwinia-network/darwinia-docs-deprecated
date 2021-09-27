---
id: wiki-us-staking
title: Staking
sidebar_label: Staking
---

达尔文使用 NPoS（Nominated Proof-of-Stake）作为其选择验证人集合的机制。通过“验证人”和“提名人”的角色，达尔文可以最大程度地提高链的安全性。对维护网络感兴趣的人可以运行一个验证人节点。

这套 Staking 系统鼓励 RING/KTON 持有者成为提名人。提名人可以提名多达16个验证候选人。

这套 Staking 系统向所有验证人支付的奖励基本上是平等的，无论验证人 Stake 了多少。一个验证人 Stake 的多少并不影响其获得区块奖励的数量。

奖励的分配是在扣除验证人费用后，按比例分配给所有质押者。通过这种方式，网络鼓励提名那些质押量较小的验证人，以此来建立一个趋近于同等质押量的验证人集合。

## 质押过程

为了鼓励用户进行长期锁定和承诺投入，用户在 Staking RING 的过程中，可以承诺锁定 RING 1 - 36 个月，系统会给参与 Staking 的用户一个 KTON 的通证进行奖励，但在承诺锁定期间无法进行解锁 RING 操作(除非缴纳 3 倍的 KTON 罚金)。

KTON 同样也可以参与 PoS 挖矿。用户通过质押 KTON 进行 Staking，如果用户取回 Staking 质押的 KTON ，那么挖矿将停止，解除质押的 KTON 将需要 14 天时间才能完全到账。

![advanced](assets/wiki-us-staking-advanced.png)

## 验证人和提名人

NPoS 机制里有两个角色，分别是验证者和提名者。一个完整的 NPoS 过程的时间段，叫做 `era` 。这个时间段大约是 1 周，不过，根据参与者的网络和计算环境的不同，这个时间段可能被延迟或提前。一个验证者在一个 `era` 中持有一个验证人池（validator pool），而提名者参与其中。一个账户在一个 `era` 中只能是其中一个角色。

由于验证人的名额有限，那些希望用自己的 RING/KTON 做质押并以此为网络贡献经济保障的人，在无法成为验证人的时候可以选择成为提名人。

验证人做了大部分繁重的工作：他们在 BABE 中产生新的候选区块，在 GRANDPA 中投票并达成共识。

另一方面，提名人的责任则要少得多。这些责任包括监测其验证人的表现（正常运行时间），关注不断变化的佣金率（验证人可以在任何时候改变佣金），以及对他们自己和验证人账户的一般性健康监测。因此，虽然不完全是设置然后忘记（set-it-and-forget-it），但提名人的经验要求非常低。

## 验证人池

一个验证人池由一个当选的验证人和支持该验证人的全体提名人组成。

## Staking 算力

不管是用 RING 还是 KTON 参与 Staking，其本质是通过 Stake RING/KTON 获得 算力，然后以算力进行 NPOS 挖矿。

Staking 算力可以类比为 PoW 中的算力，某账户的 Staking 算力代表此账户当前时间对 Staking 的贡献值大小， 每个账户的算力值由该账户中质押的 RING 和 KTON 资产来决定，一旦解除质押，相应的算力也将消失。算力不能转移或者转账。

- validator pool 的算力

    `validator pool 的算力占比`：这个 validator pool 中质押的资产 占 总质押的资产 的比例。

    `validator pool 的算力`： 总算力 * validator pool 的算力占比

- 账户投入到 validator pool 中的算力

    `账户的算力占比` ：其质押的资产占总质押的资产 的比例。

    `账户的算力` ： 总算力 * 账户的算力占比。

    `账户投入 validator pool 中的算力` ： 账户的算力 / N（假设 账户 投了 N 个 validator）。

那么，通过上面两个数据，我们就能算出 `账户在 validator pool 中的算力占比`：

`账户在 validator pool 中的算力占比`： 账户投入 validator pool 中的算力 / validator pool 的算力。

## 奖励分配

对于每个验证人池，系统会有一个提名人的列表及其的质押。

跨验证池奖励的一般规则是，两个验证池在同等工作的情况下获得的令牌数量基本相同，也就是说，他们不是按照每个池的赌注比例来获得奖励的。因为 era points 和 tips，奖励会略有不同，但整体上奖励会随着时间的推移而平均化。

因此，提名人会逐渐将自己的质押转移到那些拥有足够好的声誉同时质押量低的（拥有较低的权力）验证人身上。这样做的原因是，我们希望整个验证人池中的质押量尽可能地平均分配，以避免权力集中在少数验证人身上。

在一个 era 之后，平台将生成的额外的 RING 作为奖励（见Inflation），平分给所有这个 era 中的 validator pools，每个 validator pool 拿到奖励后，先会从中扣除一部分作为佣金（commission） 费用分配给 validator，剩余的会平分成两个等分，一部分是给予质押 RING 的验证人和提名人，另一部分是给予质押 KTON 的验证人和提名人。这部分的奖励是按 `账户在 validator pool 中的算力占比` 来奖励给账户的（账户得到的 Token 奖励由奖励分配比例决定，分配比例则由 Staking 算力呈现）。所以用户为了获得更多的奖励，他会选择那些 算力 较小的 validator pool。

## 帐户

你可以有两个不同的账户来管理你的资金。分别是 Stash 账户 和 Controller 账户。

- Stash 账户。这个账户持有用于质押的资金，但将一些功能委托给一个 Controller 账户。因此，你可以将 Stash 账户的私钥 放在冷钱包中，这意味着它一直处于离线状态。
- Controller 账户。这个账户代表 Stash账户 行事，执行实际提名和验证的操作。可以设置支付账户和佣金等参数。如果你是一个验证者，它也设置你的[会话密钥](https://wiki.polkadot.network/docs/learn-keys#session-keys)。它只需要足够的资金来支付交易费用。

Stash 账户 和 Controller 账户的密钥可以是 sr25519 或者 ed25519。关于在 Polkadot 生态中如何使用密钥以及其背后的密码学的更多知识，请看[这里](https://wiki.polkadot.network/docs/learn-keys)。

## 罚款

如果验证人在网络中行为不端（如脱机、攻击网络或运行修改过的软件），就会被罚款。他们和他们的提名人都将被罚没一定比例的抵押令牌。罚没的令牌将被转到财政部。

总质押量较大的验证人池会被罚得更厉害，所以我们鼓励提名人将其提名转移到那些质押量较小的验证人身上，以减少可能的损失。

为了防止来自验证者的攻击或不稳定的区块验证，当攻击或错误发生时，系统需要对验证者（和投票者）进行惩罚，罚没其质押的令牌。惩罚的过程和机制被称为 Slash algorithm。

由于达尔文网络中存在两种不同的代币（RING 和 KTON），因此需要对 Slash algorithm 进行补充解释。

Staking 系统中与惩罚有关的参数都是基于百分比的，在发生罚款时，验证人和提名人所质押的令牌将被罚去一定的百分比，无论代币是 RING 还是 KTON。

在达尔文网络的 Staking 系统中，RING 主要有四种状态：账户余额、Staking 中、Staking 锁定、Un-Staking，因此 Staking 的 RING 存在两种不同的状态：Staking 中 和 Staking 锁定，Staking 锁定的 RING 可能有不同的解锁日期。在发生罚款的情况下，必须确认被罚款的 RING 的顺序和优先级。Staking 系统会按照解锁到期的顺序，先罚到期时间较早的令牌。没有锁定的令牌将首先被罚掉，然后是锁定中的且到期日较早的令牌。

## 通胀

区块奖励的总上限（MAX_BLOCK_REWARD_YEAR）每年调整一次。第 N 年的区块奖励是 剩余可发行总量 乘以 1-(99/100)^sqrt(N) 。

```
Total remaining issuable RING = HARD_CAP - CURRENT_SUPPLY

Supply in the next year = supply in the previous year + total actual reward in the year
```

RING 的 硬顶 为 100 亿。

根据每年的区块奖励限额和区块间隔（以秒为单位），可以计算出一年中每个区块的区块奖励上限（MAX_BLOCK_REWARD）。

```
Block Reward Limit for Each Block = Total Reward Limit for the Year × Block Interval Time /Total Number of Seconds per Year ( 365 * 24 * 3600)
```

下表显示了 RING 的年通胀预测：

![inflation](assets/wiki-us-staking-inflation.png)
