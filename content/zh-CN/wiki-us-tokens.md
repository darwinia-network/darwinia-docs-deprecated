---
id: wiki-us-tokens
title: 网络原生代币
sidebar_label: 网络原生代币
---

RING 是达尔文网络的原生资产，RING 可以作为交易的燃料费。燃料费包括交易费用，合约执行费用，网络带宽费用，存储费用等等。

## 代币详细信息

- 英文全称：Darwinia Network Native Token
- 符号：RING
- 网络：
  - Darwinia Mainnet
    - 类型：Native
    - 精度：9
  - Ethereum（以太坊）
    - 类型：ERC20
    - 精度：18
    - 智能合约地址（Ethereum):0x9469d013805bffb7d3debe5e7839237e535ec483
  - Tron（波场）
    - 类型：TRC20
    - 精度：18
    - 智能合约地址（Tron)：TL175uyihLqQD656aFx3uhHYe1tyGkmXaW
  
- 总量：初始发行量20亿（2 Billion），硬顶100亿（10 Billion，约40年达到）。

- 增发方式：RING 在达尔⽂网络主⽹上线时的供应量为 20 亿（2 Billion)，之后将会通过出块奖励将新发⾏的 RING 分发 Staking 系统和 Treasury。

## 代币分配方案

- 融资 30%（第一轮 10%，估值 10M 美金，剩余 20%待定）
- 基金会 20%（主网上线后开始线性释放，5 年后释放完）
- 团队 15%（主网上线一年后开始线性释放，释放一年时间，主网上线两年后释放完）
- 商业和市场推广 15%
- 社区 20%（包括映射给社区 ERC-20 RING 的部分）

## 目前流通情况

2021-03-29 16:07:12

Total Supply: 2_039_176_976.0301878 RINGs

```
 MAINNET: 894_185_272.7060
  active: 730_019_975.9130
  locked: 164_165_296.7930
```
```
ETHEREUM: 1_018_667_368.6516
  active: 428_756_168.4683
  locked: 589_911_200.1833
```
```
    TRON: 90_403_994.9525
  active: 42_519_110.6111
  locked: 47_884_884.3414
```

### 合约地址

- TotalSupply
  - ERC20: 0x9469d013805bffb7d3debe5e7839237e535ec483
  - TRC20: TL175uyihLqQD656aFx3uhHYe1tyGkmXaW
- Foundation
  - ERC20: 0x4710573b853fdd3561cb4f60ec9394f0155d5105
  - TRC20: TDWzV6W1L1uRcJzgg2uKa992nAReuDojfQ
- Gringotts
  - ERC20: 0x649fdf6ee483a96e020b889571e93700fbd82d88
  - TRC20: TTW2Vpr9TCu6gxGZ1yjwqy7R79hEH8iscC
- SwapBridge
  - ERC20: 0x7f23e4a473db3d11d11b43d90b34f8a778753e34
  - TRC20: TSu1fQKFkTv95U312R6E94RMdixsupBZDS
- Staking
  - https://darwinia.subscan.io/validator

## 通胀模型

在达尔文主网上线后，该年的出块奖励每年调整一次，第 N 年的块奖励为剩余可发行供应量的 `1 - (99 /100)^sqrt(N)`

    剩余可发行总量 = 硬顶总量 - 当前供应量
    下一年的供应量 = 上一年的供应量 + 该年实际出块奖励总和

RING 的 ` 硬顶 ` 总量为 100 亿。

根据每年的出块奖励，和出块间隔时间 (单位：秒)，可以算出这一年的每个块的出块奖励。

    每个块的块奖励 = 该年出块奖励 × 出块间隔时间 ÷ 每年总秒数(即 365 乘 24 乘 3600)

下面是预估的每年通胀率统计表：

![Supply Table](assets/supply-table-cn.png)

## 附件

### 附件一：KTON 介绍

KTON 本质上是 RING 的衍生通证，是为了鼓励用户进行长期锁定和承诺投入。当用户在 Staking 的过程中承诺锁定 RING 一定时限，系统会给予这些用户相应数量的 KTON 作为奖励和流动性丧失的弥补。

KTON 的初始供应量为零，只能通过系统中锁定 RING 获得，没有其他的任何分发渠道，因此并不会影响 RING 在系统中主要的原生通证的作用，这是我们的设计跟其他双通证设计最大的不同和优势，也是容易被误解的地方。

- KTON 详细信息
  - 英文全称：Darwinia Commitment Token
  - 符号：KTON
  - 精度：18
  - Ethereum 网络：0x9f284e1337a815fe77d2ff4ae46544645b20c5ff
  - TRON 网络：TW3kTpVtYYQ5Ka1awZvLb9Yy6ZTDEC93dC

### 附件二：锁 RING 得 KTON 的规则。

锁定 10,000 RING，12 个月可获得 1 个 KTON。可选择 1-36 整数月(30 天)，其他月份见下表。（月份选取 1-12 月及 15、18、21、36 为例）

| 月数  | 获得 KTON | 月数  | 获得 KTON | 月数  | 获得 KTON |
| :---: | :------: | :---: | :------: | :---: | :------: |
|   1   |  0.0761  |   7   |  0.5634  |  15   |  1.2842  |
|   2   |  0.1522  |   8   |  0.6446  |  18   |  1.5736  |
|   3   |  0.2335  |   9   |  0.7309  |  21   |  1.8832  |
|   4   |  0.3096  |  10   |  0.8223  |  36   |  3.6446  |
|   5   |  0.3959  |  11   |  0.9086  |       |          |
|   6   |  0.4771  |  12   |    1     |       |          |

### 附件三：白皮书链接

https://darwinia.network/Darwinia_Genepaper_CN.pdf
