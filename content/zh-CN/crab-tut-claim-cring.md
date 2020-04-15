---
id: crab-tut-claim-cring
title: 如何领取空投的cRING
sidebar_label: 领取空投的cRing
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/crab-tut-claim-cring.md
---
## 领取条件

Darwinia Crab 为模拟真实的网络生态，为 **ERC-20 RING** **ERC-20 DOT** 和 **TRC-20 RING** 的持有者空投了Crab 网络的Token-CRING。  

空投将按快照时账号持有 RING（包括**RING余额**和**正在进行中的存单**）和 DOT 的数量进行投放，投放比例为：  
- **1RING -> 1CRING**
- **1DOT -> 50CRING**

快照时间为：**2020-03-20 13:50:00 （+0800）**  

## 环境准备

请根据使用场景和链的需要，选择下列签名工具并下载：

- PC端
  - 以太坊网络签名工具：[metamask](https://metamask.io/)
  - 波场网络签名工具：[Tronlink](https://www.tronlink.org/)

- 移动端
  - 以太坊/波场钱包：[麦子钱包](http://www.mathwallet.org/)
  - 以太坊钱包：[imToken](https://token.im/)

> 以上为推荐使用的移动钱包，如遇到使用问题，请尝试升级到最新版本。您也可以根据平时的使用习惯，使用已注入web3环境的移动钱包进行操作。使用非推荐钱包或操作失误有可能造成资产损失，请谨慎评估并承担相应的风险。

## 查询空投数量

1、确认已准备好签名环境，并处于已解锁状态。

2、通过 chrome 浏览器或手机钱包，访问 CRING [领取工具](http://claim.darwinia.network/)

以麦子钱包为例，分别点击底栏【应用】- 【麦子DAPP浏览器】- 输入http://claim.darwinia.network/ 即可访问。

![01_mathwallet](assets/01_mathwallet.png)

3、选择想要查询的网络（以太坊/波场），点击【查询】。（下文以以太坊网络为例）

![02_claim_choosechain](assets/02_claim_choosechain.png)

4、获得查询结果

![03_claim_search](assets/03_claim_search.png)

## 领取CRING空投

1、确认已准备好签名环境，并处于已解锁状态。

2、通过 chrome 浏览器或手机钱包，访问 CRING [领取工具](http://claim.darwinia.network/)

以麦子钱包为例，分别点击底栏【应用】- 【麦子DAPP浏览器】- 输入http://claim.darwinia.network/ 即可访问。

3、选择想要查询的网络（以太坊/波场），点击【领取】。（下文以以太坊网络为例）

![04_claim_choosechain的副本](assets/04_claim_choosechain的副本.png)

4、填写接受 CRING 的 Darwinia Crab 地址，确认无误后，点击【提交】。

⚠️如没有Darwinia Crab 地址，生成方式请参考: [如何创建或导入Darwinia Crab 地址](crab-tut-create-account)

![claim_submitaccount](assets/05_claim_submitaccount.png)

5、通过移动钱包或浏览器插件签名（签名不消耗燃料费）

![06_claim_sign](assets/06_claim_sign.png)

6、成功获取签名信息，点击复制。（请注意保存签名信息，建议在成功接收空投前，暂时不关闭本页面）

![07_claim_copy](assets/07_claim_copy.png)

7、打开[达尔文钱包-认领模块](<http://apps.darwinia.network/#/claims>)：<http://apps.darwinia.network/#/claims>,选中刚刚填写的接收空投的地址，点击【继续】。

![08_claim_chooseaccount](assets/08_claim_chooseaccount.png)

8、将刚刚在 CRING Claim Tool 中生成的签名信息贴入，依次点击【确定认领】-【领取】-【签名】

![09_claim_sign2](assets/09_claim_sign2.png)

9、领取成功后，您将收到如下提示。这时就代表您的空投已成功领取，可以到 [达尔文钱包-账户](<http://apps.darwinia.network/#/accounts>) 或 [subscan](<https://crab.subscan.io/>)中查看账户余额信息。

![10_claim_success](assets/10_claim_success.png)

- 如果您在领取空投的过程中遇到其他问题，请加入我们的社群交流。
  - 微信公众号：DarwiniaNetwork
  - 微信小助手：Darwinia_Network
  - Telegram：<https://t.me/DarwiniaNetwork>
