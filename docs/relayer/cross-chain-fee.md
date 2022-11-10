---
sidebar_position: 1
---

# Cross-chain Fee

## Fee Structure

Users of cross-chain Dapps need to pay cross-chain fee when sending a cross-chain message. The fees include three parts.

1. The cost of executing the transaction of the source chain. This part is currently about 20w gas; 
2. The fee paid to the Treasury. 
3. The fee paid to the relayers. The user don't need to pay the transaction execution fee on the target chain which is paid by relayer.

When a Dapp user uses the cross-chain functions, the user needs to pay fees to the Darwinia Treasury and relayers, and this part of the fees is determined by the Fee Market.

The fees is payed with the source chain assets. The transaction fee of the target chain is paid by the relayer.

## Fee Market

Fees paid to the Treasury and relayers are not set in stone. Anyone can become a relayer of `Darwinia Cross-Chain Messaging Service`, and they quote through their respective quotation strategies, and the quotations of all relayers form a fee market.

Each time the cross-chain starts, the user's cross-chain fees will be prepaid, and after the cross-chain is successful, these fees will be allocated to the Treasury and relayers according to some rules. If you want to know more details of the rules, please check [this article](https://medium.com/darwinianetwork/what-can-a-cross-chain-message-relayer-get-ffb683b689cb).

## Fee Estimation

Dapp developers can estimate fees through the App SDK.

 ```javascript
 api.derive.feeMarket.marketFee((fee) => {
   console.log(`the current market fee is ${fee}`);
 });
 ```

