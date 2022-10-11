---
sidebar_position: 5
---

# Execute Remote Smart Contract Though LCMP-XCMP Routing

We first deploy a example Dapp. And then mock a user to use the Dapp to call a function on `Moonbase Alpha` from `Pangolin Smart Chain`.

## Prepare

### Accounts

1. **Dapp Account 1**: a `Pangolin Smart Chain` account to deploy contracts including `PangolinEndpoint` and `Caller`.
2. **Dapp Account 2**: a `Moonbase Alpha` account to deploy contracts including `MoonbaseEndpoint` and `Callee`.
3. **Dapp Account 3**: a `Pangolin Parachain` account which will be used to recharge user's derived account(**B**).
4. **User Account**: a user account to send transaction on `Pangolin Smart Chain`. Below is the deriving path of the user account.
   ![Address deriving](/img/address-deriving.png) 
   **A1**: **User Account**.  
   **A2**: **User Account** in substrate address format.  
   **B**: derived substrate address of the **User Account** on Pangolin Parachain.  
   **C**: derived evm address of the **User Account** on Moonbase Alpha.  

### Prepare Contracts(Dapp)

You need to prepair 4 contracts. These contracts form a very simple Dapp.

#### 1. PangolinEndpoint
```javascript
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "../../moonbeam/AbstractDarwiniaEndpoint.sol";

contract PangolinEndpoint is AbstractDarwiniaEndpoint {
    constructor() {
        remoteMessageTransactCallIndex = 0x2600;
        routerForwardCallIndex = 0x1a01;
        dispatchAddress = address(1025);
        sendMessageCallIndex = 0x3f03;
        storageAddress = address(1024);
        storageKeyForMarketFee = 0x39bf2363dd0720bd6e11a4c86f4949322edb70953213f33a6ef6b8a5e3ffcab2;
        storageKeyForLatestNonce = 0xdcdffe6202217f0ecb0ec75d8a09b32c96c246acb9b55077390e3ca723a0ca1f;
        storageKeyForLastDeliveredNonce = 0xdcdffe6202217f0ecb0ec75d8a09b32ce5f83cf83f2127eb47afdc35d6e43fab;
        outboundLaneId = 0x70616c69;
        inboundLaneId = 0x70616c69;
    }

    function _executable(address, bytes calldata)
        internal
        pure
        override
        returns (bool)
    {
        return true;
    }

    function remoteExecute(
        uint32 _routerSpecVersion,
        address _callReceiver,
        bytes calldata _callPayload,
        uint256 _gasLimit
    ) external payable returns (uint256) {
        return
            _remoteExecute(
                _routerSpecVersion,
                _callReceiver,
                _callPayload,
                _gasLimit
            );
    }

    function setRemoteEndpoint(bytes4 routerChainId, address remoteEndpoint)
        external
    {
        _setRemoteEndpoint(routerChainId, remoteEndpoint);
    }

    // origin from pangolin to moonbase, B
    function getMessageOriginOnPangolinParachain() external view returns (bytes32) {
        // H160(sender on the sourc chain) > AccountId32
        bytes32 derivedSubstrateAddress = AccountId.deriveSubstrateAddress(
            address(this)
        );

        // AccountId32 > derived AccountId32
        bytes32 derivedAccountId = SmartChainXLib.deriveAccountId(
            0x7061676c, // pangolin chain id // pagl
            derivedSubstrateAddress
        );

        return derivedAccountId;
    }
}

```

