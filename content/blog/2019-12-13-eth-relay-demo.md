---
title: Darwinia ETH-Relay Demo（视频）
author: @DarwiniaNetwork
authorURL: http://twitter.com/DarwiniaNetwork
---

## Darwinia ETH-Relay Demo（视频）

ETH-Relay是Darwinia去中心化资产背书技术的核心模块之一。

<!--truncate-->

ETH-Relay模块源代码地址：https://github.com/darwinia-network/darwinia/tree/develop/srml/eth-relay

Darwinia ETH-Relay Demo：https://youtu.be/a4d_1vPhwZI

**环境准备：**
1）启动Darwinia测试网络和Ropsten网络节点
2）设置ETH-Relay Genesis Block Header
3）准备worker脚本和提交交易证明脚本4）区块链浏览器：subscan.io、etherscan.io

**ETH-Relay流程：**
1）开启ETH-Relay模块后，worker程序(任何人都可以运行)将不断中继以太坊上的区块头至Darwinia网络。ETH-Relay将提供跨链验证的服务。
2）举一个例子演示去中心化背书技术，例如, Darwinia网络作为原生链具有背书模块并运行ETH-Relay，在需要将以太坊网络上的ERC-20 RING赎回至Darwinia网络，首先发起销毁和赎回交易。
3）在以太坊网络上发起的销毁和赎回交易确认后，通过以下服务将可以计算并生成交易收据证明，并将该交易收据证明提交至Darwinia 网络ETH-Relay跨链验证证明，证明通过后将可以继续后续赎回动作。

注：背书和赎回模块正在开发中，交易第三部验证通过后将会调用赎回模块赎回锁定在背书模块中的RING至目标地址。