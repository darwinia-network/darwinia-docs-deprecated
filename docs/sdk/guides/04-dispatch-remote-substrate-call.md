---
sidebar_position: 4
---

# Dispatch Remote Substrate Call

This guide helps you to build a small Dapp that will dispatch Pangolin's `remark_with_event` remotely from Pangoro.

`remark_with_event` is a dispatchable call of the target Substrate based blockchain. A dispatchable call is a public function that can be executed at runtime via a JSON RPC call. More info about [Substrate](https://substrate.io/) and the [dispatchable calls](https://docs.substrate.io/reference/glossary/#dispatch).

Pangoro is the canary network of Darwinia Network. [Pangolin](https://docs.crab.network/evm-compatible-crab-smart-chain/get-started/darwinia-pangolin) is the canary network of Crab Network. 

## Install deps

`npm install --save-dev @darwinia/contracts-periphery @darwinia/contracts-utils`

## Prepare your cross-chain endpoint

Extends the `MessageEndpoint` contract to create your own endpoint. In your contracts folder, create a file `ToPangolinEndpoint.sol`.

```javascript
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@darwinia/contracts-periphery/contracts/s2s/MessageEndpoint.sol";

contract ToPangolinEndpoint is MessageEndpoint {
    constructor() {
        outboundLaneId = 0x726f6c69;
        inboundLaneId = 0x726f6c69;
        storageAddress = address(1024);
        dispatchAddress = address(1025);
        storageKeyForMarketFee = 0x30d35416864cf657db51d3bc8505602f2edb70953213f33a6ef6b8a5e3ffcab2;
        storageKeyForLatestNonce = 0xd86d7f611f4d004e041fda08f633f10196c246acb9b55077390e3ca723a0ca1f;
        storageKeyForLastDeliveredNonce = 0xd86d7f611f4d004e041fda08f633f101e5f83cf83f2127eb47afdc35d6e43fab;
        sendMessageCallIndex = 0x1103;
        remoteMessageTransactCallIndex = 0x2901;
        remoteSmartChainId = 43;
    }

    function _canBeExecuted(address, bytes calldata)
        internal
        pure
        override
        returns (bool)
    {
        return true;
    }

    function remoteDispatch(
        uint32 pangolinSpecVersion,
        bytes memory pangolinCallEncoded,
        uint64 pangolinCallWeight
    ) external payable returns (uint256) {
        return
            _remoteDispatch(
                pangolinSpecVersion,
                pangolinCallEncoded,
                pangolinCallWeight
            );
    }
}
```

Deploy it on the Pangoro Smart Chain. The `remoteDispatch` will be used in the next step.

You can download the completed [ToPangolinEndpoint.sol](https://raw.githubusercontent.com/darwinia-network/darwinia-messages-sol/master/contracts/periphery/contracts/s2s/examples/ToPangolinEndpoint.sol), and add your own access controls to it if your want to use it in a production environment.

## Create your Dapp contract

In your contracts folder, create a file `RemarkDemo.sol`.

```javascript
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "./ToPangolinEndpoint.sol";
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
        uint256 messageId = ToPangolinEndpoint(endpoint).remoteDispatch{
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

1. You can get a estimated fee by calling [the `fee` function](../api-reference) of the endpoint contract.
2. Call the `remoteRemark` with a value. The value should greater than or equal to the estimated fee.
