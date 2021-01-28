---
id: wiki-bridge-e2d
title: The Ethereum to Darwinia Bridge
sidebar_label: The E2D Bridge
---

The Ethereum->Darwinia one way Bridge is the primary component activated in the second phase of the progressive launch of the Darwinia mainnet.

The ERC20 version of RING and KTON, as well as the RING deposits can be transferred to the Darwinia mainnet through the Ethereum->Darwinia bridge.

The Ethereum->Darwinia Bridge realizes the  cross-chain verification while reducing costs by implementing a Super Light Client on the chain. Super Light Client uses a special MMR data structure, which has been adopted by projects such as Grin and Beam. However, in the case that the counterparty chain does not natively support MMR header, there are many challenges that have not been encountered in the implementation of Super Light Client on the chain. 

Darwinia innovatively solves the challenge by implementing Super Light Client on the chain, introducing a Optimistic Verification Game protocol, and building a set of economically feasible cross-chain transfer bridge solutions to provide a direction for the future heterogeneous cross-chain technology.
