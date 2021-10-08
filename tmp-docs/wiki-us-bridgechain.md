---
id: wiki-us-bridgechain
title: Bridge Chain
sidebar_label: Bridge Chain
---

Darwinia Bridge Chain is the most important part of the Darwinia Network, it is also the bridge hub of dapps and public chains.  
Darwinia Network itself can operate as a stand-alone cross-chain network, and Darwina chain will be responsible for consensus security and cross-chain interoperability. Meanwhile, benefits from Polkadot, which provides an open parachain network access method, Darwinia Chain can also chooses to access Polkadot as a Parachain of Polkadot, then Polkadot will take over and be responsible for the security of the Darwinia chain. All of the Parachain in Darwinia Network will be able to connect to a wider external blockchain network via Polkadot.

Darwinia's cross-chain bridge protocol uses the CBA (Cryptocurrency-backed Assets) model, and the bridge uses a technology called chain relay which can prove the existence of message and block.

## I. CBA Model
To transfer assets from one chain to another, users need to lock assets (called origin assets) as collateral to the source chain of the cross-chain bridge, and use this as an endorsement to issue the corresponding assets on the target chain at the other bridge end of the cross-chain bridge (called mapped assets).

#### Elements of the CBA model
- Original Assets: assets on the source chain, usually are assets that have not yet crossed the chain.
- Mapped Assets: cross-chain assets issued on the target chain with the original assets as collateral.
- Backing Module: the module on the source chain side used to collateralize, preserve and redeem the user's original assets.
- Issuing Module: the module on the target chain side for issuing and burning the user's mapped assets.

#### The use of CBA model on Darwinia Network
Backing and issuing modules are deployed on the source and target chains respectively. The backing module receives and locks the user's original assets, while the issuing module issues the corresponding mapped assets using assets on the backing as the collateral. Meanwhile, any unlocking of assets on the backing requires the proof of the mapped assets's burning on the issuing module.

The whole process needs to be decentralized without any third-party endorsement, and Darwinia uses *chain relay* technology.

## II. chain relay
It is responsible for submitting trusted blocks and messages from the source chain to the target chain in a decentralized manner.
- Message proof: The message exists in the block, and its hash is associated with the hash of the block, any small modification of the message will cause a change of the block hash, so the proof of the message depends on the proof of the block.
- Block proof (consensus proof): For different source chains, Darwinia chooses different consensus proof methods, and generally uses a special data structure called merkle mountain range to reduce the amount of data that needs to be synchronized to the target chain. It also introduces some collateral, reward and punishment mechanisms to make the consensus of synchronization fast and secure.

The chain relay verifies the proof of the asset locking from backing module for issuing module, on the contrary, it verifies the proof of the asset burning from issuing module for backing module. Darwinia Bridge adds an ultra-light client to the backing and issuing modules for remote chain, and synchronize data between the chains. We call it an ultra-light client since it needs to synchronize very little data compared to a light client to ensure the authenticity of the data to the other side. This is very beneficial for saving network overhead and cost.

Currently, Darwinia bridge completely uses the above mechanism for chain relay from Ethereum to Darwinia. For the Darwinia to Ethereum bridge, the authenticity of the block head is guaranteed by multiple signatures since the gas cost. In the future, when Ethereum supports the ed25519 pre-compiled instruction, the authenticity of the block header can be guaranteed by Darwinia Granpa Authorities.

##### Bridge miners (relayer)
Relayer submit proofs from one chain to another. Relayers supervise each other, are rewarded for submitting correct data and may be punished for incorrect data. Since there may be fork in the chain, relayers may also unintentionally submit incorrect data. To avoid such scenarios, relayers should submit confirmed blocks on the canonical chain. It has no impact on the security of the bridge, as forked chains are unsustainable and once some relayer discovers the existence of such a fork, it will immediately post a challenge and correct it.

## III. Registration Protocol (ERC20)
![architecture](../assets/bridger-register.svg)
When the asset from other chains is mapped to the Darwinia network, its name and precision remains the same as the origin and symbol is preceded by an m identifier to indicate the mapping level.

#### Asset Registration
- User calls the API of backing module on the source chain to register. For ERC20 assets, the registered token must conform to the ERC20 standard, and the parameters name, symbol, decimal are made mandatory.
- It generates a registration message, relayers listen to the message and submit it to the issuing module on the target chain.
- After receiving the message, issuing module of the target chain verifies and parses the message to get the information required for the creation of the mapped asset. For ERC20 assets, it includes the token's address, name, symbol and decimal.
- Issuing module creates the mapped asset and generates a proof of creation message.
- This message is synchronized by the relayer back to the backing module on the source chain to complete the registration.

#### Asset Cross-chain Transfer
- User calls the API of backing module on the source chain to request a cross-chain transfer. The module locks user's assets and generates a message proof.
- Similar to the registration, relayers synchronize the message proof to the issuing module on the target chain.
- The issuing module verifies and parses the message, then issues the mapped assets to the specified account.

#### Asset Redemption
- User calls the API of issuing module on the target chain to request a redemption. The issuing module burns the mapped assets and generates a message proof.
- The message proof is synchronized back to the backing module on the source chain by relayers.
- The backing module verifies the message and unlocks the corresponding assets to the specified account.

#### Fee
In order to ensure the stable of relayers and keep the bridge working, a small fee is charged to cover relayer's fee. KTON is used as the payment token for asset registration, while RING is used as the payment token for transferring. The fees are transferred to the Darwinia network, and are managed by the fee and liquidation system.

#### Tools
* Wormhole
A front-end tool for interacting with the chain, through which users can complete operations such as asset registration, locking and redeeming.
* Bridger
It is used by relayers to listen and synchronize bridge-related message between chains.
