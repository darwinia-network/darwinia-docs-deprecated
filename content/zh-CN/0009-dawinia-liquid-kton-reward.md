---
id: rfc-0009
title: Dawinia liquid kton reward
sidebar_label: Dawinia liquid kton reward
custom_edit_url: https://github.com/darwinia-network/rfc/edit/master/RFC/src/0009-dawinia-liquid-kton-reward.md
---

- rfc: 9
- title: 0009-dawinia-liquid-kton-reward
- status: Abandoned
- desc: 给流动KTON分发RING收益

- 功能描述: 给流动KTON分发RING收益
- 开始时间: 2019-05-13
- RFC PR: None
- Github Issue: None

# 概要
[summary]: #summary

在达尔文网络Solo模式设计中，需要给全部KTON进行RING收益的分发，这意味着收益分发前后KTON都是可以转账和流动的，即需要可以支持给流动KTON进行RING收益的分发。

由于分发收益时，需要明确确定收益所有权的界限，因此在分发收益时，一般都需要锁定权益通证，以方便清算。但是在达尔文网络Solo模式中，需要支持KTON可以流动，因此RING收益如果想要做到实时，需要将颗粒度放小，在任何KTON发生转账前后进行清算。

以太坊中的ERC20的转账，只需要记录balance的变化即可，但在KTON中，需要记录其当前收益的情况，以方便清算。可以理解为:


## KTON转账模型

通常原生代币的转账可以理解为
```angular2
Normal_Transfer = Sender_Output + Receiver_Input
```

KTON的转账可以理解为

```angular2
KTON_Transfer = Reward_Settlement(Sender_KTON_Output) + Sender_KTON_Output + Receiver_KTON_Input + Reward_Settlement(Receiver_KTON_Input)
```

### 参考以太坊P3D的Reward_Settlement做法

在P3D Token中，没有Transfer方法，只有Withdraw和Deposit方法，但实际上Transfer方法可以通过组合的方式得出，也就是说

Transfer(sender, to) = sender.Withdraw + to.Deposit

因为P3D中也存在收益分配的做法，因此Withdraw和Deposit中也需要进行Reward_Settlement操作.

即

```angular2
sender.Withdraw = sender.Reward_Settlement(Output) + sender.normal_withdraw(Output)
```

```angular2
to.Deposit = to.normal_deposit(Input) + to.Reward_Settlement(Input)
```

在KTON没有发生转账的情况下，也有可能会发生Reward_Settlement:

    - 有收益进账，需要进行分配
        对于这种情况，如果每一次收益分配时，都对每个KTON持有者的收益余额进行计算，会消耗大量的计算资源，因此不切实际。改进的办法是，KTON持有者的收益都放入一个池子，在需要清算时再针对单个KTON持有者进行计算。
        因此，收益进账后，只有收益池的总额发生了变化。
    - KTON持有者Claim收益
        但某一个KTON持有者希望Claim收益时，会根据收益池RING总量，该持有者的KTON数量，KTON总量，按比例计算出可以Claim的收益，并将该次收益提现记录进该账户已提现的总量。
        
        该账户可提现数量 = 该账户可提现数量(已清算 + 未清算) - 该账户已提现数量


# 动机和目的
[motivation]: #motivation

- 提供一个可以给流动性原生通证清算收益的技术方案

# 参考和实现
[reference-level-explanation]: #reference-level-explanation

## 代码库

https://github.com/darwinia-network/darwinia/tree/master/srml/kton

## 主要特性[WIP]

- 支持转账
- 支持Staking收益分配
- 支持领取收益
- 收益分配可以实时进行


# 缺点
[drawbacks]: #drawbacks

- 转账时需要多出一定的链上收益清算计算量
- 如果KTON持有者的账户是合约账户，那么目前的RING收益只能该合约账户去领取，但是合约账户是否支持是个问题。
- 本解决方案范围不包括在其他公链(例如以太坊或者波场)上的KTON收益分配，对于其他网络上的KTON，应该会统一在达尔文中继链上创建一个账户，用于领取收益，具体的收益则在对应公链上发生，例如目前进化星球基于状态通道的收益分配方式并不会发生变化，好处是相应的KTON也可以得到收益。

