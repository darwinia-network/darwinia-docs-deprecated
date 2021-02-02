---
id: rfc-0009-dawinia-liquid-kton-reward
title: 0009 Dawinia Liquid KTON Reward
sidebar_label: 0009 Dawinia Liquid KTON Reward
custom_edit_url: https://github.com/darwinia-network/rfcs/edit/master/RFC/en_US/0009-dawinia-liquid-kton-reward.md
---

- rfc: 9
- title: 0009-dawinia-liquid-kton-reward
- status: Abandoned
- desc: How to distribute ring income to liquidation KTON holders

- Function description: Distribute RING revenue to mobile KTON
- Starting time: 2019-05-13
- RFC PR: None
- Github Issue: None

# Summary

In the design of the Darwinia network Solo model, it is necessary to distribute RING revenue to all KTON, which means that KTON can be transferred and flowed between the revenue distribution, that is, it needs to support the distribution of RING revenue to move KTON.

Since when distributing income, the boundary of income ownership needs to be clearly determined, it is generally necessary to lock the equity token to facilitate liquidation. However, in the Darwinia network Solo model, it is necessary to support the flow of KTON. Therefore, if the RING income is to be real-time, it is necessary to improve clarity before and after any KTON transfer occurs. <!-- Please review this details -->

The transfer of ERC20 needs to be recorded on Ethereum only as a change of balace, but in KTON, it needs to record its current income to facilitate liquidation. It can be understood as:

## KTON Transfer Model

Usually the transfer of native tokens can be understood as

```angular2
Normal_Transfer = Sender_Output + Receiver_Input
```

KTON's transfer can be understood as

```angular2
KTON_Transfer = Reward_Settlement(Sender_KTON_Output) + Sender_KTON_Output + Receiver_KTON_Input + Reward_Settlement(Receiver_KTON_Input)
```

### Refer to the Reward_Settlement method of Ethereum P3D

In P3D Token, there is no Transfer method, only Withdraw and Deposit methods, but in fact, the Transfer method can be obtained by combination, that is to say

```angular2
Transfer(sender, to) = sender.Withdraw + to.Deposit
```

Because income distribution also exists in P3D, the Reward_Settlement operation is also required in Withdraw and Deposit.

which is:

```angular2
sender.Withdraw = sender.Reward_Settlement(Output) + sender.normal_withdraw(Output)
```

```angular2
to.Deposit = to.normal_deposit(Input) + to.Reward_Settlement(Input)
```

Reward_Settlement may also occur when KTON does not transfer funds:

- There is income in the account and need to be distributed. In this case, if the income balance of each KTON holder is calculated every time the income is distributed, it will consume a lot of computing resources, so it is impractical. The way to improve is to put the income of KTON holders into a pool, and then calculate for a single KTON holder when liquidation is required. Therefore, after the income is credited, only the total amount of the income pool has changed.
- KTON holders can claim income so when they want to do so, it will calculate the income that can be claimed according to the total amount of RING of the income pool, the number of KTON of the holder, and the total amount of KTON. The profit withdrawal is recorded in the total amount of the account withdrawn to.

```angular2
The amount that can be withdrawn from the account = the amount that can be withdrawn from the account (cleared + uncleared)-the amount withdrawn from the account
```

# Motivation and purpose

- Provide a technical solution that can give liquidity native token liquidation income

# Reference and implementation

## Code library

<https://github.com/darwinia-network/darwinia/tree/master/srml/kton> <!-- This link is broken -->

## Main Features [WIP]

- Support transfer
- Support staking income distribution
- Support receiving income
- Income distribution can be carried out in real time

# Disadvantages

- A certain amount of on-chain income settlement calculations need to be added when transferring funds
- If the account of the KTON holder is a contract account, then the current RING income can only be collected by the contract account, but whether the contract account supports its withdrawl is the question.
- The scope of this solution does not include KTON income distribution on other public chains (such as Ethereum or TRON). For KTON on other networks, an account should be created on the Darwinia relay chain to receive income. Specific benefits occur on the corresponding public chain. For example, the current state channel-based income distribution method of Evolution Land will not change. The advantage is that the corresponding KTON can also get income.

