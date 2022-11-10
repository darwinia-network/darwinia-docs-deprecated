---
sidebar_position: 2
---

# Fee Market

Darwinia Fee Market System is a market-based cross-chain infrastructure that provides financial incentives for cross-chain message deliverers(relayers). Through the profitability mechanism, promoting relayers actively participate in and deliver messages efficiently, which will make the cross-chain transaction system more robust and sustainable.

The calculation of fees for cross-chain messages usually requires the consideration of the token value exchange ratio between the source and target chains on the blockchain, which is what Oracle is used to do. Unlike Oracle, the fee market mechanism does not require the chain to be aware of the token value exchange ratio between the source and target chains in real time, but relies on the relayers‘ quotes to generate the final cross-chain fee. 

The relayer is the third off-chain role of the message carrier, responsible for delivering messages between the source and target chains. Before delivering a message, the relayer calculates its own costs and expected profits by combining the transaction fees of the source and target chains and finally submits its own quote to the fee market. When the fee market has received enough quotes, it selects a suitable quote as the cross-chain fee at that moment according to the pre-defined rules.
