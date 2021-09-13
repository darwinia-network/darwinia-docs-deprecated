---
id: wiki-tut-wormhole-d2e
title: 「达尔文 > 以太坊」桥
sidebar_label: 「达尔文 > 以太坊」桥
---

## 关于虫洞

[达尔文虫洞（Darwinia Wormhole）](https://wormhole.darwinia.network/) 是基于 Darwinia 跨链桥开发的跨链转账工具，支持多链多向转账。

目前已开通多条跨链桥，更多跨链桥正在开发中。

用户可以根据自己的需要选择跨链桥，通过本地钱包授权交易完成跨链操作。跨链的整个流程完全去中心化，数据链上可查。

本应用配备了转账进度、历史记录等功能，方便用户的资金管理。

<hr />

## 关于「达尔文网络至以太坊主网」双向桥开通

在先前「以太坊主网至达尔文网络」的基础上，虫洞将于 2021-01-28 开通「达尔文网络至以太坊主网」的跨链转账，达尔文网络用户可以通过达尔文桥接网络将 **RING & KTON** 跨链转账到以太坊主网。

至此，以太坊主网和达尔文网络之间的双向转账里程碑正式完成。

<hr />

## 如何从达尔文网络向以太坊主网转账

### 前期准备

首先，需要使用 Chrome 浏览器，并安装下列插件：

* **Polkadot.js**:[安装插件教程](https://docs.darwinia.network/zh-CN/wiki-tut-create-account#%E9%80%9A%E8%BF%87-polkadotjs-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6)

* **MetaMask 钱包**:[下载链接](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)


### 跨链操作流程

**达尔文跨链到以太坊主网操作分为两个步骤：**

1. **在达尔文网络上锁定通证（RING, KTON）**

2. **在以太坊网络上领取通证（RING, KTON）**
   
   > *当前（2021-01-28）以太坊 Gas 费较高，跨链转账第二步骤需要发送一笔以太坊交易，预计消耗 600000 Gas（25 gwei 约 0.015 ether，50 gwei 约 0.03 ether， 100 gwei 约 0.06 ether），所以不建议进行小额 RING，KTON 的跨链。*

下面分别对 2 个步骤进行详细介绍。

<hr />

#### 通过 Wormhole 在达尔文网络锁定通证（RING, KTON）

1. 进入 [虫洞 - Wormhole](https://wormhole.darwinia.network/)，在「首页」点击「Darwinia」星球后，页面会展示目前「Darwinia」网络出发，已开通的跨链桥。
   
   如图所示，点击「Ethereum」 星球下方的 「跨链转账」按钮，开启 **Darwinia > Ethereum** 的跨链转账之旅。

    ![select option](assets/wormhole/wiki-tut-wormhole-d2e-001.jpg)


2. 在「选择网络」栏，切换至「Darwinia Network > Ethereum」后，点击「跨链转账」。

    ![wormhole](assets/wormhole/wiki-tut-wormhole-d2e-002.jpg)

    > * 该步骤操作需要安装 **Polkadot.js 浏览器插件** 可以通过 [安装插件教程](https://docs.darwinia.network/zh-CN/wiki-tut-create-account#%E9%80%9A%E8%BF%87-polkadotjs-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6) 进行安装。*


3. 填写跨链转账信息，选择需要跨链的「Darwinia 主网账号」并填写「以太坊主网接收地址」
   
    > *跨链转账后还需要在以太坊网络进行领取操作，因此，以太坊主网接收地址务必填写一个非交易所账号*
       
   在「跨链转账通证」栏目中勾选需要跨链的通证，并且填写数量。
      
	> *RING 的数量填写时请注意保留 「2-3 RING 作为达尔文网络的燃料费 + 跨链手续费 50 RING（动态）」。跨链操作支持同时操作 RING 和 KTON，如果需要同时跨链转账 KTON，请勾选 ☑️ KTON 复选框，并且输入跨链的 KTON 数量。*
	
	![wormhole](assets/wormhole/wiki-tut-wormhole-d2e-003.jpg)


4. 确认信息无误后，点击表单下方「提交」按钮，通过 Polkadot.js 浏览器插件签名并提交跨链交易。

    ![wormhole](assets/wormhole/wiki-tut-wormhole-d2e-004.jpg)


5. 交易已发送成功后，可以通过点击「Subscan」链接，查看交易详情。点击「跨链记录」查看转账进度。

    ![wormhole](assets/wormhole/wiki-tut-wormhole-d2e-005.jpg)

<hr />

#### 通过 Wormhole 在以太坊网络领取通证（RING, KTON）

**通过在达尔文网络锁定 RING，KTON 后，需要在以太坊主网进行领取，完成跨链最后一步。**

1. 在「选择网络」栏切换到「Darwinia Network > Ethereum」后，点击「跨链记录」。

    ![wormhole](assets/wormhole/wiki-tut-wormhole-d2e-007.jpg)


2. 点击「已连接至」，选择发起跨链的达尔文账号，查询转账记录。
     
    > *如果已经跨链，「跨链记录」中没有对应记录，请稍等 1-2 分钟后刷新页面重新查询。*

    ![wormhole](assets/wormhole/wiki-tut-wormhole-d2e-006.jpg)

    > *跨链耗时预估：*
    > - *` 虫洞读取到跨链转账记录 ` ~ 1 min*
    > - *` 交易发送成功 ` 6-12 s*
    > - *`Darwinia 网络确认 ` ~ 1 min*
    > - *` 块桥接成功 ` 30-60s*
    > - *`Ethereum 网络确认 ` 取决于用户领取支付的 Gas 费高低*

3. 待「领取」按钮点亮时，点击「领取」，会弹出 MetaMask 插件，输入密码，完成领取操作。

    ![wormhole](assets/wormhole/wiki-tut-wormhole-d2e-008.jpg)


4. 点击「查看交易」，可以通过「Etherscan」获取交易详情。

    ![wormhole](assets/wormhole/wiki-tut-wormhole-d2e-009.jpg)

    ![wormhole](assets/wormhole/wiki-tut-wormhole-d2e-010.jpg)

<hr />

**如果碰到任何问题，欢迎联系我们！**

邮箱: support@darwinia.network

Telegram: [t.me/DarwiniaNetwork](https://t.me/DarwiniaNetwork)

