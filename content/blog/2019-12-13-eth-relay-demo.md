---
title: Darwinia ETH-Relay Demo（视频）
author: @DarwiniaNetwork
authorURL: http://twitter.com/DarwiniaNetwork
---

## Darwinia ETH-Relay Demo（视频）

ETH-Relay 是 Darwinia 去中心化资产背书技术的核心模块之一。

<!--truncate-->

ETH-Relay 模块源代码地址：https://github.com/darwinia-network/darwinia/tree/develop/srml/eth-relay

Darwinia ETH-Relay Demo:https://youtu.be/a4d_1vPhwZI

**环境准备：**
1）启动 Darwinia 测试网络和 Ropsten 网络节点
2）设置 ETH-Relay Genesis Block Header
3）准备 worker 脚本和提交交易证明脚本 4）区块链浏览器：subscan.io、etherscan.io

**ETH-Relay 流程：**
1）开启 ETH-Relay 模块后，worker 程序(任何人都可以运行)将不断中继以太坊上的区块头至 Darwinia 网络。ETH-Relay 将提供跨链验证的服务。
2）举一个例子演示去中心化背书技术，例如, Darwinia 网络作为原生链具有背书模块并运行 ETH-Relay，在需要将以太坊网络上的 ERC-20 RING 赎回至 Darwinia 网络，首先发起销毁和赎回交易。
3）在以太坊网络上发起的销毁和赎回交易确认后，通过以下服务将可以计算并生成交易收据证明，并将该交易收据证明提交至 Darwinia 网络 ETH-Relay 跨链验证证明，证明通过后将可以继续后续赎回动作。

注：背书和赎回模块正在开发中，交易第三部验证通过后将会调用赎回模块赎回锁定在背书模块中的 RING 至目标地址。
