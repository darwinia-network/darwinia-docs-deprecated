---
id: wiki-faq
title: FAQs
sidebar_label: FAQs
---

此文档搜集整理了达尔文社区被经常问到的问题。

再次感谢达尔文大使们一直以来的支持和鼓励，特别是 Megan，为文档英文版本的校对做出了突出贡献。

如果你还有其他问题，请关注微信公众号「DARWINIA」，或发送你的问题到邮件：support@darwinia.network

### 达尔文网络有哪些历程？

2018 年底，Parity 发布 Substrate 工具包项目，届时达尔文网络项目也正式开启。达尔文充当主要公链之间的链中继，实现网络的去中心化；并以去中心化和无许可的非托管方式实现了资产跨链转移。


* 达尔文被设计为波卡的平行链，同时，也能够以其自己的共识，安全性和跨链功能在 Solo 模式下作为独立网络运行，从而应对基于波卡的技术问题。
  
* 为了促进不同应用程序在达尔文网络上开发，团队基于 Substrate 和达尔文 Web 应用开发出 SDK。 SDK 可帮助和引导非区块链用户和开发者采用辅助程序。

* 我们也为波卡和 Substrate 社区开发出一款高精度浏览器： [Subscan](https://www.subscan.io/)


在启动达尔文网络之前，团队还开发出了其他几种产品，包括基于区块链的游戏 [进化星球](https://www.evolution.land/)，Itering ID，DKMS 等。

* **DKMS**:去中心化私钥管理系统
* **进化星球**:一款支持跨链的虚拟经营类区块链游戏
* **Subscan**:聚合 Substrate 生态网络的高精度 Web3 浏览器
* **Itering ID**:安全易用的数字钱包与用户入口，搭载空气隔离的扫码技术，支持多场景，多平台，多应用的信息交互技术
* **NFT 生成器**:精简版在线非标资产生成工具，通过智能合约，快速创建专属自定义 NFT 资产，适用于游戏资产上链、权益凭证以及更多用途
  
### 达尔文网络和进化星球是什么关系？

进化星球是达尔文网络生态系统中的第一个支持跨链的虚拟经营类游戏。更多详情请参考 [EvolutionLand Docs](https://docs.evolution.land/)

### 达尔文网络和波卡之间是什么关系？

达尔文网络是基于波卡和 Substrate 框架开发的，可充当波卡的平行链。同时，也能够以其自己的共识，安全性和跨链功能在 Solo 模式下作为独立网络运行。

### 如果达尔文网络不是波卡平行链，将会发生什么？

就算达尔文网络不再被选举成为波卡平行链，它也能够以其自己的共识，安全性和跨链功能在 Solo 模式下作为独立网络运行。

###  进化星球上的 RING 和 KTON 分别是什么？

RING 和 KTON 是存在于进化星球上的 ERC-20 / TRC-20 通证。RING 在进化星球上能被用作 Gas 费。

### 什么是 Power（票权）？

用户参与 Staking，通过抵押 RING 或 KTON 获得的权益称作 Power（票权）。

###  如何获得 Power，怎么计算获得 Power 的数量？

抵押 RING 或 KTON 都可以获得 Power，其中抵押的 RING 总量和 KTON 总量分别对应 Power 总量的 1/2。

* Power 总数 = 1_000_000_000
* 抵押 RING 获得的 Power = 抵押 RING 的数量 / 当前 RING 总抵押数量 * ( Power 总数 / 2 )
* 抵押 KTON 获得的 Power = 抵押 KTON 的数量 / 当前 KTON 总抵押数量 * ( Power 总数 / 2 )

###  什么是 Power 占比？

Power 占比表示为单个地址持有的 Power 占全网 Power 总数的百分比。Power 占比可以反映出对整个网络影响力，Power 占比越大，所做出的决策对整个网络影响力越大。

* Power 占比 = 持有 Power / Power 总数 * 100%

###  为什么我的 Power 占比变多/变少了？

Power 占比的变动取决于两个因素，分别是：

* 自抵押资产数量的变化
* 当前网络总抵押资产数量的变化

因此，如果您发现在未进行任何操作或自抵押资产无变动的情况下，Power 占比却发生变化，属于正常现象，可能是由于当前网络总抵押资产数量的变化导致的。

### 为什么我在 Metamask 上找不到 RING / KTON？

你需要手动将 RING / KTON 加入到 Metamsk 通证列表。请进入达尔文官网首页，下滑到经济模型区域，点击如下图标进行添加：

![](assets/wiki-faq-metamask-ring-kton-cn.png)

### 解除质押的 RING 需要等待多长时间到账？

解除质押的 RING 将需要 14 天时间可以完全到账。

###  质押池中有多少锁定的 RING？

点击[这里](https://etherscan.io/token/0x9469d013805bffb7d3debe5e7839237e535ec483?a=0x649fdf6ee483a96e020b889571e93700fbd82d88)查看目前锁定 RING 的数据。

### 什么是 IEO 或 ICO？

根据法律法规，达尔文网络未进行 ICO 或 IEO。过去我们在社区进行了几轮空投，以鼓励用户参与到测试网和进化星球项目。

### KTON（氪石）将会被上币到哪些交易所？

氪石主要是在去中心化交易所上进行交易，例如 Uniswap。同时你也可以在虎符、抹茶或 poloniex 等交易所上找到。请浏览 coinmarketcap.com 查看支持氪石和 RING 交易对的所有最新交易所。

### 达尔文网络仅用于区块链游戏么？

达尔文网络最初被设计为进化星球的初级跨链解决方案，但后来演变成独立的，使整个加密行业受益的去中心化跨链基础设施。从游戏，NFT 到 Defi，稳定币，所有的去中心化应用都可以利用达尔文网络的桥接链，将自身从单链模式升级到多链或跨链模式。

### 我如何将 RING 从钱包转移到达尔文账户？

RING 存在于不同的区块链网络中，目前支持以太坊和波场。如果你是想将 RING (ERC20) 从以太坊钱包转移到达尔文网络本地钱包，你需要进行跨链转账。请移步到[这里](https://wormhole.darwinia.network)进行跨链转账。

### 在 Metamask 添加通证，复制粘贴合约地址发现并不管用是怎么回事？

我们已经收到很多次关于假的 RING 和氪石的合约地址反馈。请参考以下[文档](https://docs.darwinia.network/en/wiki-us-tokens)查询真正的合约地址。

注意，[这里提到的地址](https://etherscan.io/token/0x5d144af283c6aa7bab4abf99369032cbdc56ccc9)为假的合约地址。

### RING 和氪石（ERC-20）在 Uniswap 上是否合法？ 

Uniswap 上有合法的 RING 和 KTON 交易对，但也有一些假代币。进行兑换之前，请根据以下信息确认地址正确。

* [**RING**](https://uniswap.info/token/0x9469d013805bffb7d3debe5e7839237e535ec483)
  
* [**KTON**](https://uniswap.info/token/0x9f284e1337a815fe77d2ff4ae46544645b20c5ff)

波场上 Justswap 也能兑换 RING。

* [**RING**](https://justswap.io/#/scan/detail/TFCBjh9pt2sTWmJJRpbqyxfi5xW81xH4UR/TL175uyihLqQD656aFx3uhHYe1tyGkmXaW)

### 有多少交易所上币了 RING 或氪石？

目前预计有 8 个中心化或去中心化的交易所上线了 RING 或氪石的交易对。交易所数量仍在持续更新，请点击[这里](https://coinmarketcap.com/currencies/darwinia-network/markets/)查看最新更新。

### Justswap 上也能兑换 RING，这是真的吗？

是的，达尔文网络项目是一个跨链基础设施，目前支持以太坊和波场。尽管大多数 RING 供应在以太坊，但也有 RING 在波场上流通。Justswap 上的 RING 交易对是合法的，但是也存在很多假的。在进行兑换之前，请确保地址信息正确（[点击此处](https://justswap.io/#/scan/detail/TFCBjh9pt2sTWmJJRpbqyxfi5xW81xH4UR/TL175uyihLqQD656aFx3uhHYe1tyGkmXaW)）。

### 我能在哪找到达尔文通证模型？

点击[这里](https://docs.darwinia.network/en/wiki-us-tokens)查看更多。同时你也可以在达尔文官网经济模型页面找到相关信息。

### RING 和氪石的流通量是多少？

* [点击这里查看 RING 的流通量](https://api.darwinia.network/supply/ring)

* [点击这里查看 KTON 的流通量](https://api.darwinia.network/supply/kton)

### 达尔文网络和 ChainX 的区别是什么？

达尔文网络和 ChainX 都在开放桥接链，但是 ChainX 采用的是联合托管模型，一组节点使用多签管理资产，铸币和赎回，同时承担中心化风险，因为这是半去中心化的方式。当然，相比中心化的解决方案要好，但仍存在共谋风险如果资产的价值够高。

达尔文桥接链基于轻客户端，并通过智能合约保护资产。链外事件，资产的铸造和赎回通过轻客户端（SPV）完成，而不是一个或多个人说了算。

简而言之，达尔文网络是无信任和去中心化的，相比于 ChainX, 没有类似的交易方风险。

### 主网上线后，是否需要兑换 RING 或氪石？

没有必要。无论是 ERC-20 还是 TRC-20 的通证都不会过期，只要达尔文网络支持不同区块链之间的跨链转移。

### 我等了两个星期才让通证解锁，但只有小部分被解锁，其余的还是锁定状态。我该如何取回他们以便再次投资？

如果你质押通证参与议会投票，这些通证将会被锁定，取消投票后质押通证才能被解锁。

![](assets/wiki-faq-extrinsic-submission.png)
