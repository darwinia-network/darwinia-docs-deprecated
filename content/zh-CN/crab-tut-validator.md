---
id: crab-tut-validator
title: 如何成为验证人
sidebar_label: 成为验证人
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/crab-tut-validator.md
---
> - Staking是基于PoS（Proof of Stake/权益证明）的共识机制，代币持有人通过质押、投票、委托和锁定等行为获取收益。

> - 在参与 staking 之前，请确保有至少拥有**1个** Darwinia 地址，如果您持有较多代币或对安全性要求较高，建议准备**2个** Darwinia 地址。没有地址请参考：[如何创建账户](https://docs.darwinia.network/docs/zh-CN/crab-tut-create-account)

> - Darwinia 地址内需准备少许 CRING ，作为交易手续费。没有CRING请参考：[如何通过水龙头获得免费的CRING](https://docs.darwinia.network/docs/zh-CN/crab-tut-claim-cring)

## Start Staking

**入口**

- 进入[Darwinia Web Wallet](http://apps.darwinia.network/)，点击左侧【抵押】栏目， 点击【开始 staking 】  

![crab-tut-nominator-1](assets/crab-tut-nominator-1.png)


**填写Staking参数**  

![crab-tut-nominator-2](assets/crab-tut-nominator-2.png)


- `资金账户` 保管资金的账号，参与 staking 的代币将来自这个账户，此账户的操作多与资金变动相关。
- `控制账户` 管理 staking 其他操作的账号，如参与投票、参与验证等。
  
  > `资金账户`和`控制账户`可设置为同一账户，如果您持有较多代币或对安全性要求较高，建议此处设置为不同账号。  

-  `冻结数量` 参与 staking 的代币数量，这部分代币将被暂时冻结，解冻需要14天的解冻期；您可以选择冻结 CRING 或 CKTON。
- `收益账号` 接收 staking 收益的账号
- `冻结期限` 可选项；将 CRING 承诺冻结3-36个月，可以获得额外的 CKTON 奖励。(承诺锁定需接受用户条款)
  
  > 如提前赎回有承诺期限的 CRING，需要支付CKTON奖励3倍的惩罚。


- 填写好staking参数后，请点击【冻结】，签名并提交。  

![crab-tut-nominator-3](assets/crab-tut-nominator-3.png)


## 参选验证人

**生成 session key**

点击左侧【设置】，将接口操作模式改为开发者模式；开启【自定义终端】，输入本地节点地址，确认无误后点击【保存】。

![tut-validator-session-1-cn](assets/tut-validator-session-1-cn.png)

点击左侧 【工具箱】，在 RPC Calls 中选择 `author`/`rotate keys`，点击【submit RPC Call】

![tut-validator-session-2-cn](assets/tut-validator-session-2-cn.png)

复制生成好的 session key 并妥善保管。

   > 通过命令行 生成 session key 请参考: [运行节点:生成session key](https://docs.darwinia.network/docs/zh-CN/crab-tut-node#%E7%94%9F%E6%88%90session-key)

**设置 session key**

点击【session 账号】，输入刚刚生成的 session key ，点击【设置session key】提交。

   > session key 务必填写真实数据，否则会导致漏块，从而收到经济惩罚。
                                                                                                                                                                                  >
![tut-validator-1-cn](assets/tut-validator-1-cn.png)


**确认无误后，点击【签名并提交】** 

![tut-validator-2-cn](assets/tut-validator-2-cn.png)
   > 验证人和提名人的身份是互斥的，不可并存。如果您正在提名其他验证人，需要取消提名操作后，再进行后续的操作。


**点击【验证】，开始设置验证人参数**

- `奖励佣金百分比` 设置本节点优先分配收益的比重，范围为0-100。（例：如设置了5%的奖励佣金，本节点将优先获得节点收益的5%，剩下95%的节点收益，将依据验证人和投票人抵押的金额，按比例分配；也就是说，验证人的收益 = 节点奖励佣金 + 抵押奖励分成）

![tut-validator-3-cn](assets/tut-validator-3-cn.png)


**确认无误后，点击【签名并提交】**

![tut-validator-4-cn](assets/tut-validator-4-cn.png)


**去【浏览器】查看当前验证人的相关信息**
  
![tut-validator-5-cn](assets/tut-validator-5-cn.png)

   > 参选验证人的操作，会在下一个 era 的第一个 epoch 后生效，生效前会展示在【候选】队列。


## 其他操作

**staking还有一些其他操作，用于以下用途：**  

- `停止验证` 退选验证人。
- `抵押`  增加staking冻结的代币，用来获得更多的票权（power）。
- `取消抵押` 解冻staking的代币，与此同时票权（power）也会按比例减少。

  > 取消抵押需要14天的解冻期，处于解冻期内的代币不能进行任何操作，请谨慎处理。

- `收益历史` 去 SUBSCAN 浏览器查看历史收益记录。
- `领取收益` 手动领取已获得的收益，收益将以era为单位发放。

  > 请注意：收益会保存336个era(约7天)，超期将无法领取。
                                     
- `更改控制账户` 更改用于管理 staking 其他操作的账号，如参与投票、参与验证等。
- `更改收益账号` 更改用于接收 staking 收益的账号。
- `设置 session keys` 更改 session key，请谨慎操作。
- `设置链上身份` 设置您的个人信息，如昵称、邮箱、网站、twitter、riot等信息，其他用户可查看此信息并联系您。
