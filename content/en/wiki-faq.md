---
id: wiki-faq
title: FAQ
sidebar_label: FAQ
---
## About Darwinia

### What is the relationship between Darwinia Network and Polkadot?

Darwinia Network is the first game chain on Polkadot. The development of Darwinia network is based on Polkadot and Substrate framework. Later Darwin network will become a parachain of the Polkadot network.

<hr />

### What happens if Darwinia Network is no longer a parachain?

Even if Darwinia Network is voted off the Polkadot parachain set, it will still work as a "Solo Chain", where it's responsible for its own security.

<hr />

##About Token

### What are RING and KTON

- RING is system token of Darwinia Network, the initial supply before Darwinia network mainnet release is 2 billion. Ordinary users only need to hold RING to participate in all operations of Darwinia Network 
- KTON is the staking and governance credential of Darwinia Network, KTON can only obtained by locking RING for a fixed period, the initial supply is 0. KTON is mainly for advanced users, as an incentive to promise to hold RING for a long time.
- RING and KTON, similar to the relationship between spot and options (futures), through this dual-pass design, while encouraging long-term investors, it can reduce the risk of exchange manipulation of the network to a certain extent, and can effectively maintain network security Establish loyalty and create a beneficial governance system.
- At present, some RING and KTON exist in the Ethereum network and the Tron network in the form of ERC-20 and TRC-20. These TOKENs will be transferred to the Darwinia main network by 1:1 cross-chain conversion after the Darwinia main online.

<hr />

### What are cRING and cKTON?

- cRING and cKTON are the tokens of the Darwinia Crab network, and their parameters are consistent with the RING and KTON in the Darwinia mainnet, and use the same Staking mechanism and inflation model.
- After the Darwinia main network is launched, a Token Bridge between the Darwinia main network and the Crab network will be created to enable cRING and RING to be exchanged with each other, with a conversion ratio of 100 cRING = 1 RING.

<hr />

### What are RING and KTON in Evolution Land?

RING and KTON in Evolution Land is the ERC-20/TRC-20 token, Evolution Land will use RING in Darwinia Network as the payment token in game.

<hr />


## About Staking

### What is the `Power` ?

Users participate in staking, and the rights and interests obtained by bond RING or KTON are called Power .


### How to get `Power` and how to calculate the amount of` Power`?

Bond `RING` or` KTON` can get `Power`, where the bonded` RING total amount` and `KTON total amount` respectively correspond to **1/2** of` Power total amount`.

   > - Total Power = 1 (Decimals: 10^9)
   > - Power obtained by bonded RING = number of bonded RING / current total number of bonded RING * (total power / 2)
   > - Power obtained by bonded KTON = number of bonded KTON / current total number of bonded KTON * (total number of Power / 2)

<hr />

### What is the `power share` ？

`Power share` is the percentage of `Power held` in `Power total`.`Power share` can reflect the influence on the entire network. The larger the `Power share`.The greater the Power share, the greater the influence of the decision made on the entire network.

   > - Power share = Power held / Total Power * 100%

<hr />

### Why does my power share `increased & reduced`?

The change of `Power share` depends on two factors:

-Changes in the number of `self bonded assets`

-Changes in the number of `current network total bonded assets`

Therefore, if you find that the “Power share” has changed without any operation or no change in the self bonded assets, it is normal and may be caused by the change in the current total number of bonded assets on the network.

<hr />