# Reason

Refer to RFC-0007 for specific staking design. The specific technical solution refers to the implementation of P3D. P3D does not support the transfer method, which has its business considerations, and may also be due to the fuel consumption of the transfer operation. But for a native token like KTON, it can be implemented at the SRML level.


# Current technology

# Some common income distribution schemes on Ethereum can be used as reference

## ERC-20 Repurchase Destruction Dividend Method

Destroying the tokens is actually a method of dividends at the same price. The number of tokens in the hands of other token holders has not changed, but the ratio has increased, and the supply has decreased, but the value of the corresponding system has not changed. In essence, It is also a kind of dividend. For specific cases, refer to BNB repurchase and burn dividends.

The disadvantage of this method is that it requires a good liquidity market between the dividend token and the equity token before the dividend token can be converted into equity token through repurchase, and then the equity token will be destroyed for dividends. Otherwise, It is not suitable to use this method.

In addition, although the repurchase and destruction are mathematically equivalent to dividends, it is not obvious from the market perception. From the perspective of ordinary users, it is not as easy to perceive the increase in the balance of the book as it is. Therefore, the actual effect of repurchase and destruction is not as good as direct distribution.

## ERC-20 Frozen Transfer (P3D) Dividend Method

We will mainly use P3D as an example to explain this method of dividend distribution through contracts.

P3D is different from ERC20 token in a strict sense, because it does not support the function of token transfer, there are only two ways to change the balance of the token holder. Because of this simplification, P3D simplifies the dividend method, that is, it only needs to update the holder's dividend amount when the token holder's balance changes to achieve precise contract dividends.

The specific implementation is to maintain the following ledger, taking equity token P3D and dividend currency ETH as examples:

Total_ETH_Dividends_Balance, the sum of all historical dividends, will only increase but not decrease. Each dividend will increase. My_ETH_Dividends_Balance_Claimed[address], the ETH dividend balance of a P3D holder in the system safe, initially is 0, but every time the holder’s P3D balance changes (purchase, sell), the ETH dividend balance will update and increase , Holders can receive dividends from them to their wallets and reduce accordingly.

Last_Claim_Total_ETH_Dividends_Balance[address], the value of Total_ETH_Dividends_Balance at the last claim of a P3D holder will be updated every time the holder’s balance changes (purchase, sell). Every time the holder’s balance changes (purchase, sell), the P3D balance before the operation is *balance_before*, the total P3D is *balance_total_before*, the P3D balance after the operation is *balance_after*, the total P3D is *balance_total_after*, and the holder’s address is *address* . First, the second and third ledgers will be updated.

```angular2
My_ETH_Dividends_Balance_Claimed[address] += {Total_ETH_Dividends_Balance-Last_Claim_Total_ETH_Dividends_Balance[address]} * [balance_before/balance_total_before]
Last_Claim_Total_ETH_Dividends_Balance[address] = Total_ETH_Dividends_Balance
```

Make other P3D balance changes

### Advantages
- Decentralized method, contract share dividends.

### Disadvantages
- The transfer function may need to be locked.

- The balance of holders in ERC20 changes frequently and can be carried out through transfer, issuance, destruction, etc. If each transfer needs to trigger a dividend contract, it will increase unnecessary fuel costs and increase the complexity of the contract, and most ERC20 certificates do not support doing extra things in the transfer transaction. (Some ERC223 may support, the specific implementation of KTON is also more complicated, and the degree of friendly support is pessimistic). Unless the ERC20 token is required to be locked, this method can be used.
<https://etherscan.io/address/0xb3775fb83f7d12a36e0475abdd1fca35c091efbe#code>

# Question

[WIP]

# Future possibilities

- Make a general SRML

# Reference

- [1] [RFC Issue](https://github.com/darwinia-network/rfcs/issues/6)
- [2] [P3D code implementation](https://etherscan.io/address/0xb3775fb83f7d12a36e0475abdd1fca35c091efbe#code)