#### 2. MoonbaseEndpoint
```javascript
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "../../moonbeam/AbstractMoonbeamEndpoint.sol";

contract MoonbaseEndpoint is AbstractMoonbeamEndpoint {
    constructor() {
        remoteSmartChainId = 43;
        remoteMessageTransactCallIndex = 0x2901;
        routerSendMessageCallIndex = 0x1503;
        routerOutboundLaneId = 0x70616c69; // pali
        routerParachainId = 0x00000839;
        feeLocationAddress = 0xFFFffFfF8283448b3cB519Ca4732F2ddDC6A6165;
    }

    function _executable(address, bytes calldata)
        internal
        pure
        override
        returns (bool)
    {
        return true;
    }

    function remoteExecute(
        uint32 _tgtSpecVersion,
        address _callReceiver,
        bytes calldata _callPayload,
        uint256 _gasLimit,
        uint128 _deliveryAndDispatchFee
    ) external payable {
        _remoteExecute(
            _tgtSpecVersion,
            _callReceiver,
            _callPayload,
            _gasLimit,
            _deliveryAndDispatchFee
        );
    }

    function setRemoteEndpoint(
        bytes4 _remoteChainId,
        bytes4 _parachainId,
        address _remoteEndpoint
    ) external
    {
        _setRemoteEndpoint(_remoteChainId, _parachainId, _remoteEndpoint);
    }

    // origin from moonbase to pangolin, A2
    function getMessageOriginOnPangolinParachain() external view returns (bytes32) {
        // H160(sender on the source chain) > AccountId32
        bytes32 derivedSubstrateAddress = AccountId.deriveSubstrateAddress(
            address(this)
        );
       
        return derivedSubstrateAddress;
    }
}
```

#### 3. Callee
```javascript
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Callee {
    uint256 public sum = 0;

    function add(uint256 _value) external {
        sum = sum + _value;
    }
}
```

#### 4. Caller
```javascript
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "./PangolinEndpoint.sol";

// pangolin > pangolin-parachain > moonbase
contract Caller {
    address public endpoint;

    constructor(address _endpoint) {
        endpoint = _endpoint;
    }

    event Hello(address);

    function remoteAdd(address callee) external payable returns (uint256) {
        uint256 messageId = PangolinEndpoint(endpoint).remoteExecute{value: msg.value}(
            5320, // pangolin-parachain spec version
            callee,
            hex"1003e2d20000000000000000000000000000000000000000000000000000000000000002", // add(2),
            120000 // gas limit
        );

        return messageId;
    }

    function latestNonce() public view returns (uint64) {
        return SmartChainXLib.latestNonce(
            address(1024),
            0xdcdffe6202217f0ecb0ec75d8a09b32c96c246acb9b55077390e3ca723a0ca1f,
            0x70616c69
        );
    }
}
```
## Deploy

### 1. Deploy Endpoints & Let Them Know Each Other

1. Deploy endpoints  

   Deploy `PangolinEndpoint` to Pangolin Smart Chain.  
   Deploy `MoonbaseEndpoint` to Moonbase Alpha.

2. Let Them Know Each Other
   * Let moonbase endpoint know pangolin endpoint:  
  
     ``` js
     moonbaseEndpoint.setRemoteEndpoint("0x7061676c", "0x00000839", pangolinEndpoint)
     ```
     "0x7061676c" is the Pangolin chain id.  
     "0x00000839" is the Pangolin Parachain ParaId.

   * Let pangolin endpoint know moonbase endpoint:
     ``` js
     pangolinEndpoint.setRemoteEndpoint("0x70676c70", moonbaseEndpoint)
     ```
     "0x70676c70" is the Pangolin Parachain chain id.

   * Let moonbase endpoint know pangolin endpoint:

     Not needed for this example.

### 2. Deploy Caller & Callee

  ```js
  Caller.deploy(pangolin_endpoint_address)
  ```

  ```js
  Callee.deploy()
  ```
## Recharge User Account Address `B`

Transfer some PRING from **Dapp Account 3** to **User Account B** as gas fee and cross-chain fee. 

> How much?

## Run

Use **User Account A1** to send a transaction to call `Callee.add(2)` from Pangolin Smart Chain

```js
const fee = hre.ethers.utils.parseEther("300");
caller.remoteAdd(callee_adderss, { value: fee })
```