# 理由
[rationale-and-alternatives]: #rationale-and-alternatives

具体Staking的设计参考RFC-0007。具体的技术方案则参考了P3D的实现。P3D没有支持转账方法，有其业务层面的考虑，也有可能因为转账操作的燃料费消耗考虑。
但对于KTON这样的原生通证，可以再SRML层面实现。

# 现有技术
[prior-art]: #prior-art


# 以太坊上一些常见的收益分配方案可以作为参考

## ERC-20回购销毁分红法

对通证进行销毁，其实是一种变相等价的分红方法，其他通证持有人手上的通证数量没有变化，但是比例上升，且供应量减少但对应系统的价值没有变化，本质上其实也是一种分红，具体案例参考BNB回购销毁分红。

该方法的缺点在于，需要分红通证和权益通证之间有较好的流通性市场，才能通过回购的方式将分红通证兑换成权益通证，进而将权益通证销毁进行分红，否则不适合使用此方法。

另外，虽然数学上回购销毁几乎等同于分红，但是从市场感知上不明显，从普通用户视角来看，不如看到账面上余额数字的增加来得容易感知。所以，实际效果上回购销毁不如直接分发。

## ERC-20冻结转账(P3D)分红方法

将主要以P3D为例解释这种通过合约进行分红的方法。

P3D严格意义上不同于ERC20通证，因为不支持通证转账功能，只存在购入和卖出两种方式变更通证持有者的余额。P3D因为这种简化反而对分红方法带来了简化，也就是只需要在通证持有者余额变化时更新持有者的分红数量，实现精确的合约分红。

具体实现是，维护以下账本，以权益通证P3D和分红币ETH为例：

Total_ETH_Dividends_Balance,  所有历史分红的总和，只会增加不会减少。每次分红的时候会增加。
My_ETH_Dividends_Balance_Claimed[address], 某P3D持有者放在系统保险箱里的ETH分红余额，刚开始为0，但是每次持有者P3D余额变化（购入，卖出）的时候ETH分红余额会更新并增加，持有者可以从中领取分红到自己的钱包，并相应减少。

Last_Claim_Total_ETH_Dividends_Balance[address], 某P3D持有者上一次Claim时，Total_ETH_Dividends_Balance的值，每次持有者余额变化（购入，卖出）的时候会更新。
每次持有者余额变化（购入，卖出）的时候，操作之前的P3D余额为balance_before, P3D总额为balance_total_before，操作之后的P3D余额为balance_after, P3D总额为balance_total_after，持有者的地址为address。则首先会进行第2、3账本的更新。
```
My_ETH_Dividends_Balance_Claimed[address] += {Total_ETH_Dividends_Balance - Last_Claim_Total_ETH_Dividends_Balance[address]} * [balance_before/balance_total_before]
Last_Claim_Total_ETH_Dividends_Balance[address] = Total_ETH_Dividends_Balance
```
进行其他P3D余额的变化

优点，去中心化方式，合约分账分红。缺点，可能需要锁定转账功能。

ERC20中持有者余额变化频繁，可以通过转账，发行，销毁等方式进行，如果每次转账都需要触发分红合约，会增加不必要燃料费，并增加合约复杂度，并且大多数ERC20通证并不支持在转账交易中做额外的事情。(部分ERC223可能支持，KTON的具体实现也比较复杂，友好支持程度偏悲观)。除非要求ERC20代币锁定之后，可以使用这个方法。

https://etherscan.io/address/0xb3775fb83f7d12a36e0475abdd1fca35c091efbe#code

# 问题
[unresolved-questions]: #unresolved-questions

[WIP]


# 未来的可能性
[future-possibilities]: #future-possibilities

- 做成一个通用的SRML


# 参考

- [1] [RFC Issue](https://github.com/darwinia-network/rfcs/issues/6)
- [2] [P3D代码实现](https://etherscan.io/address/0xb3775fb83f7d12a36e0475abdd1fca35c091efbe#code)
