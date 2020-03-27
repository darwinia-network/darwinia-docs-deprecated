---
id: rfc-0010-darwinia-cross-chain-nft-bridge-protocol
title: 0010 Darwinia Cross Chain Nft Bridge Protocol
sidebar_label: 0010 Darwinia Cross Chain Nft Bridge Protocol
custom_edit_url: https://github.com/darwinia-network/rfcs/edit/master/RFC/en_US/0010-darwinia-cross-chain-nft-bridge-protocol.md
---

- rfc: 10
- title: 0010-darwinia-cross-chain-nft-bridge-protocol
- status: Draft
- desc: Cross-chain NFT Bridge Protocol


# Cross-chain NFT Bridge Protocol

### v 0.3.0



## I. Over view

The Xclaim-based framework provides an idea for token cross-chain, but there are still many problems with NFT, including the Vault collateral design on the Backing Blockchain. This problem can be effectively solved by introducing a chain-Relay contract on the Backing Blockchain. This paper will design a cross-chain Nft solution and standard based on this improved cross-chain bridge solution.

**Keywords**：Blockchain, NFT, cross chain, multi-chain



## II. Background

### A. Research History

The emergence of Bitcoin [1] allows everyone to operate their own assets trustless, as long as they have a private key. The entire Bitcoin system consists of a series of blocks that record their pre-order block hashes, maintaining the same decentralized global “ledger”.

After Bitcoin, with the rapid development of the blockchain, smart contracts are supported by the public chains - Ethereum [2], the public chain of PoS - EOS [3]. The outbreak of these public chains has brought prosperity to the entire token trading market.

The mainstream token trading/exchange method is still via a centralized exchange, and the user's token is managed by exchange as well. Trust and maintenance costs are high and there is a constant threat of hacking.

In order to overcome the drawbacks of centralized exchanges, decentralized exchanges (DEX) began to emerge. Most DEX only support token trading/conversion on a single public chain, such as ERC20[4], ERC721 token[5] on Ethereum. This did achieve decentralization with a limited extent, and reduced the cost of trust (from believing in the organization to believing code); yet the usage scenario is also limited by the Tps and transaction costs of the public chain.

There are also some decentralized exchanges implemented ACCS, allowing tokens to be cross-chain exchanged. They use the hashed timelock contracts (HTLCs) [6].  HTLCs can achieve atomic exchange of cross-chain tokens trust free, which both decentralizes and extends the functionality of DEX on a single chain. Its disadvantage high cost, and with many restrictions: (i) all participants must online during the whole process (ii) invalidation of the dust transaction (iii) lock time is long for most cases. Such  cross-chain token exchange is both expensive and inefficient. In actual use, there are very few examples of the usage of HTLCs.

In order to achieve a trust-free, low-cost, and efficient token cross-chain operation, the XClaim team proposed a cross claim scheme based on CBA. And in XClaim's paper, they explained in detail about how to complete the following four operations: Issue, Transfer, Swap and Redeem.

 The role that ensuring economic security in the XClaim system is called $vault$. If anyone wants to transfer the native token $b$ of chain $B$ into $i(b)$ on chain $I$, then you need $vault$ over-collateralized $i$ on chain $I$. In the above four operations, if $vault$ has malicious behavior, the $i$ that $vault$ mortgaged  is penalized to compensate the cross-chain initiator. For additional details, see XClaim's paper [7].

So far, a reliable and achievable solution of Fungible token cross-chain has been obtained.

### B. Unresolved issues of XClaim framework

There is a basic assumption in the XClaim scheme that the total value of the native token $b$ of chain $B$ locked is equal to the total value of $i(b)$ issued on $I$. In XClaim, it is called symmetric, which is $ |b| = |i(b)|$. The assumption is that XClaim has a natural dilemma for NFT cross-chain:

- The irreplaceability of NFT. Because of the identifiability and irreplaceability of NFT, it is impossible for $vault$ to mortgage NFT $nft_b$ on chain $B$ on chain $I$.
- The value of NFT is difficult to assess. In XClaim, determining whether the $vault$ collateral is full/overdated is achieved through Oracle $O$. So is also a potential assumption that token $b$ and token $i$ can be evaluated correctly. Based on the current prosperous centralization and decentralized exchanges, this potential assumption can be basically met in the case of providing good liquidity. However, the market of the NFT exchange is not yet mature, and even the centralized exchange cannot truly reflect the market's price judgment on the NFT. How NFT pricing itself is a problem.
- NFT pricing is not continuous or predictable. Even if a NFT has a transaction record in the market with a certain price, since the frequency of NFT sold is far less than FT, though market has sufficient liquidity, the next transaction price of the NFT is Not continuous or predictable.

