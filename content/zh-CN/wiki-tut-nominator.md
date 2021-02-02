---
id: wiki-tut-nominator
title: 如何成为一个投票人
sidebar_label: 成为投票人
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/crab-tut-nominator.md
---

> - Staking 是基于 NPoS（Proof of Stake/权益证明）的共识机制，代币持有人通过质押、投票、委托和锁定等行为获取收益。


如果你的账户拥有部分 `RING/KTON`，并且想据此来赚取收益，你可以选择成为 `验证人` 或者 `提名者`。

二者在整个达尔文网络中承担的角色不同，要求也不一样。**成为验证者**，你需要全天候 24 小时运行维护验证者节点，否则就会受到惩罚，扣除部分质押金。

当然，如果你觉得成为验证者的要求太高了，成为提名者也是一个不错的选择。想要**成为提名者**，只需要质押冻结一定数量的代币，并参与提名验证者即可，不需要运行节点，也可以赚取收益。

**特别需要注意的是**：

1. 请谨慎选择验证人进行提名操作。如果验证人做出危害整个网络安全的事情，不仅仅验证人的质押会损失，提名该验证人的质押也会同样遭受损失。
2. 在提名过程中质押的资产，将会进入冻结状态，流动性受到限制。质押期间无法再申请成为验证者节点或者使用这部分资产转账，当然你可以随时取消提名，质押的资产会在 14 天之后返还，流动性恢复。

下面具体介绍提名者质押代币和提名候选人的流程。

<hr />

## 开始质押

1. 进入 [Darwinia Web Wallet](https://apps.darwinia.network)，点击左侧【抵押】栏目， 点击【开始 staking 】。
   
   ![crab-tut-nominator-1](assets/crab-tut-nominator-1.png)

2. 填写 Staking 信息，选项如下：

  - `资金账户` 保管资金的账号，参与 staking 的代币将来自这个账户，此账户的操作多与资金变动相关。
  - `控制账户` 管理 staking 其他操作的账号，如参与投票、参与验证等。
  
     > `资金账户`和`控制账户`可设置为同一账户，如果您持有较多代币或对安全性要求较高，建议此处设置为不同账号。  

  - `冻结数量` 参与 staking 的代币数量，这部分代币将被暂时冻结，解冻需要 14 天的解冻期；您可以选择冻结 RING 或 KTON。
     > 冻结数量要少于可用余额， 保留少许 RING，作为交易手续费。
    
  - `收益账号` 接收 staking 收益的账号。
  - `冻结期限` （可选项）将承诺冻结 RING 1-36 个月，可以获得额外的 KTON 奖励。(承诺锁定需接受用户条款)
  
     > 如提前赎回有承诺期限的 RING，需要支付获得奖励 **3** 倍的 KTON 惩罚 (在 KTON 不足的情况下，不可以使用 RING 来代缴罚金)。
	
	![crab-tut-nominator-2](assets/crab-tut-nominator-2.png)

3. 填写完成上述 Staking 参数后，点击【冻结】，签名并提交，到此为止质押完成。稍等片刻，在【抵押】处可以看到最新的账户情况。 
   
   ![crab-tut-nominator-3](assets/crab-tut-nominator-3.png)

<hr />

## 提名验证人

> **注意**： 验证人和提名人的身份是互斥的，不可并存。如果您正在参选验证人，需要先取消参选验证人，再进行后续的提名操作。

1. 完成 staking 参数后，在本页面点击【提名】。
   
   ![wiki-tut-nominator-4](assets/wiki-tut-nominator-4-cn.png)
  
2. 选择合适的验证人，并点击【提名】。
   
   ![wiki-tut-nominator-5](assets/wiki-tut-nominator-5-cn.png)

3. 签名并提交。
   
   ![wiki-tut-nominator-6](assets/wiki-tut-nominator-6-cn.png)

4. 返回 【抵押】处，查看已提名验证人的相关信息。
   
   ![wiki-tut-nominator-7](assets/wiki-tut-nominator-7-cn.png)

     > 提名验证人的操作结果，会在下一个 era 开始时生效，暂时延迟为正常现象。

<hr />

## 资产状态

当前的资产状态列举如下：
- `可用的` 当前可以操作的 token 数量，可用于质押、交易、转账等。
  
- `冻结` 无法直接操作但无锁定期限的的 token 数量，用于获取 power，可以随时取出（需要14天等待期限）或添加锁定期限。
  
- `锁定` 无法直接操作的 token 且有锁定期限的 token 数量，用于获取投票权，锁定也可以获得额外的氪石收益。

- `解冻中` 已选择取出但在等待期限的 token。

<hr />

## 其他 Staking 操作

Staking 还有一些其他操作，感兴趣的朋友，可以自行探索，列举如下：

![wiki-tut-nominator-8](assets/wiki-tut-nominator-8-cn.png)

  - `停止提名` 取消所有投票。

  - `质押`  增加 staking 冻结的代币，用来获得更多的票权（power）。

  - `解除质押` 解冻 staking 的代币，与此同时票权（power）也会按比例减少。
  
     > 取消抵押需要 14 天的解冻期，处于解冻期内的代币不能进行任何操作，请谨慎处理。

  - `收益历史` 去 Subscan 浏览器查看历史收益记录
  
  - `领取收益` 手动领取已获得的收益，收益将以 era 为单位发放。

     > 注意：收益会保存 56 个 era（约 56 天），超期将无法领取。

  ![](assets/wiki-tut-nominator-9-cn.png)

  - `领取收益` 手动领取已获得的收益，收益将以 era 为单位发放。
  
  - `质押更多资金` 增加 staking 冻结的代币，用来获得更多的票权（power）。

  - `解除质押资金` 解冻 staking 的代币，与此同时票权（power）也会按比例减少。

  - `冻结转锁定` 将冻结的 staking 代币锁定，并选择锁定期限，可以获得额外的氪石奖励。

  - `撤销解冻` 将解冻中的资产重新冻结以恢复票权（power）。

  - `更改控制账户` 更改用于管理 staking 其他操作的账号，如参与投票、参与验证等。

  - `更改收益账号` 更改用于接收 staking 收益的账号。

  - `设置 session keys` 如果要升级成为验证人，需填写此项。[如何成为验证人](https://docs.darwinia.network/docs/zh-CN/wiki-tut-validator)

  - `设置链上身份` 设置您的个人信息，如昵称、邮箱、网站、twitter、riot 等信息，其他用户可查看此信息并联系您。
