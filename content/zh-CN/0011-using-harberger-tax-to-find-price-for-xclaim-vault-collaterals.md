---
id: rfc-0011
title: Using harberger tax to find price for xclaim vault collaterals
sidebar_label: Using harberger tax to find price for xclaim vault collaterals
custom_edit_url: https://github.com/darwinia-network/rfc/edit/master/RFC/src/0011-using-harberger-tax-to-find-price-for-xclaim-vault-collaterals.md
---

- rfc: 11
- title: 0011-using-harberger-tax-to-find-price-for-xclaim-vault-collaterals
- status: Abandoned
- desc: XClaim Based NFT Solution Using Harberger Tax

# Using Harberger Tax to find price for XClaim Vault Collaterals

## 概述
针对 XClaim 框架中缺少针对 NFT 的喂价机制设计，本文提出通过哈伯格税模型的机制来解决价格发现问题。

## I. XClaim-Based NFT cross-chain protocol

### A. 区块链模型假设

> 为了兼容 XClaim，这里对 chain $B$ 和 chain $I$ 的假设和 XClaim 一样，并不做更多的假设限制。

基本假设：

-  *backing blockchain*，只有基本的账本功能的区块链，对于 NFT 跨链，唯一增加的假设就是 *chain $B$* 原生 token 就支持 NFT；

- *Issuing blockchain* , 支持图灵完备的智能合约的区块链；

在这里，我们构造出一个跨链场景：

Alice 在 *chain $B$* 上拥有 $nft_b^n$,  Dave 在 chain $I$ 上有足够的 $i$,  

