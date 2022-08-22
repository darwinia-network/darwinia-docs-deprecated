---
sidebar_position: 4
---

# Dispatch Remote Substrate Call

This guide helps you to build a small Dapp that will dispatch Pangolin's `remark_with_event` remotely from Pangoro Smart Chain.

`remark_with_event` is a dispatchable call of the target Substrate based blockchain. A dispatchable call is a public function that can be executed at runtime via a JSON RPC call. More info about [Substrate](https://substrate.io/) and the [dispatchable calls](https://docs.substrate.io/reference/glossary/#dispatch).

Pangoro Smart Chain is the testnet of Darwinia Smart Chain. [Pangolin](https://docs.crab.network/evm-compatible-crab-smart-chain/get-started/darwinia-pangolin) is the testnet of Crab Chain. 

## Create a hardhat empty project

Follow the [intructions](https://hardhat.org/hardhat-runner/docs/getting-started) to create an empty hardhat project.

In this example, we have named the project `demo`.

## Install deps

```bash
npm install --save-dev @darwinia/contracts-periphery @darwinia/contracts-utils
```

## Prepare cross-chain endpoint

In this example we need one endpoint. Download it to your contracts folder.

```bash
cd contracts
wget https://raw.githubusercontent.com/darwinia-network/darwinia-s2s-template/main/contracts/PangoroToPangolinEndpoint.sol
```

Deploy it on the Pangoro Smart Chain. The `remoteDispatch` function will be used in the next step.

## Create the Dapp contract

In your contracts folder, create a file `RemarkDemo.sol`.

```javascript
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "./PangoroToPangolinEndpoint.sol";
import "@darwinia/contracts-periphery/contracts/s2s/types/PalletSystem.sol";

contract RemarkDemo {
    address public endpoint;

    constructor(address _endpoint) {
        endpoint = _endpoint;
    }

    function remoteRemark(bytes memory _remark)
        external
        payable
        returns (uint256)
    {
        // 1. Prepare the call and its weight which will be executed on the target chain
        PalletSystem.RemarkCall memory call = PalletSystem.RemarkCall(
            hex"0009",
            _remark
        );
        bytes memory encodedCall = PalletSystem.encodeRemarkCall(call);
        uint64 weight = uint64(_remark.length * 2_000);

        // 2. Dispatch the call
        uint256 messageId = PangoroToPangolinEndpoint(endpoint).remoteDispatch{
            value: msg.value
        }(
            28140, // latest spec version of pangolin
            encodedCall,
            weight
        );

        return messageId;
    }
}
```

Make sure that the latest spec version of pangolin is correct. You can get it from https://pangolin.subscan.io/runtime.

Deploy the Dapp contract on the Pangoro Smart Chain. Inject the endpoint address from previous step into the Dapp contract during its initialization.

## Run

1. You can get a estimated market fee by calling the [`fee`](../api-reference#fee) function of the endpoint contract.
2. Call the `remoteRemark(_remark)`.

   * The param `_remark` is the content you want to remark.  
   * The value input should be set to a market fee >= the estimated market fee. 
