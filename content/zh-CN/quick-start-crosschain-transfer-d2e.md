---
id: quick-start-crosschain-transfer-d2e
title: 「达尔文网络 至 以太坊」转账
sidebar_label: 「达尔文网络 至 以太坊」转账
---

## 简介

如果你想把达尔文网络上的收益变现，你需要先将其转移到以太坊钱包中，然后将其存入交易所账户并进行交易。本文中，我们将说明如何一步步地将代币从Darwinia网络转移到以太坊。

## 先决条件

为了能成功转账，你需要满足如下几个先决条件。

- 正确安装并配置了浏览器插件[*Polkadot.js*](content/en/quick-start-account##) ；
- 正确安装了以太坊钱包[*MetaMask*](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)；  
- 相关账户要有足够的以太币和RING以足够支付转账中发生的各项费用。

## Steps

从达尔文网络到以太坊的转账可以分为两个阶段：
1. 锁定达尔文网络上的代币（RING/KTON）；
2. 在以太坊上认领代币（RING/KTON）。

开始之前，你需要准备好你的以太坊账户（地址）。当你点击的菜单栏上的MetaMask图标时，可以在窗口的右上方找到这个地址，点击账户名称可以将地址复制到剪贴板上。
![Crosschain](assets/quick_start/darwinia-crosschain-transfer-d2e-00-address.png)

### 第一阶段 -- 锁定代币

首先，访问达尔文网络的[虫洞](https://wormhole.darwinia.network/)，选择 **Darwinia**，然后点击 **Ethereum** 下方的"*跨链转账*".
![Crosschain](assets/quick_start_zh-CN/darwinia-crosschain-transfer-d2e-01_zh-CN.png)

确保选择了正确的网络类型，然后点击"*跨链转账*"。
![Crosschain](assets/quick_start_zh-CN/darwinia-crosschain-transfer-d2e-02_zh-CN.png)

如果你没有安装 [*Polkadot.js*](content/en/quick-start-account##)，会出现如下弹出窗口。
![Crosschain](assets/quick_start_zh-CN/darwinia-crosschain-transfer-d2e-02-01-polkadot-missing_zh-CN.png)

如果你是第一次在达尔文网络上使用 *Polkadot.js*, 你需要授权允许访问你的 *Polkadot.js* 账户。
![Crosschain](assets/quick_start/darwinia-crosschain-transfer-d2e-02-02-polkadot-auth.png)

输入你要使用的 *Polkadot.js* 账户的密码，然后点击 "Sign the transaction".
![Crosschain](assets/quick_start/darwinia-crosschain-transfer-d2e-03-01-polkadot-sign.png)

将目标账户的以太坊地址复制后填入，并点击 "*提交*"。
![Crosschain](assets/quick_start_zh-CN/darwinia-crosschain-transfer-d2e-03_zh-CN.png)

提交完成后，你可以点击"*跨链记录*"查看交易状态。
![Crosschain](assets/quick_start_zh-CN/darwinia-crosschain-transfer-d2e-04_zh-CN.png)

至此，你已经完成了**锁定代币**的操作。
![Crosschain](assets/quick_start_zh-CN/darwinia-crosschain-transfer-d2e-05_zh-CN.png)

### 第二阶段 -- 领取代币

进入"*跨链记录*"页面开始领取代币。
![Crosschain](assets/quick_start_zh-CN/darwinia-crosschain-transfer-d2e-06_zh-CN.png)

确认待领取代币的数量后点击 "*领取*"。
![Crosschain](assets/quick_start_zh-CN/darwinia-crosschain-transfer-d2e-07_zh-CN.png)

此时，将会出现一个MetaMask弹出窗口。如果需要，输入密码。确认GAS费用后点击 "*Confirm*" 按钮继续。
![Crosschain](assets/quick_start/darwinia-crosschain-transfer-d2e-07-01-confirm.png)

关闭弹出窗口后，你会发现代币已经转到你的以太坊账户。
![Crosschain](assets/quick_start/darwinia-crosschain-transfer-d2e-07-02-close.png)
![Crosschain](assets/quick_start/darwinia-crosschain-transfer-d2e-08-success.png)

点击"*查看交易*"按钮可以跳转到Etherscan上查看交易详情.
![Crosschain](assets/quick_start_zh-CN/darwinia-crosschain-transfer-d2e-09_zh-CN.png)
![Crosschain](assets/quick_start_zh-CN/darwinia-crosschain-transfer-d2e-10_zh-CN.png)

## 从中心化交易所提币

如果你想把从集中式交易所购买的RING转移到你的达尔文网络账号，你需要先将它们从交易所账户提取到你的以太坊钱包——MetaMask中。

多个交易所都支持RING交易。各个交易所的提币操作步骤都不尽相同。你应该查看相关交易所平台的文档来了解如何提款，但要确保“*提币网络*”类型选择ERC20；否则，你的币可能会损失。
