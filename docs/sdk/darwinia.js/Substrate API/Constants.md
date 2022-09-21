---
sidebar_position: 3
---

# Constants


 

The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via api.consts.`<module>`.`<method>`.

(NOTE: These were generated from a static/snapshot view of a recent Darwinia master node. Some items may not be available in older nodes, or in any customized implementations.)


- [<font color="blue" size="5">bridgeCrabGrandpa</font>](#bridgeCrabGrandpa)
- [<font color="blue" size="5">bridgeCrabMessages</font>](#bridgeCrabMessages)
- [<font color="blue" size="5">feeMarket</font>](#feeMarket)
- [<font color="blue" size="5">ktonTreasury</font>](#ktonTreasury)
- [<font color="blue" size="5">phragmenElection</font>](#phragmenElection)
- [<font color="blue" size="5">tronBacking</font>](#tronBacking)
- [<font color="blue" size="5">ecdsaAuthority</font>](#ecdsaAuthority)
- [<font color="blue" size="5">ethereumBacking</font>](#ethereumBacking)
- [<font color="blue" size="5">ethereumRelay</font>](#ethereumRelay)
- [<font color="blue" size="5">ethereumRelayerGame</font>](#ethereumRelayerGame)



***

<span id="bridgeCrabGrandpa"><font size="6">bridgeCrabGrandpa</font></span>
<br></br>

 <font size="5">headersToKeep: u32 </font>

 - **interface**:  `api.consts.bridgeCrabGrandpa.headersToKeep`<br></br>


 - **summary**: Maximal number of finalized headers to keep in the storage.<br></br>
 
    The setting is there to prevent growing the on-chain state indefinitely. Notethe setting does not relate to block numbers - we will simply keep as much items in the storage, so it doesn't guarantee any fixed timeframe for finality headers.


 <font size="5">maxRequests: u32</font>

  - **interface**: `api.consts.bridgeCrabGrandpa.maxRequests`<br></br>

  - **summary**: The upper bound on the number of requests allowed by the pallet.<br></br>

    Once this bound is reached the pallet will not allow any dispatchables to be called until the request count has decreased.

<span id="bridgeCrabMessages"><font size="6">bridgeCrabMessages</font></span>
<br></br>
<font size="5">bridgedChainId: u8aFixed </font>




 - **interface**:  `api.consts.bridgeCrabMessages.bridgedChainId`<br></br>


 - **summary**: Gets the chain id value from the instance.<br></br>


<span id="feeMarket"><font size="6">feeMarket</font></span>
<br></br>


<font size="5">guardRelayersRewardRatio: Permill </font>


 - **interface**:  `api.consts.feeMarket.guardRelayersRewardRatio`<br></br>


 - **summary**: Percentage of reward for assigned relayers on duty after a message is successfully delivered.<br></br>

<font size="5">assignedRelayerSlashRatio: Permill </font>


 - **interface**:  `api.consts.feeMarket.assignedRelayerSlashRatio`<br></br>


 - **summary**: Assigned relayers collateral slash percentage after message delivery failure.<br></br>

<font size="5">messageRelayersRewardRatio: Permill </font>


 - **interface**:  `api.consts.feeMarket.messageRelayersRewardRatio`<br></br>

 - **summary**: The percentage of relayer that gets rewarded for delivering the message. <br></br>

<font size="5">confirmRelayersRewardRatio: Permill </font>
 

 - **interface**:  `api.consts.feeMarket.confirmRelayersRewardRatio`<br></br>

 - **summary**: The percentage of relayer that gets rewarded for confirming the message. <br></br>


<font size="5">collateralPerOrder: u128 </font>
 

 - **interface**:  `api.consts.feeMarket.collateralPerOrder`<br></br>


 - **summary**: The collateral relayer need to lock for each order.<br></br>


<font size="5">minimumRelayFee: u128 </font>
  

 - **interface**:  `api.consts.feeMarket.minimumRelayFee`<br></br>


 - **summary**: Minimum relay fee requirement for bridgers when they enroll the fee market. <br></br>


<font size="5">slot: u32 </font>
 

 - **interface**:  `api.consts.feeMarket.slot`<br></br>


 - **summary**: The slot times set.<br></br>



<font size="5">treasuryPalletId: FrameSupportPalletId </font>
 

 - **interface**:  `api.consts.feeMarket.treasuryPalletId`<br></br>


 - **summary**: The treasury id.<br></br>

<font size="5">lockId: U8aFixed </font>
 

 - **interface**:  `api.consts.feeMarket.lockId`<br></br>

 - **summary**: The lock id for relayer's collateral. <br></br>





<span id="ktonTreasury"><font size="6">ktonTreasury</font></span>
<br></br>

<font size="5">burn: Permill </font>


- **interface**:  `api.consts.ktonTreasury.burn`<br></br>

- **summary**:  Percentage of spare funds (if any) that are burnt per spend period. <br></br>



<font size="5">maxApprovals: u32 </font>
 

- **interface**:  `api.consts.ktonTreasury.maxApprovals`<br></br>

- **summary**:  The maximum number of approvals that can wait in the spending queue. <br></br>



<font size="5">palletId: FrameSupportPalletId </font>
 

- **interface**:  `api.consts.ktonTreasury.palletId`<br></br>

- **summary**:  The treasury's pallet id, used for deriving its sovereign account ID. <br></br>


<font size="5">proposalBond: Permill </font>
 

- **interface**:  `api.consts.ktonTreasury.proposalBond`<br></br>

- **summary**: Fraction of a proposal's value that should be bonded in order to place the proposal. An accepted proposal gets these back. A rejected proposal does not. <br></br>



<font size="5">proposalBondMinimum: u128 </font>
 

- **interface**:  `api.consts.ktonTreasury.proposalBondMinimum`<br></br>

- **summary**: Minimum amount of funds that should be placed in a deposit for making a proposal. <br></br>


<font size="5">spendPeriod: u32 </font>
 

- **interface**:  `api.consts.ktonTreasury.spendPeriod`<br></br>

- **summary**: Period between successive spends. <br></br>





<span id="phragmenElection"><font size="6">phragmenElection</font></span>
<br></br>
 


<font size="5">candidacyBond: u128 </font>
 

- **interface**:  `api.consts.phragmenElection.candidacyBond`<br></br>

- **summary**: How much should be locked up in order to submit one's candidacy. <br></br>

<font size="5">desiredMembers: u32 </font>
 

- **interface**:  `api.consts.phragmenElection.desiredMembers`<br></br>

- **summary**: Number of members to elect. <br></br>




<font size="5">desiredRunnersUp: u32 </font>
 

- **interface**:  `api.consts.phragmenElection.desiredRunnersUp`<br></br>

- **summary**: Number of runners_up to keep. <br></br>



<font size="5">votingBondBase: u128 </font>
 

- **interface**:  `api.consts.phragmenElection.votingBondBase`<br></br>

- **summary**: Base deposit associated with voting. <br></br>

  This should be sensibly high to economically ensure the pallet cannot be attacked by creating a gigantic number of votes.


<font size="5">votingBondFactor: u128 </font>
 

- **interface**:  `api.consts.phragmenElection.votingBondFactor`<br></br>

- **summary**: The amount of bond that need to be locked for each vote (32 bytes). <br></br>




<span id="tronBacking"><font size="6">tronBacking</font></span>
<br></br>


<font size="5">palletId: FrameSupportPalletId </font>
 

- **interface**:  `api.consts.tronBacking.palletId`<br></br>

- **summary**: The pallet id of this pallet. <br></br>



<span id="ecdsaAuthority"><font size="6">ecdsaAuthority</font></span>
<br></br>


<font size="5">chainId: Bytes </font>
 

- **interface**:  `api.consts.ecdsaAuthority.chainId`<br></br>

- **summary**: Chain's ID, which is using for constructing the message. (follow EIP-712 SPEC). <br></br>


<font size="5">maxAuthorities: u32 </font>
 

- **interface**:  `api.consts.ecdsaAuthority.maxAuthorities`<br></br>

- **summary**: The maximum number of authorities. <br></br>



<font size="5">maxPendingPeriod: u32 </font>
 

- **interface**:  `api.consts.ecdsaAuthority.maxPendingPeriod`<br></br>

- **summary**: How long should we wait for the message root to be signed. <br></br>



<font size="5">signThreshold: Perbill </font>
 

- **interface**:  `api.consts.ecdsaAuthority.signThreshold`<br></br>

- **summary**: The signing threshold. <br></br>



<font size="5">syncInterval: u32 </font>
 

- **interface**:  `api.consts.ecdsaAuthority.syncInterval`<br></br>

- **summary**: The interval of checking the message root. <br></br>





 



<span id="ethereumBacking"><font size="6">ethereumBacking</font></span>
<br></br>

<font size="5">advancedFee: u128 </font>
 

- **interface**:  `api.consts.ethereumBacking.advancedFee`<br></br>

- **summary**:  <br></br>

<font size="5">feePalletId: FrameSupportPalletId </font>
 

- **interface**:  `api.consts.ethereumBacking.feePalletId`<br></br>

- **summary**:  <br></br>


<font size="5">ktonLockLimit: u128 </font>
 

- **interface**:  `api.consts.ethereumBacking.ktonLockLimit`<br></br>

- **summary**:  <br></br>


<font size="5">palletId: FrameSupportPalletId </font>
 

- **interface**:  `api.consts.ethereumBacking.palletId`<br></br>

- **summary**:  <br></br>


<font size="5">ringLockLimit: u128 </font>
 

- **interface**:  `api.consts.ethereumBacking.ringLockLimit`<br></br>

- **summary**:  <br></br>


<font size="5">syncReward: u128 </font>
 

- **interface**:  `api.consts.ethereumBacking.syncReward`<br></br>

- **summary**:  <br></br>






<span id="ethereumRelay"><font size="6">ethereumRelay</font></span>
<br></br>



<font size="5">approveThreshold: Perbill </font>
 

- **interface**:  `api.consts.ethereumRelay.approveThreshold`<br></br>

- **summary**:  <br></br>


<font size="5">confirmPeriod: u32 </font>
 

- **interface**:  `api.consts.ethereumRelay.confirmPeriod`<br></br>

- **summary**:  <br></br>



<font size="5">palletId: FrameSupportPalletId </font>
 

- **interface**:  `api.consts.ethereumRelay.palletId`<br></br>

- **summary**:  <br></br>


<font size="5">rejectThreshold: Perbill </font>
 

- **interface**:  `api.consts.ethereumRelay.rejectThreshold`<br></br>

- **summary**:  <br></br>



<span id="ethereumRelayerGame"><font size="6">ethereumRelayerGame</font></span>
<br></br>



<font size="5">lockId: U8aFixed </font>
 

- **interface**:  `api.consts.ethereumRelayerGame.lockId`<br></br>

- **summary**:  <br></br>


<font size="5">maxActiveGames: u8 </font>
 

- **interface**:  `api.consts.ethereumRelayerGame.maxActiveGames`<br></br>

- **summary**:  <br></br>



