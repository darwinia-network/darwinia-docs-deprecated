---
id: crab-tut-nominator
title: How to become a nominator
sidebar_label: Become a nominator
---
> - Staking is a consensus mechanism based on PoS (Proof of Stake / Proof of Stake). Token holders obtain rewards and benefits through pledge, voting, delegation, and locking.

> - Before participating in staking, please make sure you have at least **1** Darwinia address. If you hold more tokens or have higher security requirements, it is recommended to prepare **2** Darwinia addresses. If there is no address, please refer to: [How to create an account](<<https://docs.darwinia.network/docs/zh-CN/crab-tut-create-account>)

> - A small amount of CRING must be prepared in Darwinia's address as fee. If you have no CRING, please refer to: [How to get free CRING through faucet](<https://docs.darwinia.network/docs/zh-CN/crab-tut-claim-cring>)



## Start Staking

- Enter [Darwinia Wallet](http://apps.darwinia.network/) and lick the [Staking] column on the left , Click [Start staking].

![nominate-1-en](assets/nominate-1-en.png)

- Fill in the staking parameters 

![nominate-2-en](assets/nominate-2-en.png)

- ` Stash account` Account for stashing tokens. Tokens participating in staking will come from this account. The operations of this account are mostly related to changes in stash.

- `Controller account`  The controller is the account that will be used to control any nominating or validating actions. Should not match another stash or controller.

    > The `Btash account` and` Controller account` can be set to the same account. If you hold more tokens or have higher security requirements, it is recommended to set up different accounts here.

- `Value bonded` The total amount of the stash balance that will be at stake in any forthcoming rounds (should be less than the total amount available).  This part of the tokens will be temporarily bonded. bonding takes 14 days to unbond; you can choose to bond CRING or CKTON.

- `Payment destination` The destination account for any payment as either a nominator or validator.

- `Bond period` Optional; bond CRING promise for 3-36 months to get additional CKTON rewards. (Promise to lock to accept user terms)

    > If you unlock CRING in advance within the lock limit, you will be charged  a penalty of 3 times the CKTON reward.

- After filling in the staking parameters, please click [bond] and [submit]

![nominate-3-en](assets/nominate-3-en.png)



## Nominate a validator



- After completing the staking parameters, click [Nominate] on this page

![nominate-4-en](assets/nominate-4-en.png)
> The identities of the validator and the nominator are mutually exclusive and cannot coexist. If you are running a validator, you need to cancel the validator before proceeding with the nomination.


- Choose your favorite validator

![nominate-5-en](assets/nominate-5-en.png)



- Sign and submit

![nominate-6-en](assets/nominate-6-en.png)



- View information about nominated validators

![nominate-7-en](assets/nominate-7-en.png)


> The operation of nominating validators will take effect after the first epoch of the next era, and it is normal to temporarily delay.



## Other operations



There are other operations in staking for the following purposes:



![nominate-8-en](assets/nominate-8-en.png)



- `Stop nomination` cancels all nominees.

- `Bond` &`Bond more` adds bonded tokens for staking to obtain more power.

- `Unbond` unbond tokens for staking, and at the same time the power will be reduced proportionally.

  > The 14-day bond period is required to unbond. Tokens that are in the bond period cannot be operated. Please be careful.

- `Reward history` Go to SUBSCAN explorer to view historical reward records

- `Claim reward` Manually claim the reward, and the reward will be distributed in units of era.

  > Please note: 336 era (About 7 days)  will be saved, and you will not be able to claim it if it expires.

- `Change controller account` Change the account  that will be used to control any nominating or validating actions. Should not match another stash or controller.
- `Change reward destination` Change the destination account for any payment as either a nominator or validator.
- `Set nominees` Re-nominate validator
- `Change session key` If you want to upgrade to become a validator, you need to fill in this item. [How to become a validator](https://docs.darwinia.network/docs/zh-CN/crab-tut-validator)
- `Set on-chain identity` Set your personal information, such as display, legal name, email, website, twitter and riot. Other users can view this information and contact you.


