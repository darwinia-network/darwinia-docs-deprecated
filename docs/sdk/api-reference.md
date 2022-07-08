---
sidebar_position: 1
---

# API Reference

There are three ways to use the SDK.

* Inherit the abstract contracts of a specific chain. Like `PangoroApp` & `PangoroAppOnPangolin`.
* Inherit `BaseApp` & `BaseAppOnTarget`.
* Use low-level library `CrossChainXLib` directly.

It is recommended to use the first way, which hides a lot of details and parameters for you.

## Inherit the abstract contracts of a specific chain
### _init()

Call `_init()` to do initialization. 

On the source chain:
```javascript
contract Demo is PangoroApp {
    constructor() public {
        _init();
    }
    ...
}

```

On the target chain:
```javascript
contract DemoOnPangolin is PangoroAppOnPangolin {
    constructor() public {
        _init();
    }
    ...
}

```


### _sendMessage

Send a message to the target chain over a lane.

```javascript
/// @notice Send a message to the target chain over a lane
/// @param _tgtChainId The target chain id
/// @param _outboundLaneId The outboundLane id
/// @param _payload The message payload to be sent
/// @return nonce The nonce of the message
function _sendMessage(
    bytes4 _tgtChainId,
    bytes4 _outboundLaneId,
    MessagePayload memory _payload
) internal returns (uint64)
```

### _remoteTransact

Execute an evm call on the target chain.

```javascript
/// @notice Execute an evm call on the target chain
/// @param _tgtChainId The target chain id
/// @param _outboundLaneId The outboundLane id
/// @param _tgtSpecVersion The latest spec version of the target chain
/// @param _to The receiving contract address on the target chain
/// @param _input The evm call's abi bytes
/// @return nonce The nonce of the message
function _remoteTransact(
    bytes4 _tgtChainId,
    bytes4 _outboundLaneId,
    uint32 _tgtSpecVersion,
    address _to,
    bytes memory _input,
    uint256 _gasLimit
) internal returns (uint64)
```

### (Target Chain) _isDerivedFromRemote

When a function on the target chain is called by source chain, in order to ensure that this function can only be called by the sender on the source chain, you need to add a check to the first line of the function.

```javascript
/// @notice Determine if the `sender` is derived from remote.
/// @return bool Is the sender address authorized?
function _isDerivedFromRemote(address _sender) internal view returns (bool)
```

example:

```javascript
contract DemoOnPangolin is PangoroAppOnPangolin {
    uint256 public number;

    function add(uint256 _value) public {
        require(
            _isDerivedFromRemote(msg.sender),
            "msg.sender is not derived from remote"
        );
        number = number + _value;
    }

    ...
}

```

### (Target Chain) _lastDeliveredNonceOf

```javascript
/// @notice Get the last delivered nonce of a inboundLane.
/// @return uint64 the last delivered nonce of the lane.
function _lastDeliveredNonceOf(bytes4 _inboundLaneId)
        internal
        view
        returns (uint64)
```