### C. Solution Description

There are two ideas for the NFT cross-chain solution regarding the above problems. First one is based on the XClaim framework and retains the NFT extension of the bridge pledge mechanism. The Harberger mechanism is introduced to solve the NFT pricing problem. For detailed solutions, see [RFC. -0011: Using Harberger Tax to find price for XClaim Vault Collaterals](./rfc-0011-using-harberger-tax-to-find-price-for-xclaim-vault-collaterals). However, this solution still cannot solve the problem of insufficient pledge due to the price change of NFT.

Another idea is to introduce ChainRelay into the Backing Blockchain to offer more protection for the backing assets so that the pledge mechanism is no longer needed. It is called: [RFC-0012: Darwinia Bridge Core: Interoperation in ChainRelay Enabled Blockchains](./rfc-0012-darwinia-bridge-core-interoperation-in-chainrelay-enabled-blockchains). Detailed introduction will not be described in detail here, and instead this article will focus on designing a cross-chain NFT standard based on this improved cross-chain bridge solution, and proposing a lower cost high extensible function cross-chain protocol for the case of mutual cross among multiple blockchains.



In [RFC-0012](./rfc-0012-darwinia-bridge-core-interoperation-in-chainrelay-enabled-blockchains) V.A, we introduced the model of Darwinia Bridge Core to optimize the number of chainRelays in the blockchain network topology. This article will be based on the Darwinia Bridge Hub and will be refined for NFT-specific issues.

<img src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7fe8rjjzvj30kb0bfgmc.jpg" alt="chain-relay-framework" style="zoom:80%;" />

## III. NFT in Darwinia Bridge Core

The difficulty of NFT cross-chain operation is that different public chains have their own NFT standards, and even the NFT token ids on different public chains are not equal in length. When NFT crosses different public chains, it will inevitably experience token id. conversion. How to avoid the identifiability of NFT in the process of cross-chain is a proposition worth studying.

When designing NFT flow logic in Bridge Core, we want to solve the following three problems:

- Preserving the cross-chain flow path/history of the NFT without losing the identifiability of the NFT;
- Calculate and verify decoupling with higher processing speed;
- Implement additional functions, such as to complete NFT decomposition, merge, etc. while cross-chaining;



To this end, we chose to introduce some midway parsing state for each NFT that crosses the Bridge Core chain, called UNFO (Unspent NFT Ouput), which will maintain a global ID on the Bridge Core and prove the mapping relationship between the global ID and the NFT external local ID by cross-chain circulation history. UNFO is not necessarily responsible for the NFT's Ownership Management within Bridge Core, but can also be extended by a $lock\_script$, for example by pointing $lock\_script$ to a property management contract. inside Bridge Core.

<img src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7fe8qjwd9j30fe0gh3zg.jpg" alt="0010-framework-of-bridge-core" style="zoom:50%;" />



### A. Component definition

