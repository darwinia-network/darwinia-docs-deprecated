---
id: rfc-0014-darwinia-token-migration-by-cross-chain-redeem-protocol
title: 0014 Darwinia Token Migration By Cross Chain Redeem Protocol
sidebar_label: 0014 Darwinia Token Migration By Cross Chain Redeem Protocol
custom_edit_url: https://github.com/darwinia-network/rfcs/edit/master/RFC/zh_CN/0014-darwinia-token-migration-by-cross-chain-redeem-protocol.md
---

- rfc: 14
- title: 0014-darwinia-token-migration-by-cross-chain-redeem-protocol
- status: Draft
- desc: Darwinia Token Migration By Cross-chain Redeem Protocol
- 

# Darwinia Token Migration By Cross-chain Redeem Protocol

## I. 概述

在Darwinia主网上线之前，已经有一部分RING/KTON资产以ERC20或TRC20的形式存在于以太坊网络或者波场网络之中。从资产跨链的角度来看，因为RING和KTON是被定义成Darwinia 网络的原生资产，因此这些ERC20 Token本质上是以某种形式跨链到以太坊网络上的，也可以理解为CBA (Cryptocurreny Backed Assets)，也就是说，每个ERC-20 RING都有相应的RING被锁定在Darwinia 主网上面，在主网上线之前，相应的背书资产即存在于创世块(Genesis)中。

RING和KTON的ERC20 Token信息:

- RING Token Address: https://etherscan.io/token/0x9469d013805bffb7d3debe5e7839237e535ec483
- KTON Token Address: https://etherscan.io/token/0x9f284e1337a815fe77d2ff4ae46544645b20c5ff

本文将在[RFC-0012: Darwinia Bridge Core: Interoperation in ChainRelay Enabled Blockchains](./rfc-0012-darwinia-bridge-core-interoperation-in-chainrelay-enabled-blockchains)的基础上，讨论Darwinia主网上线后，ERC-20形式的RING如何赎回至Darwinia网络，以及如何借助于Darwinia 转接桥的设计，Token将如何在Darwinia主网及其他公链中进行流转。



## II. 介绍

### A. 设计范围

- Darwinia原生资产RING/KTON跨链设计。主要描述如何应用ERC-0012及相关跨链互操作协议，帮助RING/KTON实现在Darwinia网络和其他支持智能合约的网络(例如，以太坊、TRON、EOS)之间流转
- 创世块中管理背书资产。当Darwinia主网上线时，目前以ERC20/TRC20形式存在的RING/KTON对应的原生资产将会记录在创世块之中，并被背书管理模块锁定，用于支持后续外部资产的赎回。
- 背书管理模块的其他主要功能。背书管理模块还将满足主网上线后其他的跨链转账需求，例如后续用户如何将主网上的RING/KTON原生资产跨链到以太坊上。其发行出来的ERC20代币(代表CBA)将与现有的RING/KTON合约共享同一个ERC-20智能合约。
- 外部链的发行合约和chain relay。这部分方案的可行性依赖于chain relay的实现方案，主要是如何在以太坊上实现一个低成本可持续运行的Darwinia Chain Relay，这部分的细节不在此处描述，具体可参考 RFV-0012 VI章节。在以太坊实现了一个Darwinia Chain Relay的基础之上，外部链需要新增一个发型管理合约(Issuing Contract)用于接受Darwinia上的跨链转账交易证明，并通过Darwinia Chain Relay进行验证（包括交易存在证明，共识证明，交易内容证明等），在验证通过之后，进行相关的RING/KTON发行。这部分属于高级功能，其开发和实现可以独立于背书模块中的迁移功能，在最开始，可以先只支持单向的以太坊至Darwinia的赎回功能。
- Gringotts合约的停止和存单迁移协议



### B. 术语

- **Genesis**， 创世块或表示区块链网络创世状态的账本数据。
- **CBA**, 全称Cryptocurrency Backed Assets, 即有加密资产背书的资产，详细介绍可以参考XClaim [1].
- **Chain Relay**,  Cross-Chain State Verification. It is capable of interpreting the statte of the backing blockchain B and provide functionality comparable to an SPV or light client. 主要用于验证外部区块链网络的交易存在性证明和共识证明。
- **Backing Contract/Module**，Backing Blockchain中用于管理背书资产的合约或者模块，包括锁定和释放等功能，在Darwinia网络中Backing Module还负责管理锁定在创世块中的背书资产。
- **Chain Relay Module**, 实现在Darwinia上的针对外部区块链网络(例如Ethereum/ Tron)的Chain Relay.
- **External Darwinia Chain Relay**，存在于外部区块链网络上的针对Darwinia Network的Chain Relay.
- **External Issuing Contract**, 用于在外部区块链网络中发行原生RING/KTON CBA的ERC-20 Token.

### C. 背书资产Genesis配置

在Darwinia主网上线之时，就存在CBA背书资产，因此需要将RING/KTON在其他链上的资产背书信息定义在Genesis Config中，当主网上线之后，这些背书资产将会初始化相应原生资产，并将其锁定在背书合约中，供特殊赎回(迁移)协议使用。

