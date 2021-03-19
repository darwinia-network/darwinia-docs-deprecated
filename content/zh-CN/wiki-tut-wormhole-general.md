---
id: wiki-tut-wormhole-general
title: 简介
sidebar_label: 简介
---

![wormhole](assets/wormhole/wiki-tut-wormhole-general-001.png)

## Ethereum-Darwinia 单向桥的技术创新

跨链的方案有多种，但其中真正的挑战是异构链之间的连接，目前异构链方案中，一般使用多签信托节点和基于 Light Client 的转接桥方案，其中相对安全和稳定的方案是基于对手链轻节点的桥接链解决方案。Dawinia 正在研发去中心化资产背书技术正是这种对手链轻节点方案的完整实现，包括高性能跨链中继服务 Darwinia Relay、异构链跨链转接桥、非标资产跨链标准和跨链兑换协议等。

回顾一下跨链转接桥的历史，之前开源的有 Consensys 研发的 BTCRelay，这是一个 BTC 至 ETH 的单向桥，通过使用以太坊智能合约实现 BTC 的 Light Client 来验证 BTC 上的交易。此外，还有 Kyber Network 开发的 WaterLoo EOS-ETH 双向转接桥，分别在 ETH 和 EOS 上实现对手链的轻节点，但是因为智能合约的运行成本比较高，WaterLoo 对于 Ethash 的验证逻辑还是做了一些妥协，没有做到完全去中心化。相对于智能合约，达尔文的跨链桥基于 Substrate 运行时实现，其提供更多的灵活性，特别是在燃料费和运行成本方便可以做很多优化，在保证完全去中心化的基础上还可以提供更好的经济可行性。

Ethereum-Darwinia 单向桥解决了普通 Light Client 成本高昂的问题。达尔文 Darwinia Relay 是一个通用的跨链转接桥方案，主要是为了解决了成本和性能问题，传统的跨链转接桥需要中继对手链上的每一个区块头至链上轻客户端，如果对手链的出块速度很快，那么区块头的上链成本就会非常高昂，使得方案变得经济不可行，而无法大规模应用。Darwinia Relay 通过在链上实现一个 Super Light Client，在降低成本的同时实现跨链验证的目的。Super Light Client 使用了特殊的 MMR 数据结构，目前已经被 Grin、Beam 等项目采用，但是在对手链不支持 Super Light Client 的情况下，链上实现 Super Light Client 还有很多链下实现没有遇到的挑战，
Darwinia Relay 创新性的解决了链上实现 Super Light Cient 的挑战，并整合成一套经济可行的跨链转接桥方案，为未来异构链的跨链提供一个方向。
**所以，不依赖第三方多签，并支持 NFT 跨链的，完全去中心化的达尔文跨链转接桥，才能成为异构链跨链桥中心，承载未来高价值跨链价值传输的 “金门大桥”。**


    
<hr />

**有任何问题可以直接联系我们**

邮箱: support@darwinia.network

Telegram: [t.me/DarwiniaNetwork](https://t.me/DarwiniaNetwork)

