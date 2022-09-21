---
sidebar_position: 6
---

# Storage



The following sections contain Storage methods are part of the default Darwinia runtime. On the api, these are exposed via api.query.`<module>`.`<method>`.

(NOTE: These were generated from a static/snapshot view of a recent Darwinia master node. Some items may not be available in older nodes, or in any customized implementations.)



- [<font color="blue" size="5">bridgeCrabGrandpa</font>](#bridgeCrabGrandpa)
- [<font color="blue" size="5">bridgeCrabMessages</font>](#bridgeCrabMessages)
- [<font color="blue" size="5">darwiniaHeaderMMR</font>](#darwiniaHeaderMMR)
- [<font color="blue" size="5">feeMarket</font>](#feeMarket)
- [<font color="blue" size="5">ktonTreasury</font>](#ktonTreasury)
- [<font color="blue" size="5">phragmenElection</font>](#phragmenElection)
- [<font color="blue" size="5">kton</font>](#kton)
- [<font color="blue" size="5">balances</font>](#balances)
- [<font color="blue" size="5">baseFee</font>](#baseFee)
- [<font color="blue" size="5">ecdsaAuthority</font>](#ecdsaAuthority)
- [<font color="blue" size="5">ecdsaRelayAuthority</font>](#ecdsaRelayAuthority)
- [<font color="blue" size="5">ethereum</font>](#ethereum)
- [<font color="blue" size="5">ethereumBacking</font>](#ethereumBacking)
- [<font color="blue" size="5">ethereumRelay</font>](#ethereumRelay)
- [<font color="blue" size="5">ethereumRelayerGame</font>](#ethereumRelayerGame)
- [<font color="blue" size="5">evm</font>](#evm)
- [<font color="blue" size="5">messageGadget</font>](#messageGadget)


***


<span id="bridgeCrabGrandpa"><font size="6">bridgeCrabGrandpa</font></span>
 <br></br>
 

  <font size="5">bestFinalized():H256 </font>
 

 - **interface**:  `api.query.bridgeCrabGrandpa.bestFinalized`<br></br>


 - **summary**: Hash of the best finalized header.<br></br>


 <font size="5">currentAuthoritySet():BpHeaderChainAuthoritySet </font>



 - **interface**:  `api.query.bridgeCrabGrandpa.currentAuthoritySet`<br></br>


 - **summary**: The current GRANDPA Authority set.<br></br>






 <font size="5">importedHashes(arg:u32):Option &lt;H256&gt; </font>
 

 - **interface**:  `api.query.bridgeCrabGrandpa.importedHashes`<br></br>


 - **summary**: A ring buffer of imported hashes. Ordered by the insertion time.<br></br>




<font size="5">importedHashesPointer():u32 </font>


 - **interface**:  `api.query.bridgeCrabGrandpa.importedHashesPointer`<br></br>


 - **summary**: Current ring buffer position.<br></br>


<font size="5">importedHeaders(arg:H256):Option&lt;SpRuntimeHeader&gt; </font>


 - **interface**:  `api.query.bridgeCrabGrandpa.importedHeaders`<br></br>


 - **summary**: Headers which have been imported into the pallet.<br></br>



<font size="5">initialHash():H256 </font>


 - **interface**:  `api.query.bridgeCrabGrandpa.initialHash`<br></br>


 - **summary**: Hash of the header used to bootstrap the pallet.<br></br>



<font size="5">isHalted():bool </font>
 

 - **interface**:  `api.query.bridgeCrabGrandpa.isHalted`<br></br>


 - **summary**: If true, all pallet transactions are failed immediately.<br></br>


<font size="5">palletOwner():Option&lt;AccountId32&gt; </font>
 

 - **interface**:  `api.query.bridgeCrabGrandpa.palletOwner`<br></br>


 - **summary**: Optional pallet owner.<br></br>


<font size="5">requestCount():u32 </font>


 - **interface**:  `api.query.bridgeCrabGrandpa.requestCount`<br></br>


 - **summary**: The current number of requests which have written to storage.<br></br>







<span id="bridgeCrabMessages"><font size="6">bridgeCrabMessages</font></span>
 <br></br>



<font size="5">inboundLanes(arg:U8aFixed):BpMessagesInboundLaneData </font>


 - **interface**:  `api.query.bridgeCrabMessages.inboundLanes`<br></br>


 - **summary**:Map of lane id => inbound lane data.<br></br>


<font size="5">outboundLanes(arg:U8aFixed):BpMessagesInboundLaneData </font>


 - **interface**:  `api.query.bridgeCrabMessages.outboundLanes`<br></br>


 - **summary**:Map of lane id => outbound lane data.<br></br>

<font size="5">outboundMessages(arg:BpMessagesMessageKey):Option&lt;BpMessagesMessageData&gt; </font>


 - **interface**:  `api.query.bridgeCrabMessages.outboundMessages`<br></br>


 - **summary**:All queued outbound messages.<br></br>




<font size="5">palletOperatingMode():BpMessagesOperatingMode </font>
 

 - **interface**:  `api.query.bridgeCrabMessages.palletOperatingMode`<br></br>


 - **summary**:The current operating mode of the pallet.<br></br>


<font size="5">palletOwner():Option&lr;AccountId32&gt; </font>

 - **interface**:  `api.query.bridgeCrabMessages.palletOwner`<br></br>


 - **summary**:Optional pallet owner.<br></br>





<span id="darwiniaHeaderMMR"><font size="6">darwiniaHeaderMMR</font></span>
 <br></br>



<font size="5">migrationStep():u32 </font>


 - **interface**:  `api.query.darwiniaHeaderMMR.migrationStep`<br></br>


 - **summary**:Migration step.<br></br>



<font size="5">mmrSize():u64 </font>
 

 - **interface**:  `api.query.darwiniaHeaderMMR.mmrSize`<br></br>


 - **summary**:Size of the MMR.<br></br>




<font size="5">peaks(arg:u64):Option&lt;H256&gt; </font>
 

 - **interface**:  `api.query.darwiniaHeaderMMR.peaks`<br></br>


 - **summary**:Peaks of the MMR.<br></br>




<span id="feeMarket"><font size="6">feeMarket</font></span>
 <br></br>




<font size="5">assignedRelayers():Option&lt;Vec&lt;PalletFeeMarketRelayer&gt;&gt; </font>
 

 - **interface**:  `api.query.feeMarket.assignedRelayers`<br></br>


 - **summary**: The assigned relayers at this moment, empty if the registered assigned relayers not enough. <br></br>


 <font size="5">assignedRelayersNumber():u32 </font>


 - **interface**:  `api.query.feeMarket.assignedRelayersNumber`<br></br>


 - **summary**: The assigned relayers number. <br></br>



 <font size="5">collateralSlashProtect():Option&lt;u128&gt; </font>


 - **interface**:  `api.query.feeMarket.collateralSlashProtect`<br></br>


 - **summary**: The maximum slash value for assigned relayer. <br></br>



 <font size="5">orders(arg:ITuple&lt;[U8aFixed, u64]&gt;):Option&lt;PalletFeeMarketOrder&gt; </font>
 

 - **interface**:  `api.query.feeMarket.orders`<br></br>


 - **summary**: Order storage, please note that the order storage will be deleted after confirmed.<br></br>



  <font size="5">relayers():Vec&lt;AccountId32&gt; </font>


 - **interface**:  `api.query.feeMarket.relayers`<br></br>


 - **summary**: List of all relayers. <br></br>



 <font size="5">relayersMap(arg:AccountId32):PalletFeeMarketRelayer</font>
 

 - **interface**:  `api.query.feeMarket.relayersMap`<br></br>


 - **summary**: The relayer's detail info. <br></br>




<span id="ktonTreasury"><font size="6">ktonTreasury</font></span>
 <br></br>




 <font size="5">approvals():Vec&lt;u32&gt;</font>
 

 - **interface**:  `api.query.ktonTreasury.approvals`<br></br>


 - **summary**:Proposal indices that have been approved but not yet awarded.<br></br>



 <font size="5">proposalCount():u32</font>


 - **interface**:  `api.query.ktonTreasury.proposalCount`<br></br>


 - **summary**:Number of proposals that have been made.<br></br>



<font size="5">proposals(arg:u32):Option&lt;PalletTreasuryProposal&gt;</font>


 - **interface**:  `api.query.ktonTreasury.proposals`<br></br>


 - **summary**:Proposals that have been made.<br></br>



<span id="phragmenElection"><font size="6">phragmenElection</font></span>
 <br></br>



<font size="5">candidates(arg:u32):Vec&lt;ITuple&lt;[AccountId32, u128]&gt;&gt;</font>
 

 - **interface**:  `api.query.phragmenElection.candidates`<br></br>


 - **summary**:The present candidate list. A current member or runner-up can never enter this vector and is always implicitly assumed to be a candidate.<br></br>



<font size="5">electionRounds():u32</font>


 - **interface**:  `api.query.phragmenElection.electionRounds`<br></br>


 - **summary**:The total number of vote rounds that have happened, excluding the upcoming one.<br></br>



 <font size="5">members():Vec&lt;PalletElectionsPhragmenSeatHolder&gt;</font>


 - **interface**:  `api.query.phragmenElection.members`<br></br>


 - **summary**:The current elected members.<br></br>



 <font size="5">runnersUp():Vec&lt;PalletElectionsPhragmenSeatHolder&gt;</font>
 

 - **interface**:  `api.query.phragmenElection.runnersUp`<br></br>


 - **summary**:The current reserved runners-up.<br></br>


 <font size="5">voting(arg:AccountId32):PalletElectionsPhragmenVoter</font>
 

 - **interface**:  `api.query.phragmenElection.voting`<br></br>


 - **summary**:Votes and locked stake of a particular voter.<br></br>



<span id="kton"><font size="6">kton</font></span>
 <br></br>



 <font size="5">account(arg:AccountId32):DarwiniaCommonRuntimeImplsAccountData</font>


 - **interface**:  `api.query.kton.account`<br></br>


 - **summary**:The balance of an account.<br></br>




 <font size="5">locks(arg:AccountId32):Vec&lt;PalletBalancesBalanceLock&gt;</font>
 

 - **interface**:  `api.query.kton.locks`<br></br>


 - **summary**:Any liquidity locks on some account balances.<br></br>


<font size="5">reserves(arg:AccountId32):Vec&lt;DarwiniaBalancesReserveData&gt;</font>
 

 - **interface**:  `api.query.kton.reserves`<br></br>


 - **summary**:Named reserves on some account balances.<br></br>



 <font size="5">storageVersion():DarwiniaBalancesReleases</font>
 

 - **interface**:  `api.query.kton.storageVersion`<br></br>


 - **summary**:Storage version of the pallet.<br></br>




 <font size="5">totalIssuance():u128</font>


 - **interface**:  `api.query.kton.totalIssuance`<br></br>


 - **summary**:The total units issued in the system.<br></br>





<span id="balances"><font size="6">balances</font></span>
 <br></br>


<font size="5">account(arg: AccountId32 | string | Uint8Array):DarwiniaCommonRuntimeImplsAccountData</font>


 - **interface**:  `api.query.balances.account`<br></br>


 - **summary**:The balance of an account.<br></br>



<font size="5">locks(arg: AccountId32 | string | Uint8Array):Vec&lt;DarwiniaBalancesBalanceLock&gt;</font>


 - **interface**:  `api.query.balances.locks`<br></br>


 - **summary**:Any liquidity locks on some account balances.<br></br>



<font size="5">reserves(arg: AccountId32 | string | Uint8Array):Vec&lt;DarwiniaBalancesReserveData&gt;</font>


 - **interface**:  `api.query.balances.reserves`<br></br>


 - **summary**:Named reserves on some account balances.<br></br>



<font size="5">storageVersion(): DarwiniaBalancesReleases</font>


 - **interface**:  `api.query.balances.storageVersion`<br></br>


 - **summary**:Storage version of the pallet.<br></br>




<font size="5">totalIssuance():u128</font>


 - **interface**:  `api.query.balances.totalIssuance`<br></br>


 - **summary**:The total units issued in the system.<br></br>


<span id="baseFee"><font size="6">baseFee</font></span>
 <br></br>



<font size="5">baseFeePerGas():U256</font>


 - **interface**:  `api.query.baseFee.baseFeePerGas`<br></br>


 - **summary**: <br></br>


 <font size="5">elasticity():Permill</font>


 - **interface**:  `api.query.baseFee.elasticity`<br></br>


 - **summary**: <br></br>



 <font size="5">isActive():bool</font>


 - **interface**:  `api.query.baseFee.isActive`<br></br>


 - **summary**: <br></br>




<span id="ecdsaAuthority"><font size="6">ecdsaAuthority</font></span>
 <br></br>

 <font size="5">authorities():Vec&lt;H160&gt;</font>


 - **interface**:  `api.query.ecdsaAuthority.authorities`<br></br>


 - **summary**: The current active authorities.<br></br>






 <font size="5">authoritiesChangeToSign():Option&lt;ITuple&lt;[DarwiniaEcdsaAuthorityPrimitivesOperation, Option&lt;u32&lt;, U8aFixed, Vec&lt;ITuple&lt;[H160, SpCoreEcdsaSignature]&lt;&lt;]&lt;&lt;</font>


 - **interface**:  `api.query.ecdsaAuthority.authoritiesChangeToSign`<br></br>


 - **summary**: The authorities change waiting for signing.<br></br>



 <font size="5">newMessageRootToSign():Option&lt;ITuple&lt;[DarwiniaEcdsaAuthorityPrimitivesCommitment, U8aFixed, Vec&lt;ITuple&lt;[H160, SpCoreEcdsaSignature]&gt;&gt;]&gt;&gt;</font>


 - **interface**:  `api.query.ecdsaAuthority.newMessageRootToSign`<br></br>


 - **summary**: The new message root waiting for signing.<br></br>




 <font size="5">nextAuthorities():Vec&lt;H160&gt;</font>


 - **interface**:  `api.query.ecdsaAuthority.nextAuthorities`<br></br>


 - **summary**: The incoming authorities.<br></br>




 <font size="5">nonce():u32</font>


 - **interface**:  `api.query.ecdsaAuthority.nonce`<br></br>


 - **summary**: The nonce of the current active authorities. AKA term/session/era.<br></br>



<font size="5">previousMessageRoot():Option&lt;ITuple&lt;[u32, H256]&gt;
&gt;
</font>


 - **interface**:  `api.query.ecdsaAuthority.previousMessageRoot`<br></br>


 - **summary**: Record the previous message root.<br></br>



<span id="ecdsaRelayAuthority"><font size="6">ecdsaRelayAuthority</font></span>
 <br></br>


 <font size="5">authorities():Vec&lt;DarwiniaRelayAuthorityPrimitivesAuthority&gt;
</font>


 - **interface**:  `api.query.ecdsaRelayAuthority.authorities`<br></br>


 - **summary**: Authority must elect from candidates.<br></br>




 <font size="5">authoritiesToSign():Option&lt;ITuple&lt;[U8aFixed, Vec&lt;ITuple&lt;[AccountId32, U8aFixed]&gt;&gt;]&gt;&gt;
</font>


 - **interface**:  `api.query.ecdsaRelayAuthority.authoritiesToSign`<br></br>


 - **summary**: The authorities change requirements.<br></br>




 <font size="5">candidates(): Vec&lt;DarwiniaRelayAuthorityPrimitivesAuthority&gt;

</font>


 - **interface**:  `api.query.ecdsaRelayAuthority.candidates`<br></br>


 - **summary**: Anyone can request to be an authority with some stake.<br></br>



 <font size="5">mmrRootsToSign(arg: u32 | AnyNumber | Uint8Array):  Option&lt;DarwiniaRelayAuthorityPrimitivesMmrRootToSign&gt;

</font>


 - **interface**:  `api.query.ecdsaRelayAuthority.mmrRootsToSign`<br></br>


 - **summary**: All the relay requirements from the backing module here.<br></br>




 <font size="5">mmrRootsToSignKeys(): Vec&lt;u32&gt;</font>

 - **interface**:  `api.query.ecdsaRelayAuthority.mmrRootsToSignKeys`<br></br>


 - **summary**: The `MmrRootsToSign` keys cache.<br></br>




 <font size="5">nextAuthorities(): Option&lt;DarwiniaRelayAuthorityPrimitivesScheduledAuthoritiesChange&gt;</font>

 - **interface**:  `api.query.ecdsaRelayAuthority.nextAuthorities`<br></br>


 - **summary**: The incoming authorities for the next term.<br></br>




 <font size="5">nextTerm():u32</font>

 - **interface**:  `api.query.ecdsaRelayAuthority.nextTerm`<br></br>


 - **summary**: Term index counter, play the same role as nonce in extrinsic.<br></br>



 <font size="5">submitDuration():u32</font>

 - **interface**:  `api.query.ecdsaRelayAuthority.submitDuration`<br></br>


 - **summary**: The mmr root signature submit duration, will be delayed if on authorities change.<br></br>





<span id="ethereum"><font size="6">ethereum</font></span>
 <br></br>



 <font size="5">blockHash(arg: U256 | AnyNumber | Uint8Array):H256</font>

 - **interface**:  `api.query.ethereum.blockHash`<br></br>


 - **summary**:  Mapping for block number and hashes.<br></br>



 <font size="5">currentBlock():Option&lt;EthereumBlock&gt;
</font>

 - **interface**:  `api.query.ethereum.currentBlock`<br></br>


 - **summary**:  The current Ethereum block.<br></br>




<font size="5">currentReceipts():Option&lt;Vec&lt;EthereumReceiptReceiptV3&gt;&gt;
</font>

 - **interface**:  `api.query.ethereum.currentReceipts`<br></br>


 - **summary**:  The current Ethereum receipts.<br></br>




<font size="5">currentTransactionStatuses():Option&lt;Vec&lt;FpRpcTransactionStatus&gt;&gt;
</font>

 - **interface**:  `api.query.ethereum.currentTransactionStatuses`<br></br>


 - **summary**:  The current transaction statuses.<br></br>


<font size="5">pending():Vec&lt;ITuple&lt;[EthereumTransactionTransactionV2, FpRpcTransactionStatus, EthereumReceiptReceiptV3]&gt;&gt;
</font>

 - **interface**:  `api.query.ethereum.pending`<br></br>


 - **summary**:  Current building block's transactions and receipts.<br></br>



<font size="5">remainingKtonBalance(arg: AccountId32 | string | Uint8Array):u128
</font>

 - **interface**:  `api.query.ethereum.remainingKtonBalance`<br></br>


 - **summary**:  Remaining kton balance for dvm account.<br></br>




<font size="5">remainingRingBalance(arg: AccountId32 | string | Uint8Array):u128
</font>

 - **interface**:  `api.query.ethereum.remainingRingBalance`<br></br>


 - **summary**:  Remaining ring balance for dvm account.<br></br>





<span id="ethereumBacking"><font size="6">ethereumBacking</font></span>
 <br></br>



<font size="5">depositRedeemAddress():H160
</font>

 - **interface**:  `api.query.ethereumBacking.depositRedeemAddress`<br></br>


 - **summary**:  <br></br>



<font size="5">ktonTokenAddress():H160
</font>

 - **interface**:  `api.query.ethereumBacking.ktonTokenAddress`<br></br>


 - **summary**:  <br></br>

<font size="5">lockAssetEvents():Event
</font>

 - **interface**:  `api.query.ethereumBacking.lockAssetEvents`<br></br>


 - **summary**:  <br></br>


<font size="5">redeemStatus():bool
</font>

 - **interface**:  `api.query.ethereumBacking.redeemStatus`<br></br>


 - **summary**:  <br></br>



<font size="5">ringTokenAddress():H160
</font>

 - **interface**:  `api.query.ethereumBacking.ringTokenAddress`<br></br>


 - **summary**:  <br></br>



 <font size="5">setAuthoritiesAddress():H160
</font>

 - **interface**:  `api.query.ethereumBacking.setAuthoritiesAddress`<br></br>


 - **summary**:  <br></br>


 <font size="5">tokenRedeemAddress():H160
</font>

 - **interface**:  `api.query.ethereumBacking.tokenRedeemAddress`<br></br>


 - **summary**:  <br></br>



 <font size="5">verifiedProof(arg: ITuple&lt;[H256, u64]&gt;
 | [H256 | string | Uint8Array, u64 | AnyNumber | Uint8Array]):bool
</font>

 - **interface**:  `api.query.ethereumBacking.verifiedProof`<br></br>


 - **summary**:  <br></br>







<span id="ethereumRelay"><font size="6">ethereumRelay</font></span>
 <br></br>





<font size="5">bestConfirmedBlockNumber():u64
</font>

 - **interface**:  `api.query.ethereumRelay.bestConfirmedBlockNumber`<br></br>


 - **summary**:  The highest ethereum block number that record in darwinia.<br></br>



<font size="5">confirmedBlockNumbers():Vec&lt;u64&gt;
</font>

 - **interface**:  `api.query.ethereumRelay.confirmedBlockNumbers`<br></br>


 - **summary**: Confirmed Ethereum block numbers. <br></br>




<font size="5">confirmedDepth():u32
</font>

 - **interface**:  `api.query.ethereumRelay.confirmedDepth`<br></br>


 - **summary**: Confirmed Ethereum block Depth. <br></br>




<font size="5">confirmedHeaderParcels(arg: u64 | AnyNumber | Uint8Array):Option&lt;DarwiniaBridgeEthereumEthereumRelayHeaderParcel&gt;
</font>

 - **interface**:  `api.query.ethereumRelay.confirmedHeaderParcels`<br></br>


 - **summary**: Confirmed ethereum header parcel. <br></br>





<font size="5">dagsMerkleRoots(arg: u64 | AnyNumber | Uint8Array):U8aFixed
</font>

 - **interface**:  `api.query.ethereumRelay.dagsMerkleRoots`<br></br>


 - **summary**: Dags merkle roots of ethereum epoch (each epoch is 30000). <br></br>





<font size="5">pendingRelayHeaderParcels():Vec&lt;ITuple&lt;[u32, DarwiniaBridgeEthereumEthereumRelayHeaderParcel, DpRelayerGameRelayVotingState]&gt;&gt;
</font>

 - **interface**:  `api.query.ethereumRelay.pendingRelayHeaderParcels`<br></br>


 - **summary**:   <br></br>



<font size="5">receiptVerifyFee():u128
</font>

 - **interface**:  `api.query.ethereumRelay.receiptVerifyFee`<br></br>


 - **summary**:   <br></br>




<span id="ethereumRelayerGame"><font size="6">ethereumRelayerGame</font></span>
 <br></br>





<font size="5">affirmations(arg1: u64 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array):Vec&lt;DpRelayerGameRelayAffirmation&gt;

</font>

 - **interface**:  `api.query.ethereumRelayerGame.affirmations`<br></br>


 - **summary**:   All the active games' affirmations here.<br></br>



<font size="5">affirmTime(arg: u64 | AnyNumber | Uint8Array):Option&lt;ITuple&lt;[u32, u32]&gt;&gt;

</font>

 - **interface**:  `api.query.ethereumRelayerGame.affirmTime`<br></br>


 - **summary**:   All the closed games here.<br></br>




<font size="5">bestConfirmedHeaderId(arg: u64 | AnyNumber | Uint8Array):u64

</font>

 - **interface**:  `api.query.ethereumRelayerGame.bestConfirmedHeaderId`<br></br>


 - **summary**:   The best confirmed header id record of a game when it start.<br></br>





<font size="5">gameSamplePoints(arg: u64 | AnyNumber | Uint8Array):Vec&lt;Vec&lt;u64&gt;&gt;

</font>

 - **interface**:  `api.query.ethereumRelayerGame.gameSamplePoints`<br></br>


 - **summary**:    <br></br>



<font size="5">gamesToUpdate(arg: u32 | AnyNumber | Uint8Array):Vec&lt;u64&gt;

</font>

 - **interface**:  `api.query.ethereumRelayerGame.gamesToUpdate`<br></br>


 - **summary**:  All the closed rounds here. <br></br>


<font size="5">relayHeaderParcelToResolve():Vec&lt;u64&gt;

</font>

 - **interface**:  `api.query.ethereumRelayerGame.relayHeaderParcelToResolve`<br></br>


 - **summary**:  Active games' relay header parcel's ids. <br></br>



<font size="5">roundCounts(arg: u64 | AnyNumber | Uint8Array):u32

</font>

 - **interface**:  `api.query.ethereumRelayerGame.roundCounts`<br></br>


 - **summary**:  The total rounds of a game. <br></br>



<font size="5">stakes(arg: AccountId32 | string | Uint8Array):u128

</font>

 - **interface**:  `api.query.ethereumRelayerGame.stakes`<br></br>


 - **summary**:  All the stakes here. <br></br>


<span id="evm"><font size="6">evm</font></span>
 <br></br>

<font size="5">accountCodes(arg: H160 | string | Uint8Array):Bytes

</font>

 - **interface**:  `api.query.evm.accountCodes`<br></br>


 - **summary**:   <br></br>



<font size="5">accountStorages(arg1: H160 | string | Uint8Array, arg2: H256 | string | Uint8Array):H256

</font>

 - **interface**:  `api.query.evm.accountStorages`<br></br>


 - **summary**:   <br></br>



 







<span id="messageGadget"><font size="6">messageGadget</font></span>
 <br></br>


<font size="5">commitmentContract():H160

</font>

 - **interface**:  `api.query.messageGadget.commitmentContract`<br></br>


 - **summary**:   <br></br>