需要注意的是，Genesis Config总分发和锁定的RING/KTON，将对应于主网上线时对应公链上RING/KTON的Total Supply. 

Genesis Config 片段示例:

```json
{
  "backingAssets": {
    "Ethereum" : {
      "RING" : 100000,
      "KTON" : 50000
    },
    "Tron" : {
      "RING" : 3000,
      "KTON" : 200
    }
  }
}
```



### III. 通过特殊赎回协议实现RING/KTON迁移

当用户需要将ERC-20形式的RING通证转化成Darwinia主网上的RING的时候，其只需要将该部分RING发送一个Token销毁合约，在确认销毁成功之后，用户将该笔交易证明发送给Darwinia网路的解锁合约，解锁合约在验证完成之后，将会从背书资产模块中释放对应的RING通证给赎回者。

![Darwinia Token Migration Protocol](assets/rfc-zh-CN-darwinia_token_migration_protocol.png)

#### A. 与普通赎回协议的区别

RING/KTON特殊赎回协议跟Darwinia Bridge Core中的普通赎回协议最大的区别在于背书资产(Backing Assets)。普通赎回协议中需要赎回的背书资产，都是之前通过发行协议锁定在Backing Contract里面的，但是在RING/KTON特殊赎回协议这里并没有先前的锁定发行CBA的过程，主网上线前的ERC20 RING对应的Backing Assets是通过创始块背书，进行分发和锁定。

创始块中锁定的原生资产用于支持原本已经在其他公链(Ethereum和Tron)上已经存在的ERC20形式的RING/KTON赎回功能。当用户需要拿回Darwinia主链上的原生背书资产时，他们只需要按照特殊赎回协议销毁背书资产对应的RING/KTON CBA Token就可以了。

#### B. Chain Relay SRML模块

Chain Relay是实现Token跨链转接桥的关键模块，类似于一个支持SPV的轻客户端。在像以太坊这样的智能合约公链中，Chain Relay是用智能合约来实现的，例如[BTCRelay](https://github.com/ethereum/btcrelay)。对于Darwinia来说，因为是基于Substrate开发，支持SRML模块和链上升级，所以就多了一个选择，可以将Chain Relay的实现为Darwinia的一个SRML，并针对不同的公链实现不同的SRML形式的Chain Relay，以提供相应公链的跨链支持。

对于具体的实现，性能和成本是非常重要的考量，因此需要基于一些改进方案来帮助实现，相关改进方案在RFC-0012 VI章节详细描述。

#### C. Gringotts合约的停止和存单迁移协议

Gringotts合约实现:

https://github.com/evolutionlandorg/bank

Gringotts合约功能中存RING得KTON的功能对应于Darwinia Staking 模块中的承诺锁定得KTON的功能，Darwinia主网上线后，这部分功能将从以太坊(或波场)Gringotts智能合约迁移至Darwinia主网。

为了保证主网上线时和之后，其他公链上不会有新的KTON被通过定期存RING发行出来，因此，主网上线前Gringott合约功能将停止存RING得KTON功能，但是RING取回功能仍将保留。

此外，因为Gringotts存单中锁定了RING，而这部分RING的持有者可能希望参与到Darwinia Staking中去，因此需要支持Gringotts存单迁移的功能，主要包括以下几个步骤(以太坊为例):

- 将存单以及存单中的RING一起销毁，销毁交易中需要包含存单ID，锁定RING的数量，存单到期时间等关键参数证明，销毁合约将会对这些关键参数进行比对和校验，通过之后销毁存单的RING Token。这样只需要证明交易被打包和存在，就可以从交易中解析出这些关键参数，并保证这些参数的正确性。

- 迁移者在确定这笔交易的成功和Finalization之后，将这个交易证明提交给Darwinia的存单迁移模块。

- Darwinia的存单迁移模块在验证交易的正确性之后，将进行Darwinia上的剩余迁移步骤，包括a)对应数量RING的解锁，b)将这些RING进行Staking. c) 对这些Staking的RING进行承诺锁定.(区别于正常流程，这里不会有KTON奖励被发行，因为在以太坊中已经奖励过了)

  ![Gringotss Deposit Migration Protocol](assets/rfc-zh-CN-darwinia_deposit_migration_protocol.png)

### IV. 跨链转账的普通发行和普通赎回协议

对于Darwinia 来说，不仅仅存在主网上线后的Token迁移需求，还存在将主网上原生的RING/KTON资产跨链到其他公链的需求。因此以太坊上的ERC-20 RING不仅可以通过迁移协议单向回到Darwinia，也可以继续保留在以太坊上面，而且Darwinia上的RING还可以通过跨链转接桥作为CBA发行到以太坊上面成为ERC-20 RING，这个过程将由普通发行和赎回协议完成，其协议流程和设计跟正常的Token跨链协议一样，没有太大区别。



## 参考



1. XClaim, https://eprint.iacr.org/2018/643.pdf
2. FlyClient, https://eprint.iacr.org/2019/226.pdf


