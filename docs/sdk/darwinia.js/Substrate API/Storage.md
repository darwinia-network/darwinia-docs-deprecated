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
- [<font color="blue" size="5">toCrabBacking</font>](#toCrabBacking)
- [<font color="blue" size="5">kton</font>](#kton)



***


<span id="bridgeCrabGrandpa"><font size="6">bridgeCrabGrandpa</font></span>
 <br></br>
 <br></br>



  <font size="5">bestFinalized():H256 </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabGrandpa.bestFinalized`<br></br>


 - **summary**: Hash of the best finalized header.<br></br>


   <font size="5">currentAuthoritySet():BpHeaderChainAuthoritySet </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabGrandpa.currentAuthoritySet`<br></br>


 - **summary**: The current GRANDPA Authority set.<br></br>






   <font size="5">importedHashes(arg:u32):Option &lt;H256&gt; </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabGrandpa.importedHashes`<br></br>


 - **summary**: A ring buffer of imported hashes. Ordered by the insertion time.<br></br>




   <font size="5">importedHashesPointer():u32 </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabGrandpa.importedHashesPointer`<br></br>


 - **summary**: Current ring buffer position.<br></br>


  <font size="5">importedHeaders(arg:H256):Option&lt;SpRuntimeHeader&gt; </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabGrandpa.importedHeaders`<br></br>


 - **summary**: Headers which have been imported into the pallet.<br></br>



 <font size="5">initialHash():H256 </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabGrandpa.initialHash`<br></br>


 - **summary**: Hash of the header used to bootstrap the pallet.<br></br>



 <font size="5">isHalted():bool </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabGrandpa.isHalted`<br></br>


 - **summary**: If true, all pallet transactions are failed immediately.<br></br>


  <font size="5">palletOwner():Option&lt;AccountId32&gt; </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabGrandpa.palletOwner`<br></br>


 - **summary**: Optional pallet owner.<br></br>


  <font size="5">requestCount():u32 </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabGrandpa.requestCount`<br></br>


 - **summary**: The current number of requests which have written to storage.<br></br>







<span id="bridgeCrabMessages"><font size="6">bridgeCrabMessages</font></span>
 <br></br>
 <br></br>




 <font size="5">inboundLanes(arg:U8aFixed):BpMessagesInboundLaneData </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabMessages.inboundLanes`<br></br>


 - **summary**:Map of lane id => inbound lane data.<br></br>



 <font size="5">outboundLanes(arg:U8aFixed):BpMessagesInboundLaneData </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabMessages.outboundLanes`<br></br>


 - **summary**:Map of lane id => outbound lane data.<br></br>


<font size="5">outboundMessages(arg:BpMessagesMessageKey):Option&lt;BpMessagesMessageData&gt; </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabMessages.outboundMessages`<br></br>


 - **summary**:All queued outbound messages.<br></br>




 <font size="5">palletOperatingMode():BpMessagesOperatingMode </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabMessages.palletOperatingMode`<br></br>


 - **summary**:The current operating mode of the pallet.<br></br>


 <font size="5">palletOwner():Option&lr;AccountId32&gt; </font>
 <br></br>

 - **interface**:  `api.query.bridgeCrabMessages.palletOwner`<br></br>


 - **summary**:Optional pallet owner.<br></br>





<span id="darwiniaHeaderMMR"><font size="6">darwiniaHeaderMMR</font></span>
 <br></br>
 <br></br>


<font size="5">migrationStep():u32 </font>
 <br></br>

 - **interface**:  `api.query.darwiniaHeaderMMR.migrationStep`<br></br>


 - **summary**:Migration step.<br></br>



<font size="5">mmrSize():u64 </font>
 <br></br>

 - **interface**:  `api.query.darwiniaHeaderMMR.mmrSize`<br></br>


 - **summary**:Size of the MMR.<br></br>




<font size="5">peaks(arg:u64):Option&lt;H256&gt; </font>
 <br></br>

 - **interface**:  `api.query.darwiniaHeaderMMR.peaks`<br></br>


 - **summary**:Peaks of the MMR.<br></br>




<span id="feeMarket"><font size="6">feeMarket</font></span>
 <br></br>
 <br></br>



<font size="5">assignedRelayers():Option&lt;Vec&lt;PalletFeeMarketRelayer&gt;&gt; </font>
 <br></br>

 - **interface**:  `api.query.feeMarket.assignedRelayers`<br></br>


 - **summary**:<br></br>


 <font size="5">assignedRelayersNumber():u32 </font>
 <br></br>

 - **interface**:  `api.query.feeMarket.assignedRelayersNumber`<br></br>


 - **summary**:<br></br>



 <font size="5">collateralSlashProtect():Option&lt;u128&gt; </font>
 <br></br>

 - **interface**:  `api.query.feeMarket.collateralSlashProtect`<br></br>


 - **summary**:<br></br>



 <font size="5">orders(arg:ITuple&lt;[U8aFixed, u64]&gt;):Option&lt;PalletFeeMarketOrder&gt; </font>
 <br></br>

 - **interface**:  `api.query.feeMarket.orders`<br></br>


 - **summary**:<br></br>



  <font size="5">relayers():Vec&lt;AccountId32&gt; </font>
 <br></br>

 - **interface**:  `api.query.feeMarket.relayers`<br></br>


 - **summary**:<br></br>



  <font size="5">relayersMap(arg:AccountId32):PalletFeeMarketRelayer</font>
 <br></br>

 - **interface**:  `api.query.feeMarket.relayersMap`<br></br>


 - **summary**:<br></br>




<span id="ktonTreasury"><font size="6">ktonTreasury</font></span>
 <br></br>
 <br></br>



 <font size="5">approvals():Vec&lt;u32&gt;</font>
 <br></br>

 - **interface**:  `api.query.ktonTreasury.approvals`<br></br>


 - **summary**:Proposal indices that have been approved but not yet awarded.<br></br>



  <font size="5">proposalCount():u32</font>
 <br></br>

 - **interface**:  `api.query.ktonTreasury.proposalCount`<br></br>


 - **summary**:Number of proposals that have been made.<br></br>



<font size="5">proposals(arg:u32):Option&lt;PalletTreasuryProposal&gt;</font>
 <br></br>

 - **interface**:  `api.query.ktonTreasury.proposals`<br></br>


 - **summary**:Proposals that have been made.<br></br>



<span id="phragmenElection"><font size="6">phragmenElection</font></span>
 <br></br>
 <br></br>


 <font size="5">candidates(arg:u32):Vec&lt;ITuple&lt;[AccountId32, u128]&gt;&gt;</font>
 <br></br>

 - **interface**:  `api.query.phragmenElection.candidates`<br></br>


 - **summary**:The present candidate list. A current member or runner-up can never enter this vector and is always implicitly assumed to be a candidate.<br></br>



 <font size="5">electionRounds():u32</font>
 <br></br>

 - **interface**:  `api.query.phragmenElection.electionRounds`<br></br>


 - **summary**:The total number of vote rounds that have happened, excluding the upcoming one.<br></br>



  <font size="5">members():Vec&lt;PalletElectionsPhragmenSeatHolder&gt;</font>
 <br></br>

 - **interface**:  `api.query.phragmenElection.members`<br></br>


 - **summary**:The current elected members.<br></br>



   <font size="5">runnersUp():Vec&lt;PalletElectionsPhragmenSeatHolder&gt;</font>
 <br></br>

 - **interface**:  `api.query.phragmenElection.runnersUp`<br></br>


 - **summary**:The current reserved runners-up.<br></br>


  <font size="5">voting(arg:AccountId32):PalletElectionsPhragmenVoter</font>
 <br></br>

 - **interface**:  `api.query.phragmenElection.voting`<br></br>


 - **summary**:Votes and locked stake of a particular voter.<br></br>




<span id="toCrabBacking"><font size="6">toCrabBacking</font></span>
 <br></br>
 <br></br>


<font size="5">remoteMappingTokenFactoryAccount(arg:AccountId32):AccountId32</font>
 <br></br>

 - **interface**:  `api.query.toCrabBacking.remoteMappingTokenFactoryAccount`<br></br>


 - **summary**:The remote mapping token factory account, here use to ensure the remote caller.<br></br>



 <font size="5">secureLimitedPeriod():u32</font>
 <br></br>

 - **interface**:  `api.query.toCrabBacking.secureLimitedPeriod`<br></br>


 - **summary**:Period between security limitation. Zero means there is no period limitation.<br></br>



 <font size="5">secureLimitedRingAmount():ITuple&lt;[u128, u128]&gt;</font>
 <br></br>

 - **interface**:  `api.query.toCrabBacking.secureLimitedRingAmount`<br></br>


 - **summary**:`(Spent, Maximum)` amount of *RING* security limitation each [`LimitedPeriod`].<br></br>



  <font size="5">transactionInfos(arg:ITuple&lt;[U8aFixed, u64]&gt;):Option&lt;ITuple&lt;[AccountId32, u128]&gt;&gt;</font>
 <br></br>

 - **interface**:  `api.query.toCrabBacking.transactionInfos`<br></br>


 - **summary**:`(sender, amount)` the user *sender* lock and remote issuing amount of asset.<br></br>





<span id="kton"><font size="6">kton</font></span>
 <br></br>
 <br></br>


   <font size="5">account(arg:AccountId32):DarwiniaCommonRuntimeImplsAccountData</font>
 <br></br>

 - **interface**:  `api.query.kton.account`<br></br>


 - **summary**:The balance of an account.<br></br>




   <font size="5">locks(arg:AccountId32):Vec&lt;PalletBalancesBalanceLock&gt;</font>
 <br></br>

 - **interface**:  `api.query.kton.locks`<br></br>


 - **summary**:Any liquidity locks on some account balances.<br></br>


 <font size="5">reserves(arg:AccountId32):Vec&lt;DarwiniaBalancesReserveData&gt;</font>
 <br></br>

 - **interface**:  `api.query.kton.reserves`<br></br>


 - **summary**:Named reserves on some account balances.<br></br>



  <font size="5">storageVersion():DarwiniaBalancesReleases</font>
 <br></br>

 - **interface**:  `api.query.kton.storageVersion`<br></br>


 - **summary**:Storage version of the pallet.<br></br>




 <font size="5">totalIssuance():u128</font>
 <br></br>

 - **interface**:  `api.query.kton.totalIssuance`<br></br>


 - **summary**:The total units issued in the system.<br></br>




























 














