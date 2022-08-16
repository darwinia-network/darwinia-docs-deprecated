---
sidebar_position: 4
---

# Extrinsic

 

The following sections contain Extrinsics methods are part of the default Darwinia runtime. On the api, these are exposed via api.tx.`<module>`.`<method>`.

(NOTE: These were generated from a static/snapshot view of a recent Darwinia master node. Some items may not be available in older nodes, or in any customized implementations.)




- [<font color="blue" size="5">bridgeCrabGrandpa</font>](#bridgeCrabGrandpa)
- [<font color="blue" size="5">bridgeCrabMessages</font>](#bridgeCrabMessages)
- [<font color="blue" size="5">feeMarket</font>](#feeMarket)
- [<font color="blue" size="5">ktonTreasury</font>](#ktonTreasury)
- [<font color="blue" size="5">phragmenElection</font>](#phragmenElection)
- [<font color="blue" size="5">toCrabBacking</font>](#toCrabBacking)
- [<font color="blue" size="5">kton</font>](#kton)

***


<span id="bridgeCrabGrandpa"><font size="6">bridgeCrabGrandpa</font></span>
 <br></br>
 <br></br>

 <font size="5">initialize(initData:BpHeaderChainInitializationData) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabGrandpa.initialize`<br></br>


 - **summary**: Bootstrap the bridge pallet with an initial header and authority set from which to sync.<br></br>
 
    The initial configuration provided does not need to be the genesis header of the bridged chain, it can be any arbitrary header. You can also provide the next scheduled set change if it is already know.
 



 <font size="5">setOperational(operational:boolean) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabGrandpa.setOperational`<br></br>


 - **summary**: Halt or resume all pallet operations, May only be called either by root, or by `PalletOwner`.<br></br>



 <font size="5">setOwner(newOwner:AccountId32) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabGrandpa.setOwner`<br></br>


 - **summary**: Change `PalletOwner`.<br></br>



<font size="5">submitFinalityProof(finalityTarget:SpRuntimeHeader,justification: BpHeaderChainJustificationGrandpaJustification ) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabGrandpa.submitFinalityProof`<br></br>


 - **summary**: Verify a target header is finalized according to the given finality proof.<br></br>

    It will use the underlying storage pallet to fetch information about the current
    authorities and best finalized header in order to verify that the header is finalized.


<span id="bridgeCrabMessages"><font size="6">bridgeCrabMessages</font></span>
 <br></br>
 <br></br>

<font size="5">increaseMessageFee(laneId:U8aFixed,nonce: u64, additionalFee:u128) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabMessages.increaseMessageFee`<br></br>


 - **summary**: Pay additional fee for the message.<br></br>




 <font size="5">receiveMessagesDeliveryProof(proof:BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof,relayersState: BpMessagesUnrewardedRelayersState) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabMessages.receiveMessagesDeliveryProof`<br></br>


 - **summary**: Receive messages delivery proof from bridged chain.<br></br>



<font size="5">receiveMessagesProof(relayerIdAtBridgedChain:AccountId32,proof: BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof, messagesCount:u32, dispatchWeight:u64) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabMessages.receiveMessagesProof`<br></br>


 - **summary**:  Receive messages proof from bridged chain.<br></br>

    the weight of the call assumes that the transaction always brings outbound lane state update. Because of that, the submitter (relayer) has no benefit of not including this data in the transaction, so reward confirmations lags should be minimal.



<font size="5">sendMessage(laneId:U8aFixed,payload: BpMessageDispatchMessagePayload, messagesCount:u32, deliveryAndDispatchFee:u128) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabMessages.sendMessage`<br></br>


 - **summary**:  Send message over lane.<br></br>



<font size="5">setOperatingMode(operatingMode:BpMessagesOperatingMode) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabMessages.setOperatingMode`<br></br>


 - **summary**: Halt or resume all/some pallet operations.<br></br>


 <font size="5">setOwner(newOwner:AccountId32) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabMessages.setOwner`<br></br>


 - **summary**: Change `PalletOwner`, May only be called either by root, or by `PalletOwner`.<br></br>




 <font size="5">updatePalletParameter(parameter:DarwiniaRuntimeBridgesMessageCrabDarwiniaToCrabMessagesParameter) </font>
 <br></br>

 - **interface**:  `api.tx.bridgeCrabMessages.updatePalletParameter`<br></br>


 - **summary**: Update pallet parameter, May only be called either by root, or by `PalletOwner`.<br></br>






<span id="feeMarket"><font size="6">feeMarket</font></span>
 <br></br>
 <br></br>

  <font size="5">enrollAndLockCollateral(lockCollateral:u128, relayFee:u128) </font>
 <br></br>

 - **interface**:  `api.tx.feeMarket.enrollAndLockCollateral`<br></br>


 - **summary**:Any accounts can enroll to be a relayer by lock collateral. The relay fee is optional.<br></br>

  <font size="5">cancelEnrollment() </font>
 <br></br>

 - **interface**:  `api.tx.feeMarket.cancelEnrollment`<br></br>


 - **summary**: Cancel enrolled relayer.<br></br>


  <font size="5">setAssignedRelayersNumber(number:u32) </font>
 <br></br>

 - **interface**:  `api.tx.feeMarket.setAssignedRelayersNumber`<br></br>


 - **summary**: Set the account of assigned relayers(Only for sudo).<br></br>



 <font size="5">setSlashProtect(slashProtect:u128) </font>
 <br></br>

 - **interface**:  `api.tx.feeMarket.setSlashProtect`<br></br>


 - **summary** Set the maximum allowed slash value for the assigned relayer(Only for sudo).<br></br>


  <font size="5">updateLockedCollateral(newCollateral:u128) </font>
 <br></br>

 - **interface**:  `api.tx.feeMarket.updateLockedCollateral`<br></br>


 - **summary**:Update locked collateral for enrolled relayer, only supporting lock more.<br></br>


 <font size="5">updateRelayFee(newFee:u128) </font>
 <br></br>

 - **interface**:  `api.tx.feeMarket.updateRelayFee`<br></br>


 - **summary**:Update relay fee for enrolled relayer.<br></br>


<span id="ktonTreasury"><font size="6">ktonTreasury</font></span>
 <br></br>
 <br></br>



 <font size="5">approveProposal(proposalId:u32) </font>
 <br></br>

 - **interface**:  `api.tx.ktonTreasury.approveProposal`<br></br>


 - **summary**:Approve a proposal. At a later time, the proposal will be allocated to the beneficiary and the original deposit will be returned.<br></br>



  <font size="5">proposeSpend(value:u128, beneficiary:MultiAddress) </font>
 <br></br>

 - **interface**:  `api.tx.ktonTreasury.proposeSpend`<br></br>


 - **summary**:Put forward a suggestion for spending. A deposit proportional to the value is reserved and slashed if the proposal is rejected. It is returned once the proposal is awarded.<br></br>


   <font size="5">rejectProposal(proposalId:u32) </font>
 <br></br>

 - **interface**:  `api.tx.ktonTreasury.rejectProposal`<br></br>


 - **summary**:Reject a proposed spend. The original deposit will be slashed.<br></br>


<span id="phragmenElection"><font size="6">phragmenElection</font></span>
 <br></br>
 <br></br>


   <font size="5">cleanDefunctVoters(numVoters:u32, numDefunct:u32) </font>
 <br></br>

 - **interface**:  `api.tx.phragmenElection.cleanDefunctVoters`<br></br>


 - **summary**:Clean all voters who are defunct. deposit of the removed voters are returned.<br></br>




   <font size="5">removeMember(who:MultiAddress, hasReplacement:boolean) </font>
 <br></br>

 - **interface**:  `api.tx.phragmenElection.removeMember`<br></br>


 - **summary**:Remove a particular member from the set. This is effective immediately and the bond of the outgoing member is slashed.<br></br>




   <font size="5">removeVoter() </font>
 <br></br>

 - **interface**:  `api.tx.phragmenElection.removeVoter`<br></br>


 - **summary**:Remove `origin` as a voter.<br></br>



   <font size="5">renounceCandidacy(renouncing:PalletElectionsPhragmenRenouncing) </font>
 <br></br>

 - **interface**:  `api.tx.phragmenElection.renounceCandidacy`<br></br>


 - **summary**:Renounce one's intention to be a candidate for the next election round.<br></br>



  <font size="5">submitCandidacy(candidateCount:u32) </font>
 <br></br>

 - **interface**:  `api.tx.phragmenElection.submitCandidacy`<br></br>


 - **summary**:Submit oneself for candidacy. A fixed amount of deposit is recorded.<br></br>



  <font size="5">vote(votes:AccountId32,value:u128) </font>
 <br></br>

 - **interface**:  `api.tx.phragmenElection.vote`<br></br>


 - **summary**:Vote for a set of candidates for the upcoming round of election. This can be called to set the initial votes, or update already existing votes.<br></br>




<span id="toCrabBacking"><font size="6">toCrabBacking</font></span>
 <br></br>
 <br></br>



  <font size="5">lockAndRemoteIssue(specVersion:u32,weight:u64, value:u128, fee:u128,recipient:H160) </font>
 <br></br>

 - **interface**:  `api.tx.toCrabBacking.lockAndRemoteIssue`<br></br>


 - **summary**:Lock token in this chain and cross transfer to the target chain.<br></br>


<font size="5">registerAndRemoteCreate(specVersion:u32,weight:u64, value:u128, fee:u128,recipient:H160) </font>
 <br></br>

 - **interface**:  `api.tx.toCrabBacking.registerAndRemoteCreate`<br></br>


 - **summary**:<br></br>


 <font size="5">setRemoteMappingTokenFactoryAccount(account:AccountId32) </font>
 <br></br>

 - **interface**:  `api.tx.toCrabBacking.setRemoteMappingTokenFactoryAccount`<br></br>


 - **summary**:<br></br>

  <font size="5">setSecureLimitedPeriod(period:u32) </font>
 <br></br>

 - **interface**:  `api.tx.toCrabBacking.setSecureLimitedPeriod`<br></br>


 - **summary**:<br></br>


  <font size="5">setSecurityLimitationRingAmount(limitation:u128) </font>
 <br></br>

 - **interface**:  `api.tx.toCrabBacking.setSecurityLimitationRingAmount`<br></br>


 - **summary**:<br></br>



  <font size="5">unlockFromRemote(tokenAddress:H160,amount:U256, recipient:Bytes ) </font>
 <br></br>

 - **interface**:  `api.tx.toCrabBacking.unlockFromRemote`<br></br>


 - **summary**:Receive target chain locked message and unlock token in this chain.<br></br>





<span id="kton"><font size="6">kton</font></span>
 <br></br>
 <br></br>



  <font size="5">forceTransfer(source:MultiAddress,dest:MultiAddress, value:u128 ) </font>
 <br></br>

 - **interface**:  `api.tx.kton.forceTransfer`<br></br>


 - **summary**:Exactly as `transfer`, except the origin must be root and the source account may be specified.<br></br>




  <font size="5">forceUnreserve(who:MultiAddress, amount:u128 ) </font>
 <br></br>

 - **interface**:  `api.tx.kton.forceUnreserve`<br></br>


 - **summary**:Unreserve some balance from a user by force.<br></br>


   <font size="5">setBalance(who:MultiAddress, newFree:u128, newReserved:u128 ) </font>
 <br></br>

 - **interface**:  `api.tx.kton.setBalance`<br></br>


 - **summary**:Set the balances of a given account.<br></br>



  <font size="5">transfer(dest:MultiAddress, value:u128 ) </font>
 <br></br>

 - **interface**:  `api.tx.kton.transfer`<br></br>


 - **summary**:Transfer some liquid free balance to another account.<br></br>




  <font size="5">transferAll(dest:MultiAddress, keepAlive:boolean ) </font>
 <br></br>

 - **interface**:  `api.tx.kton.transferAll`<br></br>


 - **summary**:Transfer the entire transferable balance from the caller account.<br></br>



 <font size="5">transferKeepAlive(dest:MultiAddress, value:u128 ) </font>
 <br></br>

 - **interface**:  `api.tx.kton.transferKeepAlive`<br></br>


 - **summary**:Same as the [`transfer`] call, but with a check that the transfer will not kill the origin account.<br></br>



































