1. Alice 想在 chain $I$ 上发行 $nft_b$ 对应的新 NFT，即 $nft_i^{n'}$
2. Alice 在拥有 $nft_i^{n'}$ 之后，又想把它在 chain $I$  上转移给 Bob
3. 或者在某个稍晚的时刻，Bob 想从 chain $I$ 上把资产赎回到 chain $B$ ，再次获得 $nft_b^n$ 

为了实现以上场景，XClaim-based NFT cross-chain protocol 需要实现三种协议：*Issue, Trasnfer, Redeem*. 为了简化模型，我们在此处省略手续费相关部分的细节。



### B. 研究基础

如果以 XClaim 方案作为跨链的基本方案，那么在这个基础上，只需要解决 NFT 的定价问题，就可以解决系统的经济安全。

对于 NFT 的定价问题，目前中心化和去中心化交易所给出的解决方案就是交给市场。根据 dapp 数据统计网站显示，排名第一的 NFT 交易所 Opensea[8]一天的日活用户仅为 42，日交易笔数 73. 即使也采用和 XClaim 相同的喂价方案 Oracle, 在这样的市场面前，得到的价格也很难具有代表性。

并且，鉴于 NFT 的不可替代性，市场定价的方法也存在天然的悖论。即买卖成功才可以定价；但是买卖成功同时也意味着 owner 的转移。

目前对于 NFT 的定价问题，还没有成型的方案。



#### B-I. 什么是 Harberger Taxes

市场和私有财产是两个通常被放在一起谈论的话题，在现在社会很难想象，如果只单独谈论其中的一点却不提及另一点。然而在十九世纪，很多欧洲的经济学者也是自由论者和平等主张者，那时拥抱市场同时对私有财产持怀疑态度是很正常的事情。

由此，实现一个包含市场但是却没有所有权的系统是完全可行的：在每年的结束，收集物品的价格，在第二年的一开始，物品属于出价更高的人。这样的系统虽然在现实中不可行，但是它有一个显著的优点：实现配置效率。每年，每件物品都属于可以从中获取最大价值的人（因此才愿意出更高的价格）。

Eric Posner 和 Glen Weyl, 《radical market》的作者提出了一个方案 Harberger Taxes[9]:1. 所有人都为自己的财产评估一个价格  2. 所有人按评估价的百分比，例如 2%进行交税  3. 其他人可以以不小于评估价的价格，随时买走自己的财产。这就强制所有人都必须公平客观地评估物品的价格，评估地过高，自己就要多缴税；评估地过低，其他人就可以获得消费者剩余。



#### B-II. Harberger Taxes 在跨链中的应用

我们提议将 Harberger Taxes 应用于 NFT 的定价上。不同于将定价问题交给时间和市场，我们提议将定价问题交给跨链发起者自己。

因跨链并不需要涉及到 NFT 的交易，所以我们只应用 Harberger Taxes 的卖方估价并交税的部分，并不应用强制交易的部分。

大概的思路为，由跨链发起者为其需要跨链的在 chain $B$ 上的 NFT $nft_b$ 声明一个价格 $p$ ，并按照一定比例的价格支付跨链手续费；对应地，$vault$ 需要按价格在 chain $I$ 上提供等值/超值于 $p$ 的抵押 $i$，如果跨链操作正确完成，则跨链手续费将被支付给对应的 $vault$ ；如果存在恶意行为导致跨链失败并且 $nft_b$ 的归属者发生错误转移，则抵押的 $i$ 将用于补偿跨链发起者的损失。



### C. 组件定义

这里我们将部分遵从 XClaim 的声明方式，以保持延续性：

- *Issuing blockchain*, the blockchain $I$, 跨链后的新 NFT 的发行链
- *backing blockchain*, the blockchain $B$, 跨链前 NFT 所在的链
- *NFT identifier*, $nft_b^{n}$， 表示在 chain $B$ 上的原生的、标识为 $n$ 的 NFT，出现在章节 II 中
- *NFT identifier*, $nft_i^{n'}$， 表示跨链后在 chain $I$ 上新增发的、 标识为 $n$ 的 NFT，出现在章节 II 中
- *native token on chain $I$*:  $i$
- 抵押 token，$i\_col$ , 表示在 chain $I$ 上抵押的 token

系统参与方：

- **Requester** :  在 chain $B$ 上锁定 $nft_b^n$  并且希望在 $I$ 上获得新发行的 $nft_i^{n'}$ ；
- **Sender**: 在  $I$ 上拥有 $nft_i^{n'}$ 并且可以转移它的所有权给其他人；
- **Receiver**: 在 $I$ 接受并且获取 $nft_i^{n'}$ 的所有权的人；
- **Redeemer**: 在 $I$ 上销毁 $nft_i^{n'}$ ，而后在 $B$ 上释放 $nft_b^n$；
- **vault**: 不需要信任的第三方，保证 *Issue* 和 *Redeem* 时整个系统的经济安全；
- **Issuing Smart Contract (iSC)**:在 $I$ 上完全公开的、负责管理 $vault$ 名单并负责发行 NFT 资产 $nft_i$ 的智能合约
- **backing Smart Contract(bSC)**: 在 $B$ 上完全公开的、负责管理冻结后的 NFT 资产 $nft_b$ 的智能合约 （出现在章节 III）

其中，*Requester, redeemer, vault* 必须在 *chain $I$ 和 chain $B$* 上都有对应的公私钥；*Sender, Receiver*只需要持有在 $I$ 上的公私钥；*iSC* 是在 $I$ 上完全公开的、可审计的智能合约；*bSC*是在 $B$ 上完全公开的、可审计的智能合约。

### D. 初步实现方案

#### Protocol: Issue

> Alice (requester) 把  $nft_b^n$ 在 $B$ 上锁定在 $vault$，为了在 $I$ 上创造 $nft_i^{n'}$.

(i) ***准备***。Alice 预先声明一个价格 $p$,  确认 iSC 有效并且在 iSC 中寻找有足额/超额抵押 ($i\_col$) 的 $vault$.

(ii) ***锁定***。Alice 把 $nft_b^n$ 转移给 $vault$，同时声明自己在 $I$ 上的地址；并且支付跨链手续费；

(iii) ***发行***。$vault$ 向 iSC 发送签名消息: 同意向 Alice 在 $I$ 上的地址发行新资产， iSC 在确认 $vault$ 的签名后，在 Alice 的地址上发行 $nft_i^{n'}$

#### Protocol: Transfer

> Alice (sender) 在 chain $I$ 发送 $nft_i^{n'}$ 给 Bob (receiver) 

(i) ***转移***。Alice 在 $I$ 上把 $nft_i^{n'}$ 在 iSC 中，把所有权转移给 Bob，参考 ERC721.

(ii) ***见证***。当 $nft_i^{n'}$ 在 iSC 中的所有权发生了转移时，相应的 $vault$ 应当可以见证觉察。此时，当 Alice 再想把 $nft_i^{n'}$ 赎回时，$vault$ 在 iSC 中发现 $nft_i^{n'}$ 的所有权已经转移给 Bob 之后，应当禁止该交易。

需要补充的是，在系列操作的过程中，$nft_i^{n'}$ 的价格可能发生波动，该 NFT 的当前所有人可随时为其声明新的价格，相应地，$vault$ 需要满足质押。

#### Protocol: Redeem

> Bob 想把 $nft_i^{n'}$ 从 $I$ 中赎回到 $B$ 中时，Bob 需要把 $nft_i^{n'}$ 锁定在 iSC 里，这样 $vault$ 在 $B$ 上就会把 $nft_b^n$ 释放给 Bob. 然后在 $I$ 中销毁 $nft_i^{n'}$。

(i) ***准备***。Bob 需要现在 $B$ 上创建地址，持有对应私钥。

(ii) ***锁定***。 Bob 在 $I$ 上把 $nft_i^{n'}$ 锁定在 iSC 中，发起赎回请求，请求中应包含 Bob 在 $B$ 上的地址。并且，$vault$ 应当对这一过程保持觉察。

(iii) ***释放***。$vault$ 可以在 iSC 中验证锁定操作和赎回请求， 之后在 $B$ 上将对应的 $nft_b^n$ 发送给 Bob 的地址。

(iv) ***销毁***。 $vault$ 提交 在 $B$ 上的释放证明 (proof) 给 iSC，iSC 在验证 proof 之后自动销毁 $nft_i^{n'}$ 并且允许 $vault$ 解冻对应的 $i\_col$



![image-20190918160246144](https://tva1.sinaimg.cn/large/006y8mN6gy1g74nx78muuj31940eon04.jpg)

​																						  (图片来自 XClaim，有待修改)

### C. Design Roadmap

在之前的示例说明中，都默认了单 $vault$ 模式。 XClaim 本身对于这种模式就有了扩展的、更加去中心化的解决方案，即引入 *multi-vault*，允许任何人抵押 $i\_col$ 成为 $vault$，从而最大程度减轻单点故障对整个系统带来的影响。因此 XClaim-based NFT 跨链方案，天然支持这种扩展。

然而，由于 NFT 的不可替代性，导致 NFT 的估价不具备连续性和可预测性，价格上有很大概率存在剧烈波动，从而影响系统的安全性。为了尽量减低 NFT 价格波动对系统安全性的冲击，我们将在 III 中引入全新的解决方案，通过基于全新且合理的区块链假设，不依赖 $vault$ ，即在 *non-vault* 的情况下，实现跨链安全。

1. 通过继承 XClaim 的扩展方案，首先，尽可能减低对 $vault$ 的信任依赖，甚至实现 0 信任依赖，来实现整个系统的健壮性。在这里，我们引入 $chain\ relay$ (章节 III) 来为 iSC 提供 chain $B$ 的上的区块和交易证明，对任何人公开可查。
2. 在整个跨链过程中，$vault$ 要保持参与，为了防止单个 $vault$ 可能发生的单点故障，这里我们同样采取和 XClaim 相同的做法，开放 $vault$ 的注册，允许任何愿意抵押 $i\_col$ 的人或者机构都可以成为 $vault$.
3. 前述，即使 NFT 价格可以被正确评估，但是由于 NFT 价格的不连续性和波动幅度大的特点，使得 $vault$ 的抵押也可能存在较大幅度的波动。因此，在章节 III 中，我们引入了没有 $vault$ 的跨链解决方案。这对 chain $B$ 会有更高的假设限制，技术维护上的成本也会更高一些。但是相比于 XClaim 沉淀了大量的抵押资金，然而在经济上目前还没有可持续性的激励方案，我们认为技术维护上多出的成本，远远小于抵押资金的时间成本。值得尝试。


# II. 其他
[WIP]
