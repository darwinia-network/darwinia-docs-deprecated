---
id: wormhole
title: Wormhole
sidebar_label: Wormhole
---

![wormhole](assets/wormhole/wiki-tut-wormhole-general-001.png)

## Ethereum-Darwinia technological innovation

There are many cross-chain schemes, but the real challenge is the connection between heterogeneous chains. Currently, multisig whitelist  nodes and Light Client-based bridge schemes are generally used, which are relatively safe and stable, and of which the best  is Light Client-based bridge. Dawinia is developing decentralized asset endorsement technology, which is the complete realization of this Light Client-based bridge scheme, including high-performance cross-chain relay service ‘Darwinia Relay’, heterogeneous chain cross-chain transfer bridge, non-standard asset cross-chain standards and cross-chain exchange protocol, etc.

Looking back at the history of cross-chain transfer bridges, the previous open-source project is the BTCRelay developed by Consensys, which is a one-way bridge from BTC to ETH, which verifies transactions on BTC by using Ethereum smart contracts to implement BTC's Light Client. In addition, there is the WaterLoo EOS-ETH two-way transfer bridge developed by Kyber Network, which implements the light client of the counterparty chain on ETH and EOS respectively. However, because the operating cost of smart contracts is relatively high, WaterLoo made Ethash verification compromise, not completely decentralized. Compared with smart contracts, Darwinia's cross-chain bridge is based on the Substrate runtime, which provides more flexibility, especially in terms of gas and operating costs. It can be optimized a lot, and it can also provide better economic feasibility based on complete decentralization.


The Ethereum-Darwinia one-way bridge solves the problem of the high cost of traditional Light Client. Darwinia Relay is a universal cross-chain transfer bridge solution, mainly to solve the cost and performance problems. The traditional cross-chain transfer bridge needs to relay every block header on the opponent chain to the light client on the chain. If The block generation rate of the counterparty chain is very fast, the cost will be very high, making the solution economically infeasible and unable to be applied on a large scale. Darwinia Relay realizes the purpose of cross-chain verification while reducing costs by implementing a Super Light Client on the chain. Super Light Client uses a special MMR data structure, which has been adopted by projects such as Grin and Beam. However, in the case that the counterparty chain does not support Super Light Client, there are many things that have not been encountered in the implementation of Super Light Client on the chain. **Darwinia Relay innovatively solves the challenge of implementing Super Light Client on the chain, and builds a set of economically feasible cross-chain transfer bridge solutions to provide a direction for the future cross-chain of heterogeneous chains.**

<hr />

**Please contact us directly if you have questions or suggestions.**

Email: support@darwinia.network

Telegram: [t.me/DarwiniaNetwork](https://t.me/DarwiniaNetwork)

