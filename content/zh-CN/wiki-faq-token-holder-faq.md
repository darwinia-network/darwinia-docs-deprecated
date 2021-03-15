---
id: wiki-faq-token-holder-faq
title: 通证持有者相关
sidebar_label: 通证持有者相关
---

### 什么是 Power（票权）？

用户参与 Staking，通过抵押 RING 或 KTON 获得的权益称作 Power（票权）。

<hr />

###  如何获得 Power，怎么计算获得 Power 的数量？

抵押 RING 或 KTON 都可以获得 Power，其中抵押的 RING 总量和 KTON 总量分别对应 Power 总量的 1/2。

* Power 总数 = 1_000_000_000
* 抵押 RING 获得的 Power = 抵押 RING 的数量 / 当前 RING 总抵押数量 * ( Power 总数 / 2 )
* 抵押 KTON 获得的 Power = 抵押 KTON 的数量 / 当前 KTON 总抵押数量 * ( Power 总数 / 2 )

<hr />

###  什么是 Power 占比？

Power 占比表示为单个地址持有的 Power 占全网 Power 总数的百分比。Power 占比可以反映出对整个网络影响力，Power 占比越大，所做出的决策对整个网络影响力越大。

* Power 占比 = 持有 Power / Power 总数 * 100%

<hr />

###  为什么我的 Power 占比变多/变少了？

Power 占比的变动取决于两个因素，分别是：

* 自抵押资产数量的变化
* 当前网络总抵押资产数量的变化

因此，如果您发现在未进行任何操作或自抵押资产无变动的情况下，Power 占比却发生变化，属于正常现象，可能是由于当前网络总抵押资产数量的变化导致的。

<hr />

### 为什么我在 Metamask 上找不到 RING / KTON？

你需要手动将 RING / KTON 加入到 Metamsk 通证列表。请进入达尔文官网首页，下滑到经济模型区域，点击如下图标进行添加：

![](assets/wiki-faq-darwinia-token-cn.png)

<hr />

### RING 和 KTON 的区别？

RING 是达尔文网络的原生资产，可用作交易的 Gas。

KTON 是达尔文网络原生通证 RING 的衍生通证，称为承诺通证。是为了鼓励用户进行长期的承诺锁定。

<hr />

### RING 的用途是什么？

RING 作为达尔文网络原生资产可用作交易 Gas 费。 Gas 包括链上交易费用，合约执行费用及跨链服务费等。 RING 可参与 Staking 获取影响力，以此参与治理并获得收益。

<hr />

### RING 的总供应量是？

RING 的初始发行量为 20 亿，并且每年以大约 5% 的速度通胀。新发行的 RING 将 100% 进入 Staking 系统和国库，以奖励负责网络安全性的验证者和提名者。

<hr />

### KTON（氪石）的用途是什么？

KTON（氪石）是达尔文网络的承诺通证，是为了鼓励用户进行长期的承诺锁定。

如果自愿将 RING 锁定 1 - 36 个月，用户将获得氪石奖励。例如，将 10k RING 锁定一年，你将会获得 1 个氪石，10k RING 也将会在一年质押期满后退回。

<hr />

### KTON（氪石）的总供应量是多少？

氪石的初始供应量为 0，而且只有当用户在质押过程中锁定 RING 获得，没有其他的任何分发渠道。

<hr />

### 解除质押的 RING 需要等待多长时间到账？

解除质押的 RING 将需要 14 天时间可以完全到账。

<hr />

###  质押池中有多少锁定的 RING？

