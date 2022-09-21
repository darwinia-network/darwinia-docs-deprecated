---
sidebar_position: 4
---

# Extrinsic

 

The following sections contain Extrinsics methods which are part of the default Darwinia runtime. On the api, these are exposed via api.tx.`<module>`.`<method>`.

(NOTE: These were generated from a static/snapshot view of a recent Darwinia master node. Some items may not be available in older nodes, or in any customized implementations.)




- [<font color="blue" size="5">bridgeCrabGrandpa</font>](#bridgeCrabGrandpa)
- [<font color="blue" size="5">bridgeCrabMessages</font>](#bridgeCrabMessages)
- [<font color="blue" size="5">feeMarket</font>](#feeMarket)
- [<font color="blue" size="5">ktonTreasury</font>](#ktonTreasury)
- [<font color="blue" size="5">phragmenElection</font>](#phragmenElection)
- [<font color="blue" size="5">kton</font>](#kton)
- [<font color="blue" size="5">baseFee</font>](#baseFee)
- [<font color="blue" size="5">ecdsaAuthority</font>](#ecdsaAuthority)
- [<font color="blue" size="5">ecdsaRelayAuthority</font>](#ecdsaRelayAuthority)
- [<font color="blue" size="5">ethereum</font>](#ethereum)
- [<font color="blue" size="5">ethereumBacking</font>](#ethereumBacking)
- [<font color="blue" size="5">ethereumRelay</font>](#ethereumRelay)
- [<font color="blue" size="5">evm</font>](#evm)


***


<span id="bridgeCrabGrandpa"><font size="6">bridgeCrabGrandpa</font></span>
 <br></br>
  

 <font size="5">initialize(initData:BpHeaderChainInitializationData) </font>
 

 - **interface**:  `api.tx.bridgeCrabGrandpa.initialize`<br></br>


 - **summary**: Bootstrap the bridge pallet with an initial header and authority set from which to sync.<br></br>
 
    The initial configuration provided does not need to be the genesis header of the bridged chain, it can be any arbitrary header. You can also provide the next scheduled set change if it is already know.
 



 <font size="5">setOperational(operational:boolean) </font>
 

 - **interface**:  `api.tx.bridgeCrabGrandpa.setOperational`<br></br>


 - **summary**: Halt or resume all pallet operations, May only be called either by root, or by `PalletOwner`.<br></br>



 <font size="5">setOwner(newOwner:AccountId32) </font>
 

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
 

<font size="5">increaseMessageFee(laneId:U8aFixed,nonce: u64, additionalFee:u128) </font>
 

 - **interface**:  `api.tx.bridgeCrabMessages.increaseMessageFee`<br></br>


 - **summary**: Pay additional fee for the message.<br></br>




 <font size="5">receiveMessagesDeliveryProof(proof:BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof,relayersState: BpMessagesUnrewardedRelayersState) </font>
 

 - **interface**:  `api.tx.bridgeCrabMessages.receiveMessagesDeliveryProof`<br></br>


 - **summary**: Receive messages delivery proof from bridged chain.<br></br>



<font size="5">receiveMessagesProof(relayerIdAtBridgedChain:AccountId32,proof: BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof, messagesCount:u32, dispatchWeight:u64) </font>
 

 - **interface**:  `api.tx.bridgeCrabMessages.receiveMessagesProof`<br></br>


 - **summary**:  Receive messages proof from bridged chain.<br></br>

    the weight of the call assumes that the transaction always brings outbound lane state update. Because of that, the submitter (relayer) has no benefit of not including this data in the transaction, so reward confirmations lags should be minimal.



<font size="5">sendMessage(laneId:U8aFixed,payload: BpMessageDispatchMessagePayload, messagesCount:u32, deliveryAndDispatchFee:u128) </font>
  

 - **interface**:  `api.tx.bridgeCrabMessages.sendMessage`<br></br>


 - **summary**:  Send message over lane.<br></br>



<font size="5">setOperatingMode(operatingMode:BpMessagesOperatingMode) </font>
  

 - **interface**:  `api.tx.bridgeCrabMessages.setOperatingMode`<br></br>


 - **summary**: Halt or resume all/some pallet operations.<br></br>


 <font size="5">setOwner(newOwner:AccountId32) </font>
 

 - **interface**:  `api.tx.bridgeCrabMessages.setOwner`<br></br>


 - **summary**: Change `PalletOwner`, May only be called either by root, or by `PalletOwner`.<br></br>




 <font size="5">updatePalletParameter(parameter:DarwiniaRuntimeBridgesMessageCrabDarwiniaToCrabMessagesParameter) </font>
 

 - **interface**:  `api.tx.bridgeCrabMessages.updatePalletParameter`<br></br>


 - **summary**: Update pallet parameter, May only be called either by root, or by `PalletOwner`.<br></br>






<span id="feeMarket"><font size="6">feeMarket</font></span>
 <br></br>
 

  <font size="5">enrollAndLockCollateral(lockCollateral:u128, relayFee:u128) </font>
 

 - **interface**:  `api.tx.feeMarket.enrollAndLockCollateral`<br></br>


 - **summary**:Any accounts can enroll to be a relayer by lock collateral. The relay fee is optional.<br></br>

  <font size="5">cancelEnrollment() </font>
  

 - **interface**:  `api.tx.feeMarket.cancelEnrollment`<br></br>


 - **summary**: Cancel enrolled relayer.<br></br>


  <font size="5">setAssignedRelayersNumber(number:u32) </font>
 

 - **interface**:  `api.tx.feeMarket.setAssignedRelayersNumber`<br></br>


 - **summary**: Set the account of assigned relayers(Only for sudo).<br></br>



 <font size="5">setSlashProtect(slashProtect:u128) </font>
 

 - **interface**:  `api.tx.feeMarket.setSlashProtect`<br></br>


 - **summary** Set the maximum allowed slash value for the assigned relayer(Only for sudo).<br></br>


  <font size="5">updateLockedCollateral(newCollateral:u128) </font>
 

 - **interface**:  `api.tx.feeMarket.updateLockedCollateral`<br></br>


 - **summary**:Update locked collateral for enrolled relayer, only supporting lock more.<br></br>


 <font size="5">updateRelayFee(newFee:u128) </font>
 

 - **interface**:  `api.tx.feeMarket.updateRelayFee`<br></br>


 - **summary**:Update relay fee for enrolled relayer.<br></br>


<span id="ktonTreasury"><font size="6">ktonTreasury</font></span>
 <br></br>
 



 <font size="5">approveProposal(proposalId:u32) </font>
 

 - **interface**:  `api.tx.ktonTreasury.approveProposal`<br></br>


 - **summary**:Approve a proposal. At a later time, the proposal will be allocated to the beneficiary and the original deposit will be returned.<br></br>



  <font size="5">proposeSpend(value:u128, beneficiary:MultiAddress) </font>
 

 - **interface**:  `api.tx.ktonTreasury.proposeSpend`<br></br>


 - **summary**:Put forward a suggestion for spending. A deposit proportional to the value is reserved and slashed if the proposal is rejected. It is returned once the proposal is awarded.<br></br>


<font size="5">rejectProposal(proposalId:u32) </font>
 

 - **interface**:  `api.tx.ktonTreasury.rejectProposal`<br></br>


 - **summary**:Reject a proposed spend. The original deposit will be slashed.<br></br>


<span id="phragmenElection"><font size="6">phragmenElection</font></span>
 <br></br>
 


   <font size="5">cleanDefunctVoters(numVoters:u32, numDefunct:u32) </font>


 - **interface**:  `api.tx.phragmenElection.cleanDefunctVoters`<br></br>


 - **summary**:Clean all voters who are defunct. deposit of the removed voters are returned.<br></br>




 <font size="5">removeMember(who:MultiAddress, hasReplacement:boolean) </font>


 - **interface**:  `api.tx.phragmenElection.removeMember`<br></br>


 - **summary**:Remove a particular member from the set. This is effective immediately and the bond of the outgoing member is slashed.<br></br>



<font size="5">removeVoter() </font>


 - **interface**:  `api.tx.phragmenElection.removeVoter`<br></br>


 - **summary**:Remove `origin` as a voter.<br></br>


<font size="5">renounceCandidacy(renouncing:PalletElectionsPhragmenRenouncing) </font>


 - **interface**:  `api.tx.phragmenElection.renounceCandidacy`<br></br>


 - **summary**:Renounce one's intention to be a candidate for the next election round.<br></br>

<font size="5">submitCandidacy(candidateCount:u32) </font>
 <br></br>

 - **interface**:  `api.tx.phragmenElection.submitCandidacy`<br></br>


 - **summary**:Submit oneself for candidacy. A fixed amount of deposit is recorded.<br></br>



<font size="5">vote(votes:AccountId32,value:u128) </font>

 - **interface**:  `api.tx.phragmenElection.vote`<br></br>


 - **summary**:Vote for a set of candidates for the upcoming round of election. This can be called to set the initial votes, or update already existing votes.<br></br>



<span id="kton"><font size="6">kton</font></span>
 <br></br>


<font size="5">forceTransfer(source:MultiAddress,dest:MultiAddress, value:u128 ) </font>


 - **interface**:  `api.tx.kton.forceTransfer`<br></br>


 - **summary**:Exactly as `transfer`, except the origin must be root and the source account may be specified.<br></br>




 <font size="5">forceUnreserve(who:MultiAddress, amount:u128 ) </font>


 - **interface**:  `api.tx.kton.forceUnreserve`<br></br>


 - **summary**:Unreserve some balance from a user by force.<br></br>


<font size="5">setBalance(who:MultiAddress, newFree:u128, newReserved:u128 ) </font>
 

 - **interface**:  `api.tx.kton.setBalance`<br></br>


 - **summary**:Set the balances of a given account.<br></br>



<font size="5">transfer(dest:MultiAddress, value:u128 ) </font>
 

 - **interface**:  `api.tx.kton.transfer`<br></br>


 - **summary**:Transfer some liquid free balance to another account.<br></br>




<font size="5">transferAll(dest:MultiAddress, keepAlive:boolean ) </font>


 - **interface**:  `api.tx.kton.transferAll`<br></br>


 - **summary**:Transfer the entire transferable balance from the caller account.<br></br>



 <font size="5">transferKeepAlive(dest:MultiAddress, value:u128 ) </font>


 - **interface**:  `api.tx.kton.transferKeepAlive`<br></br>


 - **summary**:Same as the [`transfer`] call, but with a check that the transfer will not kill the origin account.<br></br>


<span id="baseFee"><font size="6">baseFee</font></span>
 <br></br>

 <font size="5">setBaseFeePerGas(fee:U256) </font>


 - **interface**:  `api.tx.baseFee.setBaseFeePerGas`<br></br>


 - **summary**  <br></br>


 <font size="5">setElasticity(elasticity: Permill | AnyNumber | Uint8Array) </font>


 - **interface**:  `api.tx.baseFee.setElasticity`<br></br>


 - **summary**  <br></br>



 <font size="5">setIsActive(isActive: bool | boolean | Uint8Array) </font>


 - **interface**:  `api.tx.baseFee.setIsActive`<br></br>


 - **summary**  <br></br>




<span id="ecdsaAuthority"><font size="6">ecdsaAuthority</font></span>
 <br></br>

 <font size="5">addAuthority(updated: H160 | string | Uint8Array) </font>


 - **interface**:  `api.tx.ecdsaAuthority.addAuthority`<br></br>


 - **summary**  Add a authority and trigger `on_authorities_change`.<br></br>


 <font size="5">removeAuthority(old: H160 | string | Uint8Array) </font>


 - **interface**:  `api.tx.ecdsaAuthority.removeAuthority`<br></br>


 - **summary**  Remove a authority and trigger `on_authorities_change`.<br></br>


 <font size="5">submitAuthoritiesChangeSignature(address: H160 | string | Uint8Array, signature: SpCoreEcdsaSignature | string | Uint8Array) </font>


 - **interface**:  `api.tx.ecdsaAuthority.submitAuthoritiesChangeSignature`<br></br>


 - **summary**  Submit the authorities change signature.<br></br>



 <font size="5">submitNewMessageRootSignature(address: H160 | string | Uint8Array, signature: SpCoreEcdsaSignature | string | Uint8Array) </font>


 - **interface**:  `api.tx.ecdsaAuthority.submitNewMessageRootSignature`<br></br>


 - **summary** Submit the new message root signature.<br></br>



 <font size="5">swapAuthority(old: H160 | string | Uint8Array, updated: H160 | string | Uint8Array) </font>


 - **interface**:  `api.tx.ecdsaAuthority.swapAuthority`<br></br>


 - **summary** Swap the old authority with the new authority and trigger `on_authorities_change`.<br></br>




<span id="ecdsaRelayAuthority"><font size="6">ecdsaRelayAuthority</font></span>
 <br></br>


 
<font size="5">addAuthorities(accountIds: Vec&lt;AccountId32&gt;
) </font>


 - **interface**:  `api.tx.ecdsaRelayAuthority.addAuthorities`<br></br>


 - **summary**  Add an authority from the candidates.<br></br>



<font size="5">cancelRequest() </font>


 - **interface**:  `api.tx.ecdsaRelayAuthority.cancelRequest`<br></br>


 - **summary**  Cancel the request to be an authority.<br></br>


<font size="5">forceNewTerm() </font>


 - **interface**:  `api.tx.ecdsaRelayAuthority.forceNewTerm`<br></br>


 - **summary** <br></br>


 <font size="5">killAuthorities() </font>


 - **interface**:  `api.tx.ecdsaRelayAuthority.killAuthorities`<br></br>


 - **summary** Remove all the authority.<br></br>



 <font size="5">killCandidates() </font>


 - **interface**:  `api.tx.ecdsaRelayAuthority.killCandidates`<br></br>


 - **summary** Remove all the candidates.<br></br>




 <font size="5">removeAuthorities(accountIds: Vec&lt;AccountId32&gt;
) </font>


 - **interface**:  `api.tx.ecdsaRelayAuthority.removeAuthorities`<br></br>


 - **summary** Remove the given authorities.<br></br>



<font size="5">renounceAuthority() </font>


 - **interface**:  `api.tx.ecdsaRelayAuthority.renounceAuthority`<br></br>


 - **summary** Renounce the authority of the account.<br></br>


<font size="5">requestAuthority(stake: u128 | AnyNumber | Uint8Array, signer: U8aFixed | string | Uint8Array) </font>


 - **interface**:  `api.tx.ecdsaRelayAuthority.requestAuthority`<br></br>


 - **summary** Request to be an authority.<br></br>



<font size="5">submitSignedAuthorities(signature: U8aFixed | string | Uint8Array) </font>


 - **interface**:  `api.tx.ecdsaRelayAuthority.submitSignedAuthorities`<br></br>


 - **summary** Require authority origin.<br></br>




<font size="5">submitSignedMmrRoot(blockNumber: u32 | AnyNumber | Uint8Array, signature: U8aFixed | string | Uint8Array) </font>


 - **interface**:  `api.tx.ecdsaRelayAuthority.submitSignedMmrRoot`<br></br>


 - **summary** <br></br>


 
 <span id="ethereum"><font size="6">ethereum</font></span>
 <br></br>


<font size="5">messageTransact(transaction: EthereumTransactionTransactionV2  | string | Uint8Array) </font>


 - **interface**:  `api.tx.ethereum.messageTransact`<br></br>


 - **summary** This is message transact only for substrate to substrate LCMP to call.<br></br>



<font size="5">rootTransact(target: H160 | string | Uint8Array, input: Bytes | string | Uint8Array) </font>


 - **interface**:  `api.tx.ethereum.rootTransact`<br></br>


 - **summary** Internal transaction only for root.<br></br>



<font size="5">transact(transaction: EthereumTransactionTransactionV2  | string | Uint8Array) </font>


 - **interface**:  `api.tx.ethereum.transact`<br></br>


 - **summary** This the endpoint of RPC Ethereum transaction, consistent with frontier.<br></br>





 <span id="ethereumBacking"><font size="6">ethereumBacking</font></span>
 <br></br>


<font size="5">lock(ringToLock: Compact&lt;u128&gt; | AnyNumber | Uint8Array, ktonToLock: Compact&lt;u128&gt; | AnyNumber | Uint8Array, ethereumAccount: H160 | string | Uint8Array) </font>


 - **interface**:  `api.tx.ethereumBacking.lock`<br></br>


 - **summary** Lock some balances into the module account.<br></br>



<font size="5">redeem(act: ToEthereumBackingRedeemFor) </font>


 - **interface**:  `api.tx.ethereumBacking.redeem`<br></br>


 - **summary** Redeem balances.<br></br>



<font size="5">setDepositRedeemAddress(updated: H160 | string | Uint8Array) </font>


 - **interface**:  `api.tx.ethereumBacking.setDepositRedeemAddress`<br></br>


 - **summary** Set a new deposit redeem address.<br></br>

<font size="5">setKtonTokenAddress(updated: H160 | string | Uint8Array) </font>


 - **interface**:  `api.tx.ethereumBacking.setKtonTokenAddress`<br></br>


 - **summary** Set a new deposit Kton Token address.<br></br>


<font size="5">setRedeemStatus(status: bool | boolean | Uint8Array) </font>


 - **interface**:  `api.tx.ethereumBacking.setRedeemStatus`<br></br>


 - **summary** Set  redeem  status.<br></br>



<font size="5">setRingTokenAddress(updated: H160 | string | Uint8Array) </font>


 - **interface**:  `api.tx.ethereumBacking.setRingTokenAddress`<br></br>


 - **summary** Set a new deposit Ring Token address.<br></br>



<font size="5">setSetAuthoritiesAddress(updated: H160 | string | Uint8Array) </font>


 - **interface**:  `api.tx.ethereumBacking.setSetAuthoritiesAddress`<br></br>


 - **summary** Set a new authorities address.<br></br>




<font size="5">setTokenRedeemAddress(updated: H160 | string | Uint8Array) </font>


 - **interface**:  `api.tx.ethereumBacking.setTokenRedeemAddress`<br></br>


 - **summary** Set a new token redeem address.<br></br>



<font size="5">syncAuthoritiesChange(proof: ITuple&lt;[EthereumPrimitivesHeader, EthereumPrimitivesReceiptReceiptProof, DarwiniaBridgeEthereumMmrProof]&gt;) </font>


 - **interface**:  `api.tx.ethereumBacking.syncAuthoritiesChange`<br></br>


 - **summary** Set a new token redeem address.<br></br>



<span id="ethereumRelay"><font size="6">ethereumRelay</font></span>
 <br></br>


<font size="5">affirm(ethereumRelayHeaderParcel: DarwiniaBridgeEthereumEthereumRelayHeaderParcel) </font>


 - **interface**:  `api.tx.ethereumRelay.affirm`<br></br>


 - **summary**  <br></br>


 <font size="5">checkReceipt(ethereumProofRecord: EthereumPrimitivesReceiptReceiptProof) </font>


 - **interface**:  `api.tx.ethereumRelay.checkReceipt`<br></br>


 - **summary**  Check and verify the receipt<br></br>


 <font size="5">cleanConfirmedParcels() </font>


 - **interface**:  `api.tx.ethereumRelay.cleanConfirmedParcels`<br></br>


 - **summary**   <br></br>


 <font size="5">completeRelayProofs(affirmationId: DpRelayerGameRelayAffirmationId) </font>


 - **interface**:  `api.tx.ethereumRelay.completeRelayProofs`<br></br>


 - **summary**   <br></br>


 <font size="5">disputeAndAffirm(ethereumRelayHeaderParcel: DarwiniaBridgeEthereumEthereumRelayHeaderParcel) </font>


 - **interface**:  `api.tx.ethereumRelay.disputeAndAffirm`<br></br>


 - **summary**   <br></br>



 <font size="5">extendAffirmation(extendedEthereumRelayAffirmationId: DpRelayerGameRelayAffirmationId) </font>


 - **interface**:  `api.tx.ethereumRelay.extendAffirmation`<br></br>


 - **summary**   <br></br>


 <font size="5">removeConfirmedParcelOf(confirmedBlockNumber: u64 | AnyNumber | Uint8Array) </font>


 - **interface**:  `api.tx.ethereumRelay.removeConfirmedParcelOf`<br></br>


 - **summary**   Remove the specific malicous confirmed parcel<br></br>



<font size="5">setConfirmedParcel(ethereumRelayHeaderParcel: DarwiniaBridgeEthereumEthereumRelayHeaderParcel) </font>


 - **interface**:  `api.tx.ethereumRelay.setConfirmedParcel`<br></br>


 - **summary**  <br></br>



<font size="5">setReceiptVerifyFee(updated: Compact&lt;u128&gt; | AnyNumber | Uint8Array) </font>


 - **interface**:  `api.tx.ethereumRelay.setReceiptVerifyFee`<br></br>


 - **summary**  <br></br>


 <font size="5">votePendingRelayHeaderParcel(ethereumBlockNumber: u64 | AnyNumber | Uint8Array, aye: bool | boolean | Uint8Array) </font>


 - **interface**:  `api.tx.ethereumRelay.votePendingRelayHeaderParcel`<br></br>


 - **summary**  <br></br>



<span id="evm"><font size="6">evm</font></span>
 <br></br>

 <font size="5">call(source: H160 | string | Uint8Array, target: H160 | string | Uint8Array, input: Bytes | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option&lt;U256&gt; | null | Uint8Array | U256 | AnyNumber, nonce: Option&lt;U256&gt; | null | Uint8Array | U256 | AnyNumber, accessList: Vec&lt;ITuple&lt;[H160, Vec&lt;H256&gt;]&gt;&gt; | ([H160 | string | Uint8Array, Vec&lt;H256&gt; | (H256 | string | Uint8Array)[]])[]) </font>


 - **interface**:  `api.tx.evm.call`<br></br>


 - **summary**  Issue an EVM call operation. This is similar to a message call transaction in Ethereum.<br></br> 




 <font size="5">create(source: H160 | string | Uint8Array, init: Bytes | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option&lt;U256&gt; | null | Uint8Array | U256 | AnyNumber, nonce: Option&lt;U256&gt; | null | Uint8Array | U256 | AnyNumber, accessList: Vec&lt;ITuple&lt;[H160, Vec&lt;H256&gt;]&gt;&gt; | ([H160 | string | Uint8Array, Vec&lt;H256&gt; | (H256 | string | Uint8Array)[]])[]) </font>


 - **interface**:  `api.tx.evm.create`<br></br>


 - **summary**    Issue an EVM create operation. This is similar to a contract creation transaction in Ethereum.<br></br> 



 <font size="5">create2(source: H160 | string | Uint8Array, init: Bytes | string | Uint8Array, salt: H256 | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option&lt;U256&gt; | null | Uint8Array | U256 | AnyNumber, nonce: Option&lt;U256&gt; | null | Uint8Array | U256 | AnyNumber, accessList: Vec&lt;ITuple&lt;[H160, Vec&lt;H256&gt;]&gt;&gt; | ([H160 | string | Uint8Array, Vec&lt;H256&gt; | (H256 | string | Uint8Array)[]])[]) </font>


 - **interface**:  `api.tx.evm.create2`<br></br>


 - **summary**    Issue an EVM create2 operation.<br></br> 













































