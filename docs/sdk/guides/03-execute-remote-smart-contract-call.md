---
sidebar_position: 3
---

# Execute Remote Smart Contract Call

This Dapp allows you to call Pangolin Smart Chain's `add(2)` function from Pangoro Smart Chain.

Pangoro Smart Chain is the testnet of Darwinia Smart Chain. [Pangolin Smart Chain](https://docs.crab.network/evm-compatible-crab-smart-chain/get-started/darwinia-pangolin) is the testnet of Crab Smart Chain. 

## Install deps

```bash
npm install --save-dev @darwinia/contracts-periphery @darwinia/contracts-utils
```

## Prepare your cross-chain endpoints

We need two endpoints here. One is for Pangoro Smart Chain, and the another one is for Pangolin Smart Chain. We can download them here.

1. Download [ToPangolinEndpoint.sol](https://raw.githubusercontent.com/darwinia-network/darwinia-messages-sol/master/contracts/periphery/contracts/s2s/examples/ToPangolinEndpoint.sol) for Pangoro. Then deploy it to Pangoro Smart Chain.

2. Download [ToPangoroEndpoint.sol](https://raw.githubusercontent.com/darwinia-network/darwinia-messages-sol/master/contracts/periphery/contracts/s2s/examples/ToPangoroEndpoint.sol) for Pangolin. Then deploy it to Pangolin Smart Chain. 

3. Call the `setRemoteEndpoint(_remoteChainId, _remoteEndpoint)` of the two endpoints to point to each other. 

The chain id of Pangoro Smart Chain is `0x70616772`. The chain id of Pangolin Smart Chain is `0x7061676c`.  

You can get the full chain id list from [constants](../constants).

## Create the callee contract on Pangolin

In your contracts folder, create a file `Callee.sol`.

```javascript
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Callee {
    uint256 public sum;

    function add(uint256 _value) external {
        sum = sum + _value;
    }
}
```

Deploy it on the Pangolin Smart Chain.

## Create the caller contract on Pangoro

In your contracts folder, create a file `ExecuteDemo.sol`.

```javascript
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "./ToPangolinEndpoint.sol";

// Call Pangolin.callee.add(2) from Pangoro
contract ExecuteDemo {
    address public endpoint;

    constructor(address _endpoint) {
        endpoint = _endpoint;
    }

    function remoteAdd(address callee) external payable returns (uint256) {
        uint256 messageId = ToPangolinEndpoint(endpoint).remoteExecute(
            28140, // latest spec version of pangolin
            callee,
            hex"1003e2d20000000000000000000000000000000000000000000000000000000000000002", // add(2)
            120000 // gas limit
        );

        return messageId;
    }
}
```

Deploy it on the Pangoro Smart Chain. 

Make sure that the endpoint is correct, it must be the ToPangolinEndpoint's address.

Make sure that the latest spec version of pangolin is correct. You can get it from https://pangolin.subscan.io/runtime.

## Run

1. You can get a estimated fee by calling [the `fee` function](../api-reference#fee) of the ToPangolinEndpoint contract.
2. Call the `remoteAdd(callee)` with a value as the market fee. The value should greater than or equal to the estimated fee.