点击[这里](https://etherscan.io/token/0x9469d013805bffb7d3debe5e7839237e535ec483?a=0x649fdf6ee483a96e020b889571e93700fbd82d88)查看目前锁定 RING 的数据。

<hr />

### 什么是 IEO 或 ICO？

根据法律法规，达尔文网络未进行 ICO 或 IEO。过去我们在社区进行了几轮空投，以鼓励用户参与到测试网和进化星球项目。

<hr />

### KTON（氪石）将会被上币到哪些交易所？

氪石主要是在去中心化交易所上进行交易，例如 Uniswap。同时你也可以在虎符、抹茶或 poloniex 等交易所上找到。请浏览 coinmarketcap.com 查看支持氪石和 RING 交易对的所有最新交易所。


<hr />

### 达尔文网络仅用于区块链游戏么？

达尔文网络最初被设计为进化星球的初级跨链解决方案，但后来演变成独立的，使整个加密行业受益的去中心化跨链基础设施。从游戏，NFT 到 Defi，稳定币，所有的去中心化应用都可以利用达尔文网络的桥接链，将自身从单链模式升级到多链或跨链模式。

<hr />

### 我如何将 RING 从钱包转移到达尔文账户？

RING 存在于不同的区块链网络中，目前支持以太坊和波场。如果你是想将 RING (ERC20) 从以太坊钱包转移到达尔文网络本地钱包，你需要进行跨链转账。目前以太坊到达尔文单向桥已开通，请移步到[这里](https://wormhole.darwinia.network)进行跨链转账。

<hr />

### 在 Metamask 添加通证，复制粘贴合约地址发现并不管用是怎么回事？

我们已经收到很多次关于假的 RING 和氪石的合约地址反馈。请参考以下[文档](https://docs.darwinia.network/docs/en/wiki-us-tokens)查询真正的合约地址。

注意，[这里提到的地址](https://etherscan.io/token/0x5d144af283c6aa7bab4abf99369032cbdc56ccc9)为假的合约地址。

<hr />

### RING 和氪石（ERC-20）在 Uniswap 上是否合法？ 

Uniswap 上有合法的 RING 和 KTON 交易对，但也有一些假代币。进行兑换之前，请根据以下信息确认地址正确。

* [**RING**](https://uniswap.info/token/0x9469d013805bffb7d3debe5e7839237e535ec483)
  
* [**KTON**](https://uniswap.info/token/0x9f284e1337a815fe77d2ff4ae46544645b20c5ff)

波场上 Justswap 也能兑换 RING。

* [**RING**](https://justswap.io/#/scan/detail/TFCBjh9pt2sTWmJJRpbqyxfi5xW81xH4UR/TL175uyihLqQD656aFx3uhHYe1tyGkmXaW)

<hr />

### 有多少交易所上币了 RING 或氪石？

目前预计有 8 个中心化或去中心化的交易所上线了 RING 或氪石的交易对。交易所数量仍在持续更新，请点击[这里](https://coinmarketcap.com/currencies/darwinia-network/markets/)查看最新更新。

<hr />

### Justswap 上也能兑换 RING，这是真的吗？

是的，达尔文网络项目是一个跨链基础设施，目前支持以太坊和波场。尽管大多数 RING 供应在以太坊，但也有 RING 在波场上流通。Justswap 上的 RING 交易对是合法的，但是也存在很多假的。在进行兑换之前，请确保地址信息正确（[点击此处](https://justswap.io/#/scan/detail/TFCBjh9pt2sTWmJJRpbqyxfi5xW81xH4UR/TL175uyihLqQD656aFx3uhHYe1tyGkmXaW)）。

<hr />

### 我能在哪找到达尔文通证模型？

点击[这里](https://docs.darwinia.network/docs/en/wiki-us-tokens)查看更多。同时你也可以在达尔文官网经济模型页面找到相关信息。

<hr />

### RING 和氪石的流通量是多少？

* [点击这里查看 RING 的流通量](https://api.darwinia.network/supply/ring)

* [点击这里查看 KTON 的流通量](https://api.darwinia.network/supply/kton)


<hr />

### 达尔文网络和 ChainX 的区别是什么？

达尔文网络和 ChainX 都在开放桥接链，但是 ChainX 采用的是联合托管模型，一组节点使用多签管理资产，铸币和赎回，同时承担中心化风险，因为这是半去中心化的方式。当然，相比中心化的解决方案要好，但仍存在共谋风险如果资产的价值够高。

达尔文桥接链基于轻客户端，并通过智能合约保护资产。链外事件，资产的铸造和赎回通过轻客户端（SPV）完成，而不是一个或多个人说了算。

简而言之，达尔文网络是无信任和去中心化的，相比于 ChainX, 没有类似的交易方风险。

<hr />

### 主网上线后，是否需要兑换 RING 或氪石？

没有必要。无论是 ERC-20 还是 TRC-20 的通证都不会过期，只要达尔文网络支持不同区块链之间的跨链转移。

<hr />

### 我等了两个星期才让通证解锁，但只有小部分被解锁，其余的还是锁定状态。我该如何取回他们以便再次投资？

如果你质押通证参与议会投票，这些通证将会被锁定，取消投票后质押通证才能被解锁。

![](assets/wiki-faq-extrinsic-submission.png)

<hr />

### 如何质押 RING 获得氪石？

**教程如下**：

* 首先，[点击这里](https://darwinia.network/)创建一个达尔文钱包（不要忘记切换到达尔文主网，Crab 网络是测试网。点击钱包最上角并进行切换。

* 然后，[打开网页](https://wormhole.darwinia.network/)，点击以太坊，接着点击跨链转账。
  
  ![](assets/wiki-faq-guide-1-cn.png)

* 点击 “跨链转账”，这时 metamask 页面会跳出来，连接 metamask 账号。
  
  ![](assets/wiki-faq-guide-2-en.png)

* 填写你的达尔文钱包地址，选择要跨链转账的通证，选择提交便可以进行转账。
  
  *注意：确保钱包里有 10 RING 和一些 eth 来付 gas 费。（目前以太坊网络较拥堵，大概 35 分钟左右会转账成功）*


**在主网钱包上**

你需要锁定通证并提名一个验证人，正常情况下，质押时间超过一个 era 后你将会开始获得每日奖励。

完成之后，你将会进入到另一个页面，上面会显示所有提名者。你可以提名一人或多人，我只提名了一人，也能正常工作。不同提名者佣金会有所不同。

大家可以根据自己情况选择不同提名者。关于票权（power）变动就比较灵活，取决于你所在质押池的占比等因素。可参考问题：「通知持有者常见问题」 -> 什么是 Power（票权）？/ 如何获得 Power，怎么计算获得 Power 的数量？/ 什么是 Power 占比？/ 为什么我的 Power 占比 变多/变少了？

<hr />

###  如果只开通以太坊到达尔文网络单向桥，氪石只有在质押锁定 RING 过程中获得，并且也不能从 Crab 先行网中转移，那么目前氪石的流通量从哪里来？

现有的流通中的氪石是在进化星球中生成。

<hr />

**如果碰到任何问题，欢迎联系我们！**

邮箱：[support@darwinia.network](support@darwinia.network)

电报：[t.me/DarwiniaNetwork](https://t.me/DarwiniaNetwork)

