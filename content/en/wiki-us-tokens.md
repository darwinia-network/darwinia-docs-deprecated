---
id: wiki-us-tokens
title: Native Tokens
sidebar_label: Native Tokens
---

The native token for the Darwinia Network is RING, RING can be used as gas for transactions. Gas include transaction fees, contract execution fees, network bandwidth charges, storage fees, and more.

RING's initial supply (`INITIAL_SUPPLY`) before Darwinia Network mainnet release is 2 billion, after which the newly issued RING will be distributed to the validators and nominators (Staking participants).

After the Darwinia Network mainnet goes live, the total cap of the block reward (`MAX_BLOCK_REWARD_YEAR`) is adjusted once a year. The block reward of year N is `1 - (99 /100)^sqrt(N)` of total remaining issuable.

    Total remaining issuable RING = HARD_CAP - CURRENT_SUPPLY

    Supply in the next year = supply in the previous year + total actual reward in the year

The total number of `HARD_CAP` for RING is 10 billion.

According to the annual block reward limit and the block interval (in seconds), you can calculate the block reward toplimit (`MAX_BLOCK_REWARD`) for each block of the year.

    Block Reward Limit for Each Block = Total Reward Limit for the Year × Block Interval Time /Total Number of Seconds per Year ( 365 * 24 * 3600)

The following table shows RING’s Annual development statistics:

![Supply Table](assets/supply-table-en.png)