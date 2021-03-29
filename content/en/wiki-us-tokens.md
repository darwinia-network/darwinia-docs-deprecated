---
id: wiki-us-tokens
title: Native Tokens
sidebar_label: Native Tokens
---

The native token for the Darwinia Network is RING, RING can be used as gas for transactions. Gas include transaction fees, contract execution fees, network bandwidth charges, storage fees, and more.

## Token Specification

- Name: Darwinia Network Native Token
- Symbol: RING
- Network:
  - Darwinia Mainnet
    - Spec: Native
    - Precision: 9
  - Ethereum
    - Spec: ERC20
    - Precision: 18
    - Smart Contract Address（Ethereum): 0x9469d013805bffb7d3debe5e7839237e535ec483
  - Tron
    - Spec: TRC20
    - Precision: 18
    - Smart Contract Address（Tron): TL175uyihLqQD656aFx3uhHYe1tyGkmXaW

- Total Supply: Initial circulation (2 Billion)，hard cap (10 Billion) in around 40 years

- Inflation Model: New RINGs are minted and distributed through the staking system and treasure as block producing rewards at a variable rate, see Inflation Model section below.

## Token Allocation

- Financing: 30%（first round 10%, evaluation $10M, 20% remaining to be determined）
- Foundation: 20%（5 years vesting period starts when mainnet launch）
- Team: 15%（1 year vesting period starts after 1 year since mainnet lanuch）
- Business Development and Marketing: 15%
- Community: 20%（including airdrop）

## Circulation

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

### Contract

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

## Inflation Model

After the Darwinia Network mainnet goes live, the total cap of the block reward (`MAX_BLOCK_REWARD_YEAR`) is adjusted once a year. The block reward of year N is `1 - (99 /100)^sqrt(N)` of total remaining issuable.

    Total remaining issuable RING = HARD_CAP - CURRENT_SUPPLY
    Supply in the next year = supply in the previous year + total actual reward in the year

The total number of `HARD_CAP` for RING is 10 billion.

According to the annual block reward limit and the block interval (in seconds), you can calculate the block reward toplimit (`MAX_BLOCK_REWARD`) for each block of the year.

    Block Reward Limit for Each Block = Total Reward Limit for the Year × Block Interval Time /Total Number of Seconds per Year ( 365 * 24 * 3600)

The following table shows RING’s Annual development statistics:

![Supply Table](assets/wiki-us-tokens-supply-table-en.png)

## Appendix:

### Appendix 1: KTON

KTON is essentially a derivative token of RING，which encourages long-term lock and commitment. RING staking participants can lock RING for 3–36 months and get KTON as rewards, compensating for the liquidity loss.

The initial supply of KTON is 0, and it can only be obtained by locking RING. There is no other distribution channel. KTON has no impact on the function of the Native Token RING.

- KTON Specification
  - Name:Darwinia Commitment Token
  - Symbol:KTON
  - Precision:18
  - Ethereum Contract:0x9f284e1337a815fe77d2ff4ae46544645b20c5ff
  - TRON Contract:TW3kTpVtYYQ5Ka1awZvLb9Yy6ZTDEC93dC

### Appendix 2: Algorithm of Binding RING for KTON

Users can lock a certain amount of RING for a predefined period of time in exchange for KTON in return.  Basically bind 10,000 RING for 12 months to get 1 KTON. 

1-36 variable integer months(30days) as the locking period are allowed.  See the following table of rewarded KTON amount according to locked period.

| Month |  KTON  | Month |  KTON  | Month |  KTON  |
| :---: | :----: | :---: | :----: | :---: | :----: |
|   1   | 0.0761 |   7   | 0.5634 |  15   | 1.2842 |
|   2   | 0.1522 |   8   | 0.6446 |  18   | 1.5736 |
|   3   | 0.2335 |   9   | 0.7309 |  21   | 1.8832 |
|   4   | 0.3096 |  10   | 0.8223 |  36   | 3.6446 |
|   5   | 0.3959 |  11   | 0.9086 |       |        |
|   6   | 0.4771 |  12   |   1    |       |        |

### Appendix 3: WhitePaper

https://darwinia.network/Darwinia_Genepaper_EN.pdf