- *Issuing Smart Contract*,  $iSC_N$:  means the asset issuing contract on chain *N*；
- *Backing Smart Contract*,  $bSC_N$ : means the asset lock contract on chain $N$；
- *Verifying Smart Contract*,  $vSC_N$ : means the Validator model in Bridge Core that verify asset issuing contract/model on chain *N* ；
- *Global identifier* ,  $GID$ , The global idendifier for the NFT in Darwinia Bridge Core
- *Unspent Non-Fungible Output* ,  $UNFO$, Intermediate Resolution State for the NFT in Darwinia Bridge Core, aka. unspent NFT output. The idea stems from UTXO, when an UNFO is destroyed, another new UNFO will be generated at the same time.
- *External Backing NFT*,  $nft_B^{x,n}$, means the NFT marked as   $n$  on chain $B$ with contract $x$.
- *Bridge Core Mirror for Backing NFT*, $nft_{BC(unfo_{gid})}^{B,x,n}$,  aka $nft_{BC}^{B, n}$ ，the NFT cross-chained into Bridge Core with midway state, and mirroring with $nft_B^{x,n}$  on chain $B$, which means a corresponding NFT to be issued/locked on chain $B$.  $unfo_{gid}$ means the UNFO midway state of NFT inside Bridge Core.
- *External Issueing NFT*,  $nft_I^{x',n'}$,  means the NFT issued on chain $I$ after cross-chain, with contract  $x'$,  marked as $n'$,
- *Bridge Core Mirror for Issuing NFT*,$nft_{BC(unfo_{gid})}^{I,x',n'}$, aka $nft_{BC}^{I, n'}$ ，means the NFT cross-chain into Bridge Core with midway state, and mirroring with $nft_I^{x',n'}$ on chain $I$, and suggesting a NFT on chain $I$ is to be issued/locked.  $unfo_{gid}$ means the the UNFO of NFT inside Bridge Core with midway state.
- *Locking Transaction* ,  $T_{B}^{lock}$,  the transaction lock NFT in  $bSC_B$ on chain *B*
- *Redeem Transaction* ,  $T_I^{redeem}$， the transaction lock NFT in $bSC_I$ on chain *I*
- *Extrinsic Issue*,  $EX_{issue}$ , the issure transaction in Bridge Core
- *Extrinsic redeem*,  $EX_{redeem}$ , the redeem transaction in Bridge Core.

Participants:

- *validator*,  the participant  that maintin Bridge Core；

### B. UNFO Realization and effect

#### B.I UNFO data structure

```rust
struct UNFO {
  pub local_id, // chain_id + smart_cotnract_id + token_id
  pub global_id,
  pub phase, // current phase
  pub lock_script, // e.g. ownership or state management
}
```

- **local_id**：Indicates that the UNFO corresponds to the *token_id* of *smart_contract_id* on an external blockchain *chain_id*
- **global_id**：indicates this UNFO has Globally unique identifier within all blockchain it crossed.
- **phase**：indicates the stage of cross-chain of the UNFO. Eg:
  - 1: the correspond NFT on blockchain *chain_id* of the UNFO was looked, the cross-chain process is in midway state
  - 2: the correspond Nft of the Unfo on blockchain *chain_id*has been issued/to be issued；cross-chain process has been finished/to be finished.
- **lock_script**: For more complex logic, fine-grained control scripts that maintain UNFO's scalability. Lock_script expresses the owner of this NFT. When the NFT is circulating within the Bridge Core, the lock_script may point to an ownership contract. When the NFT is locked in the backing contract, the lock_script may point to to the redeem contract of backing contract.



#### B.II. UNFO Conversion

We chose to use the UNFO model as a storage/state flow unit. The UNFO model is a design idea similar to the UTXO model.

The destruction of one UNFO means the creation of another, if we trace the history of UNFO's destruction and creation, we can trace back the entire cross-chain history of an NFT, which helps to achieve the NFT's identifiability to a certain extent.

Each UNFO can only be destroyed once, which makes it unnecessary to verify before the calculation, thus improving the processing speed;

Just like Bitcoin's UTXO, there can be more than one Input and Output. This feature allows the NFT to perform some extended functions during the process of cross-chaining. such as NFT splitting and merging,

NFT has always been more useful than FT. For example, in games, the NFT as a prop is required to be detachable, synthesizable, and scalable. For this reason, many NFT standards, such as ERC721, ERC721X and ERC1155, have been extended and so on. The more standards, the more difficult it is to be widely used.

If some of the common requirements can be implemented during cross-chain process, the number and redundancy of standards can be effectively reduced, and to a certain extent, it is more conducive to achieve a unified standard.



When an UNFO is produced, it must satisfy:

- Provide a lock record for the corresponding NFT of *backing blockchain*;
- Another UFNO destroyed
  - Condition: The GID of the destroyed and produced UNFO must be the same

<img src="https://tva1.sinaimg.cn/large/006y8mN6ly1g7fe8skd28j30hj06z0sz.jpg" alt="0010-UNFO-transform" style="zoom:50%;" />

#### B.III. UNFO-based NFT mapping and ID consistency

Fungible Token only needs to ensure the value of CBA and the original assets are symmetrical and safe when cross-chain transfering, but NFT has higher requirements for identifiability, so it is necessary to better maintain NFT CBA and original assets 1-1 mapping to ensure consistency, including GID and External Local ID.

| UNFO | GID     | External Chain ID | External Contact Address | External Token ID | Lock_Script                      | Active Status |
| ---- | ------- | ----------------- | ------------------------ | ----------------- | -------------------------------- | ------------- |
| 1    | GID0001 | Ethereum          | A_ERC721                 | 12                | script_issuing_burn_or_relay | False         |
| 2    | GID0001 | Tron              | B_TRC721                 | ?                 | script_backing_redeem          | True          |
| 3    | GID0002 | EOS               | C_dGoods                 | 2.5.4             | script_issuing_burn_or_relay | False         |
<center>
  Example: Mapping Based on UNFO
</center> Suppose we use nft (Exterenal_Chain_ID, External_Contract_Address, External_Token_ID) to identify the NFT on an external public chain. In the absence of a cross-chain mapping table for NFT:

> nft(A, X, 1) represents the NFT identified as 1 on the A chain and in contract X.

In the absence of a cross-chain mapping table for NFT,

> In the cross-chain bridge M (A->B), Alice changes nft(A, X, 1) to nft(B, Y, 2); switch nft( B, Y, 2) to nft(C, Z, 3) through cross-bridge N (B->C). Later, when Alice wants to continue to use the cross-chain bridge M to link the nft chain on the C-chain to the A-chain, because there is no cross-chain mapping table to query the ID information of the NFT in A, the cross-chain bridge M will be nft(C, Z, 3) is recognized as a new NFT CBA, which is likely to be no longer nft(A, X, 1), but nft(A, X, 5) instead . The identifiability and ID consistency add additional complexity and confusion to the protocol and redemption process.

In order to minimize the potential asset loss caused by the loss of NFT identifiability, if the NFT crosses the chain within the Bridge Core connected network, the user can obtain the current UNFO-based NFT mapping table of an NFT on the Bridge Core. The protocol will be able to constrain the NFT of the user's cross-chain back to the A chain to comply with ID consistency and identifiability. Thus, at least within the Darwinia Bridge Core system, the NFT ensures that identifiability is not compromised.

In order to maintain a good ID consistency, it is desirable to keep the mapping between the External Chain ID and the External Contact Address (External Token ID) unchanged during the lifecycle of the NTU through the Cross-chain of the Bridge Core. Analyze the service and query the corresponding External Token ID in the UNFO mapping table to maintain consistency. In RFC-0013 Section III.D, we will also detail the NFT parsing module.

### C. Preliminary Implementation Plan

The scenario is the same as described in Chapter II. Still need to implement three protocols：*Issue, Transfer, Redeem*. Also to simplify the model, the details about fees will not be discussed here.

#### Protocol: Issue

(i) ***lock***. *requester* lock the NFT asset $nft_B^{n,x}$ on chain $B$ in $bSC_B$ and declare the destination public chain *I* and the address of itself on the chain $I$; this step will generate the transaction $T_B^{lock}$

(ii) ***Issue in Bridge Core***. *requester* will lock the transaction $Tb^{lock}$ to Bridge Core, and after verified by the corresponding chain relay, it will trigger $vSC_B$ in $vSC_B$:

- Generate new $GID$ and $nft_{BC}^{B,n}$ , and record the relationship between $GID$ and $nft_{BC}^{B,n}$
- And trigger $vSC_I$

In $vSC_I$：

-  Destroy $nft_{BC}^{B,n}$, issue $nft_{BC}^{I,?}$, $issue\_{ex}(\ GID,\ address\_on\_I) \rightarrow EX_{ Issue}$

(iii) ***issue***. *requester* submit $EX_{issue}$ to chain $I$ , which will issue New NFT: $nft_I^{x', n'}$ in $iSC_I$ after passing the chain relay verification on chain $I$ , and record the relationship between $GID$ and $nft_I^{x', n'}$, and pass ownership to *requester* address on chain *I*

Note: For $iSC$ on the external blockchain, the global ID and local ID mappings need to be recorded on the external blockchain at the time of release, because this mapping is required to complete redeem.

<img src="https://tva1.sinaimg.cn/large/006y8mN6gy1g7sznhszi8j30pz0elabd.jpg" alt="chain-relay-framework-1" style="zoom:50%;" />

#### Protocol: Transfer

(i) ***transfer***. *sender* put $nft_I^{x',n'}$ on $I$ in $iSC_I$ and transfer ownership to *receiver*, refer to ERC721.

(ii) ***witness***.When the ownership of $nft_I^{x',n'}$ in $iSC_I$ has been transferred, both $iSC_I$ and $bSC_I$ should be aware. At this point, when *sender* wants to redeem $nft_I^{x',n'}$, it needs to be locked in $bSC_I$ first, then $ bSC_I$ will not allow the operation to succeed.

#### Protocol: Redeem

(i) ***lock***. *redeemer* locks the NFT asset $nft_I^{x', n'}$ on chain $I$ in $bSC_I$ (if there is a corresponding GID, it needs to declare $GID$ when locked)), declare the destination public chain $B$ and its own address on the chain $B$; $bSC_I$ will atomically confirm the correctness of $GUID$ in $iSC_I$. This step will generate the transaction $T_I^{redeem}$. $lock\_I(nft\_id\_on\_I,\GID,\ address\_on\_B) \rightarrow T_I^{redeem}$

