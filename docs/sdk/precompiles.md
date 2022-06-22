---
sidebar_position: 2
---

# Precompiles

## Ethereum compatible precompiles

    address(1): ECRecover
    address(2): Sha256
    address(3): Ripemd160
    address(4): Identity
    address(5): Modexp
    address(6): Bn128Add
    address(7): Bn128Mul
    address(8): Bn128Pairing
    address(9): Blake2F  
  
https://ethereum.stackexchange.com/questions/15479/list-of-pre-compiled-contracts

## Darwinia precompiles

### Inquiry state storage

> `address(1024)`

or

> `0x0000000000000000000000000000000000000400`

This contract is used to get the values from substrate state storage by storage-key.

```js
address storageContractAddress = address(1024);
(bool success, bytes memory data) = storageContractAddress.staticcall(
    abi.encodeWithSelector(
        IStateStorage.state_storage.selector,
        storageKey
    )
);
```

### Dispatch call

> `address(1025)`

or

> `0x0000000000000000000000000000000000000401`

This contract is used to dispatch the substrate dispatch-calls.

```js
address dispatchContractAddress = address(1025);
(bool success, bytes memory data) = dispatchAddress.call(callEncoded);
```

### Unstable precompiles

These precompiles are not stable and could be deleted in the future, only for internal usage.

    address(2048): BLS12381
    address(2049): MPT
    address(2050): Transfer
    address(2051): EthereumBridge
    address(2052): Sub2SubBridge