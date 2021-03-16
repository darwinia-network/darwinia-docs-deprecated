---
id: crab-tut-nominator
title: 如何成为一个投票人
sidebar_label: 成为投票人
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/crab-tut-nominator.md
---
> - Staking 是基于 PoS（Proof of Stake/权益证明）的共识机制，代币持有人通过质押、投票、委托和锁定等行为获取收益。

> - 在参与 staking 之前，请确保有至少拥有 **1** 个 Darwinia 地址，如果您持有较多代币或对安全性要求较高，建议准备 **2** 个 Darwinia 地址。没有地址请参考：[如何创建账户](https://docs.darwinia.network/docs/zh-CN/crab-tut-create-account)

> - Darwinia 地址内需准备少许 CRING，作为交易手续费。没有 CRING 请参考：[如何通过水龙头获得免费的 CRING](https://docs.darwinia.network/docs/zh-CN/crab-tut-claim-cring)

## 开始质押

- 进入 [Darwinia Web Wallet](https://apps.darwinia.network)，点击左侧【抵押】栏目，点击【开始 staking】  
  ![crab-tut-nominator-1](assets/crab-tut-nominator-1.png)


- 填写 Staking 参数  
  
  ![crab-tut-nominator-2](assets/crab-tut-nominator-2.png)
    - ` 资金账户 ` 保管资金的账号，参与 Staking 的代币将来自这个账户，此账户的操作多与资金变动相关。
    - ` 控制账户 ` 管理 Staking 其他操作的账号，如参与投票、参与验证等。
  
      > ` 资金账户 ` 和 ` 控制账户 ` 可设置为同一账户，如果您持有较多代币或对安全性要求较高，建议此处设置为不同账号。  

    -  ` 冻结数量 ` 参与 Staking 的代币数量，这部分代币将被暂时冻结，解冻需要 14 天的解冻期；您可以选择冻结 CRING 或 CKTON。
    - ` 收益账号 ` 接收 Staking 收益的账号
    - ` 冻结期限 ` 可选项；将 CRING 承诺冻结 3-36 个月，可以获得额外的 CKTON 奖励。(承诺锁定需接受用户条款)
  
      > 如提前赎回有承诺期限的 CRING，需要支付获得奖励 **3** 倍的 CKTON 惩罚 (在 CKTON 不足的情况下，不可以使用 CRING 来代缴罚金)。

- 填写好 Staking 参数后，请点击【冻结】，签名并提交。  
  ![crab-tut-nominator-3](assets/crab-tut-nominator-3.png)

<hr />

## 提名验证人

> **注意**: 验证人和提名人的身份是互斥的，不可并存。如果您正在参选验证人，需要先取消参选验证人，再进行后续的提名操作。

1. 完成 Staking 参数后，在本页面点击【提名】。
   
   ![wiki-tut-nominator-4](assets/wiki-tut-nominator-4-cn.png)
  
2. 选择合适的验证人，并点击【提名】。
   
   ![wiki-tut-nominator-5](assets/wiki-tut-nominator-5-cn.png)

3. 签名并提交。
   
   ![wiki-tut-nominator-6](assets/wiki-tut-nominator-6-cn.png)

4. 返回【抵押】处，查看已提名验证人的相关信息。
   
   ![wiki-tut-nominator-7](assets/wiki-tut-nominator-7-cn.png)

     > 提名验证人的操作结果，会在下一个 era 开始时生效，暂时延迟为正常现象。

<hr />

## 资产状态

当前的资产状态列举如下：
- ` 可用的 ` 当前可以操作的 token 数量，可用于质押、交易、转账等。
  
- ` 冻结 ` 无法直接操作但无锁定期限的的 token 数量，用于获取 power，可以随时取出（需要 14 天等待期限）或添加锁定期限。
  
- ` 锁定 ` 无法直接操作的 token 且有锁定期限的 token 数量，用于获取投票权，锁定也可以获得额外的氪石收益。

- ` 解冻中 ` 已选择取出但在等待期限的 token。

<hr />

## 其他 Staking 操作

Staking 还有一些其他操作，感兴趣的朋友，可以自行探索，列举如下：

![wiki-tut-nominator-8](assets/wiki-tut-nominator-8-cn.png)

  - ` 停止提名 ` 取消所有投票。

  - ` 质押 `  增加 Staking 冻结的代币，用来获得更多的票权（power）。

  - ` 解除质押 ` 解冻 Staking 的代币，与此同时票权（power）也会按比例减少。
  
     > 取消抵押需要 14 天的解冻期，处于解冻期内的代币不能进行任何操作，请谨慎处理。

  - ` 收益历史 ` 去 Subscan 浏览器查看历史收益记录
  
  - ` 领取收益 ` 手动领取已获得的收益，收益将以 era 为单位发放。

     > 注意：收益会保存 56 个 era（约 56 天），超期将无法领取。

  ![](assets/wiki-tut-nominator-9-cn.png)

  - ` 领取收益 ` 手动领取已获得的收益，收益将以 era 为单位发放。
  
  - ` 质押更多资金 ` 增加 Staking 冻结的代币，用来获得更多的票权（power）。

  - ` 解除质押资金 ` 解冻 Staking 的代币，与此同时票权（power）也会按比例减少。

  - ` 冻结转锁定 ` 将冻结的 Staking 代币锁定，并选择锁定期限，可以获得额外的氪石奖励。

  - ` 撤销解冻 ` 将解冻中的资产重新冻结以恢复票权（power）。

  - ` 更改控制账户 ` 更改用于管理 Staking 其他操作的账号，如参与投票、参与验证等。

  - ` 更改收益账号 ` 更改用于接收 Staking 收益的账号。

  - ` 设置 session keys` 如果要升级成为验证人，需填写此项。[如何成为验证人](https://docs.darwinia.network/docs/zh-CN/wiki-tut-validator)

  - ` 设置链上身份 ` 设置您的个人信息，如昵称、邮箱、网站、twitter、riot 等信息，其他用户可查看此信息并联系您。
