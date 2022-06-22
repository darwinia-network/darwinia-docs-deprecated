---
sidebar_position: 1
---

# API Reference

### Initialization 

Before you start using the SDK, you need to set some globle settings in your initialization function.

```javascript
contract Demo is SmartChainXApp {
    constructor() public {
        // Globle settings for Pangolin
        dispatchAddress = 0x0000000000000000000000000000000000000019;
        callIndexOfSendMessage = 0x2b03;
        storageAddress = 0x000000000000000000000000000000000000001a;
        callbackSender = 0x6461722f64766D70000000000000000000000000;
    }
    ...
}

```
If not set, the default is the settings of the Crab Network.


### (Source Chain) sendMessage

Send a message through a bridge.

```javascript
/// @notice Send message over a bridge
/// @param bridge The bridge to send message
/// @param payload The message payload to be sent
/// @return nonce The nonce of the message
function sendMessage(Bridge memory bridge, MessagePayload memory payload)
    internal
    returns (uint64)
```

Define the bridge to send message through:

```javascript
struct Bridge {
    // The lane id
    bytes4 srcOutlaneId;
    // The storage key used to get market fee
    bytes srcStorageKeyForMarketFee;
    // The storage key used to get latest nonce
    bytes srcStorageKeyForLatestNonce;
}
```

Crab's bridges:
1. To Darwinia bridge
    ```javascript
    Bridge memory bridge = Bridge(
        // outlane id, lane to Darwinia
        0,
        // storage key for Darwinia market fee
        hex"190d00dd4103825c78f55e5b5dbf8bfe2edb70953213f33a6ef6b8a5e3ffcab2",
        // storage key for the latest nonce of Darwinia message lane
        hex"c9b76e645ba80b6ca47619d64cb5e58d96c246acb9b55077390e3ca723a0ca1f11d2df4e979aa105cf552e9544ebd2b500000000"
    );
    ```

Pangolin's bridges:
1. To Pangoro bridge
    ```javascript
    Bridge memory bridge = Bridge(
        // outlane id, lane to Darwinia
        0,
        // storage key for Darwinia market fee
        hex"190d00dd4103825c78f55e5b5dbf8bfe2edb70953213f33a6ef6b8a5e3ffcab2",
        // storage key for the latest nonce of Darwinia message lane
        hex"c9b76e645ba80b6ca47619d64cb5e58d96c246acb9b55077390e3ca723a0ca1f11d2df4e979aa105cf552e9544ebd2b500000000"
    );
    ```
    
### (Source Chain) onMessageDelivered

You need to implement this virtual function If you want to do something after the message is confirmed.

```javascript
/// @notice Callback function for 'send_message'
/// @param lane Lane id
/// @param nonce Nonce of the callback message
/// @param result Dispatch result of cross chain message
function onMessageDelivered(
    bytes4 lane,
    uint64 nonce,
    bool result
) external virtual;
```

If you don't want this function to be wrongly called, you should add a check to the first line of your implemention like this,

```javascript
contract RemarkDemo is SmartChainXApp {
    ...

    function onMessageDelivered(
        bytes4 lane,
        uint64 nonce,
        bool result
    ) external override {
        require(msg.sender == callbackSender, "Only pallet address is allowed call 'onMessageDelivered'");
        // TODO: Your code goes here...
    }
}
```

Callback sender list:

### (Target Chain) requireSenderOfSourceChain

When a function on the target chain is called by source chain, in order to ensure that this function can only be called by the sender on the source chain, this check needs to be added to the first line of the function.

```javascript
/// @notice This function is used to check the sender.
/// @param srcChainId The source chain id
/// @param sender The sender of the message on the source chain
function requireSenderOfSourceChain(bytes4 srcChainId, address sender)
    internal
```

example:

```javascript
contract Demo is SmartChainXApp {
    uint256 public number;

    // this `add` function will be called by `0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b` on source chain
    function add(uint256 _value) public {
        requireSenderOfSourceChain(0, 0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b);
        number = number + _value;
    }

    ...
}

```