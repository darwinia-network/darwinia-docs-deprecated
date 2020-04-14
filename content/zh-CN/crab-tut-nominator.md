---
id: crab-tut-nominator
title: 如何成为一个投票人
sidebar_label: 成为投票人
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/crab-tut-nominator.md
---
> · Staking是基于PoS（Proof of Stake/权益证明）的共识机制，代币持有人通过质押、投票、委托和锁定等行为获取收益。
> · 在参与 staking 之前，请确保有至少拥有**1个** Darwinia 地址，如果您持有较多代币或对安全性要求较高，建议准备**2个** Darwinia 地址。没有地址请参考：[如何创建账户](https://docs.darwinia.network/docs/zh-CN/crab-tut-create-account)
> · Darwinia 地址内需准备少许 CRING ，作为交易手续费。没有CRING请参考：[如何通过水龙头获得免费的CRING](https://docs.darwinia.network/docs/zh-CN/crab-tut-claim-cring)

## Start Staking

#### 入口

- 进入[Darwinia Wallet](http://apps.darwinia.network/)
  &&&&&图1&&&&&

- 点击左侧【抵押】栏目

- 点击【开始 staking 】

#### 填写staking参数

- 填写参数

- &&&&&图2&&&&&

  `资金账户` 保管资金的账号，参与 staking 的代币将来自这个账户，此账户的操作多与资金变动相关。
  `控制账户` 管理 staking 其他操作的账号，如参与投票、参与验证等。

  > `资金账户`和`控制账户`可设置为同一账户，如果您持有较多代币或对安全性要求较高，建议此处设置为不同账号。

  `冻结数量` 参与 staking 的代币数量，这部分代币将被暂时冻结，解冻需要14天的解冻期；您可以选择冻结 CRING 或 CKTON。
  `收益账号` 接收 staking 收益的账号
  `冻结期限` 可选项；将 CRING 承诺冻结3-36个月，可以获得额外的 CKTON 奖励。(承诺锁定需接受用户条款)

  > 如提前赎回有承诺期限的 CRING，需要支付CKTON奖励3倍的惩罚。

- 填写好staking参数后，请点击【冻结】。

- 签名并提交

  &&&&&图3&&&&&

#### 提名验证人

- 完成staking参数后，在本页面点击【提名】
  &&&&&图4&&&&&

- 选择中意的验证人
  &&&&&图5&&&&&

- 签名并提交
  &&&&&图6&&&&&

- 查看已提名验证人的相关信息
  &&&&&图7&&&&&

> 提名验证人的操作，会在下一个 era 的第一个 epoch 后生效，暂时延迟为正常现象。

#### 其他操作

staking还有一些其他操作，用于以下用途：

&&&&&图8&&&&&

- `停止提名` 取消所有投票。

- `抵押`  增加staking冻结的代币，用来获得更多的票权（power）。

- `取消抵押` 解冻staking的代币，与此同时票权（power）也会按比例减少。

  > 取消抵押需要14天的解冻期，处于解冻期内的代币不能进行任何操作，请谨慎处理。

- `收益历史` 去SUBSCAN浏览器查看历史收益记录

- `领取收益` 手动领取已获得的收益，收益将以era为单位发放。

  > 请注意：收益会保存240个era，超期将无法领取。

