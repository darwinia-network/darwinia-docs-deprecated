---
id: wiki-faq
title: 常见问题
sidebar_label: 常见问题
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/wiki-misc-faq.md
---

## 关于Darwinia Network

### Darwinia Network 和 Polkadot 的关系是什么？
Darwinia Network 是基于 Substrate 开发的跨链桥接网络，专注于建设未来资产互联网络，包括非标资产拍卖市场、稳定币跨链、资产交易兑换等领域。基于 Polkadot 和 Substrate 开发的 Darwinia Network ，后面将会成为 Polkadot 网络的一个平行链。

<hr />

### 如果 Darwinia Network 不再是 Polkadot 的平行链会发生什么？
即使 Darwinia Network 被投票退出 Polkadot 的平行链集合，Darwinia Network 仍将作为"Solo Chain”工作，将会自己负责自己的安全。

<hr />

### Darwinia Network 和 Evolution Land 是什么关系？
Evolution Land 是 Darwinia Network 生态中最早也是最重要的游戏应用，是资产互联网的重要一员。Darwinia Network 是波卡生态中最早在游戏方向开展业务的成员，后续 Evolution Land 的开发团队 Itering 计划基于 Substrate 研发游戏应用链，并成为 Darwinia Network 的一个子链。

<hr />

### 什么是 Darwinia Crab 网络？
Darwinia Crab Network（简称 Crab网络）是 Darwinia 主网上线前的最后一版测试网络，为Darwinia 的升级和应用部署提供模拟和测试环境，测试环境不仅包含测试所需要的软件运行环境和网络环境，还包括测试经济博弈的经济环境。

<hr />


## 关于通证 （ RING & KTON ）

### 什么是 RING 和 KTON?
- RING 是 Darwinia Network 的主通证，初始供应量为 20 亿。普通用户仅持有 RING，即可参与 Darwinia Network 的所有操作。
- KTON 是 Darwinia Network 的治理通证，初始供应量为 0，只能通过锁定固定期限的 RING 生成。KTON 主要面向高级进阶用户，作为承诺长期持有RING的激励。
- RING 和 KTON ，类似于现货和期权(期货)的关系，通过这样的双通证设计，在激励长期投资者的同时，可以一定程度上减少交易所操纵网络的风险，可以有效地维护网络安全、建立忠诚度、以及创建出有益的治理体系。
- 目前已经有部分 RING 和 KTON 以 ERC-20 和 TRC-20 形式存在于 Ethereum 网络和 Tron 网络，在 Darwinia 主网上线后，这些通证将通过跨链转换的方式 1:1 转移至 Darwinia 主网。

<hr />

### 什么是 cRING 和 cKTON?
- cRING 和 cKTON 是 Darwinia Crab 网络的通证，其参数与 Darwinia 主网中的 RING 和 KTON 一致，并使用相同的 Staking 机制和通胀模型。
- 在 Darwinia 主网上线之后，将创建一个 Darwinia 主网和 Crab 网络之间的 Token Bridge，使 cRING 和 RING 可以做到相互兑换，兑换比例为 100 cRING= 1 RING。

<hr />

### 目前 Evolution Land 中的 RING/KTON 是什么?
- Evolution Land 游戏采用 Darwinia Network 的 RING 通证作为游戏内的支付通证，Evolution Land 中的 RING 和 KTON 就是 ERC-20/TRC-20 形式的 通证；
- 在 Darwinia 主网上线后，这些通证将通过跨链转换的方式 1:1 转移至 Darwinia 主网。

<hr />


## 关于 Staking 

### 什么是 Power (票权) ？

用户参与Staking，通过抵押 RING 或 KTON 获得的权益 称作 Power（票权）。

<hr />

### 如何获得 Power，怎么计算获得 Power 的数量？

抵押 RING 或 KTON 都可以获得 `Power`，其中抵押的 `RING总量` 和 `KTON总量` 分别对应 `Power 总量`的 **1/2**。

   > - Power总数 = 1 (精度为10^9)
   > - 抵押 RING 获得的 Power = 抵押 RING 的数量 / 当前 RING 总抵押数量 * ( Power 总数 / 2 )
   > - 抵押 KTON 获得的 Power = 抵押 KTON 的数量 / 当前 KTON 总抵押数量 * ( Power 总数 / 2 )

<hr />

### 什么是 Power 占比？

`Power 占比` 为 `持有的 Power` 占  `Power 总数` 的百分比，Power 占比可以反映出对整个网络影响力，Power 占比越大，作出的决策对整个网络影响力就越大。

   > - Power 占比 = 持有 Power / Power 总数 * 100%

<hr />

### 为什么我的 Power 占比 变多/变少了？

`Power 占比`的变动取决于两个因素，分别是：

- `自抵押资产`数量的变化

- `当前网络总抵押资产`数量的变化

因此，如果您发现在 未进行任何操作 或 自抵押资产无变动 的情况下，`Power 占比`却发生了变化，属于正常现象，可能是由于当前网络总抵押资产数量的变化导致的。

<hr />

