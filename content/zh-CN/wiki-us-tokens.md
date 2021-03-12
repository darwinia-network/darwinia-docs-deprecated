---
id: wiki-us-tokens
title: 网络原生代币
sidebar_label: 网络原生代币
---

RING是达尔文网络的原生资产，RING可以作为交易的燃料费。燃料费包括交易费用，合约执行费用，网络带宽费用，存储费用等等。

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
    - 智能合约地址（Ethereum)：0x9469d013805bffb7d3debe5e7839237e535ec483
  - Tron（波场）
    - 类型：TRC20
    - 精度：18
    - 智能合约地址（Tron)：TL175uyihLqQD656aFx3uhHYe1tyGkmXaW
  
- 总量：初始发行量20亿（2 Billion），硬顶100亿（10 Billion，约40年达到）。

- 增发方式：RING在达尔⽂网络主⽹上线时的供应量为20亿（2 Billion)，之后将会通过出块奖励将新发⾏的RING分发Staking系统和Treasury。

## 代币分配方案

- 融资 30%（第一轮10%，估值10M美金，剩余20%待定）
- 基金会 20%（主网上线后开始线性释放，5年后释放完）
- 团队 15%（主网上线一年后开始线性释放，释放一年时间，主网上线两年后释放完）
- 商业和市场推广 15%
- 社区 20%（包括映射给社区ERC-20 RING的部分）

## 目前流通情况

### 总览

|          类型          | RING 数量 |  占比  |
| :--------------------: | :-------: | :----: |
|         总供给         |   2035M   |  100%  |
|   流通中              |   481M | 23.6% |
|   锁定              |  1554M  | 76.4% |

### 按网络分布细分
|        类型         | RING 数量 |
| :-----------------: | :-------: |
| Darwinia 主网总供给 |   883.56M    |
|       流通中        |    32.18M     |
|      锁定       |   851.38M    |

|      类型      | RING 数量 |
| :------------: | :-------: |
| ETH 网络总供给 | 1025.77M  |
|     流通中     |  406.73M  |
|      锁定      |  619.05M  |

|          类型          | RING 数量 |
| :--------------------: | :-------: |
|    TRON 网络总供给     |   90.40M    |
|   流通中  |   42.51M    |
|        锁定        |  47.88M  |

### 流通量计算方法:

流通量 = TotalSupply - Foundation - Team - Staking - Gringotts - SwapBridge

RING supply api: https://api.darwinia.network/supply/ring

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

在达尔文主网上线后，该年的出块奖励每年调整一次，第N年的块奖励为剩余可发行供应量的 `1 - (99 /100)^sqrt(N)`

    剩余可发行总量 = 硬顶总量 - 当前供应量
    下一年的供应量 = 上一年的供应量 + 该年实际出块奖励总和

RING的`硬顶`总量为100亿。

根据每年的出块奖励，和出块间隔时间(单位：秒)，可以算出这一年的每个块的出块奖励。

    每个块的块奖励 = 该年出块奖励 × 出块间隔时间 ÷ 每年总秒数(即365乘24乘3600)

下面是预估的每年通胀率统计表：

![Supply Table](assets/supply-table-cn.png)

## 附件

### 附件一：白皮书链接

https://darwinia.network/Darwinia_Genepaper_CN.pdf
