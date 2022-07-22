---
sidebar_position: 1
---

# API Reference

## _setRemoteEndpoint

Set the remote endpoint.

This is an internal function to be called by the concrete endpoint functions.

```javascript
function _setRemoteEndpoint(bytes4 _remoteChainId, address _remoteEndpoint)
    internal
```

### Params:    

* _remoteChainId: The remote chain id. [The full chain id list](./constants)

* _remoteEndpoint: The remote endpoint contract address.

## _remoteDispatch

Dispatch a substrate call of the target chain. 

This is an internal function to be called by the concrete endpoint functions.

```javascript
function _remoteDispatch(
    uint32 tgtSpecVersion,
    bytes memory tgtCallEncoded,
    uint64 tgtCallWeight
) internal returns (uint256)
```
### Params:    

* tgtSpecVersion: The target chain's latest spec version.
* tgtCallEncoded: The call to be dispatched on the target chain. It is a SCALE codec bytes.
* tgtCallWeight: The weight of the call.

### Return:

* message id

## _remoteTransact

Transact a evm call of the endpoint contract on the target chain.

This is an internal function to be called by the concrete endpoint functions.

```javascript
function _remoteTransact(
    uint32 tgtSpecVersion,
    bytes memory callPayload,
    uint256 gasLimit
) internal returns (uint256) 

```
### Params:    

* tgtSpecVersion: The target chain's latest spec version.
* callPayload: The evm call to be transact on the target chain. It is a ABI codec bytes.
* gasLimit: The gas limit to run the evm call.

### Return:

* message id

## _remoteExecute

Execute a evm call of the target chain. The difference between the `_remoteExecute` and `_remoteTransact` is that `_remoteTransact` can only call functions of the remote endpoint, but `_remoteExecute` can call functions of other contracts as long as you allow.

This is an internal function to be called by the concrete endpoint functions.

```javascript
function _remoteExecute(
    uint32 tgtSpecVersion,
    address callReceiver,
    bytes calldata callPayload,
    uint256 gasLimit
) internal returns (uint256)
```
### Params:    

* tgtSpecVersion: The target chain's latest spec version.
* callReceiver: The contract address which has the function to be called.
* callPayload: The evm call to be execute on the target chain. It is a ABI codec bytes.
* gasLimit: The gas limit to run the evm call.

### Return:

* message id

## fee

Get the estimated cross-chain market fee.

```javascript
function fee() public view returns (uint256)
```

### Return:

* the estimated cross-chain market fee. The decimals is 18.

## modifier onlyMessageSender

This modifier is used to restrict a function to be called only by the remote sender.

```javascript
modifier onlyMessageSender()
```

## execute

This external function is called remotely to execute an evm call.

It is the mate of `_remoteExecute`.

```javascript
function execute(address callReceiver, bytes calldata callPayload)
    external
    onlyMessageSender
```

## _canBeExecuted

This is an internal virtual function to be overrided.

It is used to check if a call can be executed on the receiver contract.

```javascript
function _canBeExecuted(address callReceiver, bytes calldata callPayload)
    internal
    view
    virtual
    returns (bool)
```

## lastDeliveredMessageId

Get the last delivered **inbound** message id.

```javascript
function lastDeliveredMessageId() public view returns (uint256)
```

### Return:

* The last delivered inbound message id

## isMessageDelivered

Check if an **inbound** message has been delivered.

```javascript
function isMessageDelivered(uint256 messageId) public view returns (bool)
```

### Params:    

* messageId: The inbound message id.

## encodeMessageId

Build a message by encoding a lane id and a message nonce.

```javascript
function encodeMessageId(bytes4 laneId, uint64 nonce)
    public
    pure
    returns (uint256)
```

## decodeMessageId

Decode a message into a lane id and a message nonce.

```javascript
function decodeMessageId(uint256 messageId)
    public
    pure
    returns (bytes4, uint64)
```

### Params:    

* messageId: The inbound message id.