(ii) ***Unlock on Bridge Core***. *redeemer* submits $T_I^{redeem}$ to $vSC_I$ and validates it in the chain relay, in $vSC_I$:

- Record the correspondence between $GID$ and $nft_I^{x', n'}$,
- Determine the destination public chain and trigger the corresponding $vSC_B$

In $vSC_B$,

- By $GID$ search, destroy $nft_{BC}^{I,n'}$ and generate $nft_{BC}^{B, n}$, $ redeem\_ex(\ GID,\ nft\_id\_on\ _B,\ address\_on\_I) \rightarrow EX_{issue}$

The above process is triggered in an Extrinsic, which will generate an Extrinsic id, recorded as $EX_{redeem}$

(iii) ***Unlock***. *redeemer* submits $EX_{redeem}$ to chain $B$, after $iSC_B$ verification, the correspondence of $GUID$ and $nft_B ^{x,n}$ will be recorded in $iSC_B$, which will also atomically trigger the method in $bSC_B$, returning $nft_B^{x,n}$ to the specified address.

<img src="https://tva1.sinaimg.cn/large/006y8mN6gy1g7szni9t0lj30r70elgn2.jpg" alt="chain-relay-framework-2" style="zoom:50%;" />

### D. Algorithms

##### Protocol: Issue

<img src="https://tva1.sinaimg.cn/large/006y8mN6gy1g7sznio88rj30uc0j0aca.jpg" alt="image-20191010113808729" style="zoom:50%;" />

Explanation:

###### *requester* related actions:

- **lockB**($nft_B^{x,n}$, cond): Occurs in the chain $B$. Lock $nft_B^{x,n}$ in $bSC_B$ and declare the *requester* address on chain $I$, this operation corresponds to the transaction $T_B^ {lock}$

- **verifyBOp**(lockB, $T_B^{lock}$, $\Delta_{lock}$) $\rightarrow T$ : Occurs within Bridge Core. *requester* submit $T_B^{lock}$ to $vSC_B$ in Bridge Core for verification, if $T_B^{lock}$ actually occurs on chain $B$ and meets the minimum required delay of $\Delta_{lock}$, it returns the result T(True), otherwise returns F(False).

  If the result is T, then newGid($nft_B^{x,n}$) is automatically triggered in $vSC_B$, a new GID and the mirror of $nft_B^{x,n}$ in Bridge Core $nft_ {BC}^{B,n}$ are generated, and establish the correspondence between GID and $nft_{BC}^{B,n}$

- **verifyBCOp**(trigger, $EX_{issue}$, $\Delta_{trigger}$) $\rightarrow T$ : Occurs in chain $I$. *requester* submit $EX_{issue}$ to $iSC_I$ in chain $I$, return T if $iSC_I$ verifies the authenticity of $EX_{issue}$, otherwise return F. After verification, by calling the issue method, issue  $nft_I^{x',n'}$ to *requester* at the address of chain $I$.

###### *validator* Related operations：

- **issueTransform**($vSC_I,\ pk_I^{requester},\ GID$ ): *validator* will automatically trigger the method in vSC_I$, and destroys $nft_{BC}^{B,n}$ while produces $nft_{BC}^{I,?}$, to represent the newly added nft image on chain $I$ (The reason why $?$ is used here is because nft on chain $I$ has not been added yet, so its token id cannot be obtained), and establish the correspondence between GID and $nft_{BC}^{I,?}$ This operation will generate $EX_{issue}$.



##### Protocol: Transfer

![image-20190927191635665](https://tva1.sinaimg.cn/large/006y8mN6ly1g7fe8pswk9j3120050aac.jpg)

Explanation:

*sender* calls the transfer method in $iSC_I$ on chain $I$ and sends $nft_I^{x',n'}$ to *receiver*



##### Protocol: Redeem

<img src="https://tva1.sinaimg.cn/large/006y8mN6gy1g7sznhfdu6j314w0q0n0c.jpg" alt="image-20191010114326817" style="zoom:50%;" />

Explanation:

###### *redeemer* Related Operations:

- **burn**( $nft_I^{x',n'}$, $GID$, $pk_B^{redeemer}$ ) : Occurs on chain $I$ . *redeemer* triggers $bSC_I$ to destroy $nft_I^{x',n'}$, but keeps the destruction record, $bSC_I$ can atomically check $GID$ and $nft_I^{x',n'}$ correspondence. This operation will generate the transaction $T_I^{redeem}$
- **verifyIOp**(burn, $T_I^{redeem}$, $\Delta_{redeem}$) : Occurs within Bridge Core. The user submits $T_I^{redeem}$ to $vSC_I$. If $T_I^{redeem}$ actually happened on chain $I$ and met the minimum required delay of $\Delta_{redeem}$, then Find the corresponding $nft_{BC}^{I,?}$ according to $GID$ and automatically complete it to $nft_{BC}^{I,n'}$
- **verifyBCOp**(trigger, $EX_{redeem}$, $\Delta_{trigger}$) $\rightarrow T$ : Occurs in chain $B$. *redeemer* submit $EX_{redeem}$ to $iSC_B$ in chain $B$ and return T if $iSC_B$ verifies the authenticity of $EX_{redeem}$, otherwise return F. After verification passed, by calling the issue method, $nft_B^{x,n}$ is released to *redeemer* at the address of chain $B$.

###### *validator* Related operations:

- **burnTransform**($vSC_B,\ GID,\ nft_{BC}^{x,n},\ pk_B^{redeemer}$ ): *validator* automatically triggers the method in $vSC_B$, destroying $nft_{BC}^{I,n'}$ and generating $nft_{BC}^{B,n}$, which indicates the image of nft will be released on chain $B$. This operation will generate $EX_{redeem}$.



##

## IV. Cross-chain NFT Standards

In a cross-chain environment, NFT will appear in different blockchain networks, and its availability state may change constantly. Therefore, standards and solutions (such as Ethereum ERC20) in the original single-chain network cannot meet the requirements of NFT cross-chain standards.

The identifiability and resolution issues of cross-chain Nft standards require new solutions and standards to address. Therefore, we introduce a analytic system based on the cross-chain token certification to meet the positioning and resolution requirements. Through token resolution system and the unique identifier in the domain, we can map the relationship of tokens in different domains, and identify the different between them.

### A. Design Range

- Globally unique identifier and external local identity specification

  In order to standardize the different token identifiers, to provide identification and analysis methods, to coordinate and interface with existing standards, and to meet the standard requirements of community infrastructure construction, the identifiers are divided into a global unique identifier and an external local identifier.

- NFT Resolution system

- NFT ownership management

- Inter-parachain NFT Transfers

  Introducing an associated Spree module to help cross-chain transfers between different parallel chains are facilitated

### B. Standard Solution Proposal

Based on the design and solution basis of the NFT cross-chain protocol, we have designed and proposed a standard proposal for NFT cross-chain, detailed design is placed in [RFC-0013 Cross-chain NFT Standards](./0013-darwinia-cross-chain-nft-standards. md).



## Reference

[1] https://bitcoin.org/bitcoin.pdf

[2] https://github.com/ethereum/wiki/wiki/White-Paper

[3] https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md

[4] https://eips.ethereum.org/EIPS/eip-20

[5] https://eips.ethereum.org/EIPS/eip-721

[6] https://en.bitcoin.it/wiki/Hashed_Timelock_Contracts

[7] https://eprint.iacr.org/2018/643.pdf

[8] https://opensea.io/

[9] https://vitalik.ca/general/2018/04/20/radical_markets.html

[10] https://github.com/ethereum/wiki/wiki/Light-client-protocol

[11] https://elixir-europe.org/platforms/interoperability

[12] https://github.com/AlphaWallet/TokenScript

[13] https://github.com/darwinia-network/rfcs/blob/v0.1.0/zh_CN/0005-interstella-asset-encoding.md

[14] https://onlinelibrary.wiley.com/doi/pdf/10.1087/20120404

[15] https://wiki.polkadot.network/en/latest/polkadot/learn/spree/

[16] https://en.wikipedia.org/wiki/Unique_identifier

[17] https://en.wikipedia.org/wiki/Identifiers.org

[18] https://schema.org/

[19] https://medium.com/drep-family/cross-chains-a-bridge-connecting-reputation-value-in-silo-b65729cb9cd9

[20] https://github.com/paritytech/parity-bridge

[21] https://vitalik.ca/general/2018/04/20/radical_markets.html

[22] https://talk.darwinia.network/topics/99

