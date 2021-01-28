---
id: wiki-bridge-e2d
title: The Ethereum to Darwinia Bridge
sidebar_label: The E2D Bridge
---

以太坊->达尔文桥，之前被称为以太坊达尔文单向桥，简称E2D桥，是达尔文主网渐进式上线第二阶段开通的主要功能。

ERC20版的RING和KTON，以及RING存单都可以通过以太坊->达尔文桥跨链转移回达尔文主网。

以太坊->达尔文桥通过在达尔文链上实现一个超级轻客户端（Super Light Client），在降低成本的同时，实现跨链验证的目的。超级轻客户端使用了特殊的MMR数据结构，目前已经被 Grin、Beam 等项目采用，但是在源链块头不原生支持MMR的情况下，链上实现该协议还有很多链下实现没有遇到的挑战。

Darwinia 创新性的解决了链上实现 Super Light Cient 的挑战，引入了乐观验证博弈游戏并整合成一套经济可行的跨链转接桥方案，为未来异构链的跨链提供一个方向。
