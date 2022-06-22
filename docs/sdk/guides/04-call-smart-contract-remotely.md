---
sidebar_position: 4
---

# Call Smart Contract Remotely

Darwinia supports calling smart contracts on the target chain from the source chain, and currently supports solidity smart contracts.

Calling a solidity function remotely is similar to calling a normal call, except that 1. You need to deploy a contract to the smart chain of the target chain. 2. Use a specific type of call `PalletEthereum.TransactCall`.

Here are the steps:

1. Prepare your smart contract to be deployed on the target chain

    ```javascript
    contract TargetContract {
        uint256 public number;

        function add(uint256 _value) public {
            number = number + _value;
        }
    }
    ```

    After deployed, the contract address will be used in the next step.

2. Prepare your smart contract to be deployed on the source chain

    This step is similar to the one in the [previous guide](./build-your-first-cross-chain-dapp), except we are using a specific type of Call. The definition of this call is as follows:

    ```js
    contract RemoteTransactDemo is PangoroXApp {
        ...
        
        function callAddOnTargetChain() public payable {
            // 1. prepare the call that will be executed on the target chain
            PalletEthereum.TransactCall memory call = PalletEthereum.TransactCall(
                // the call index of substrate_transact
                0x2902,
                // the evm transaction to transact
                PalletEthereum.buildTransactionV2(
                    0, // evm tx nonce, nonce on the target chain + pending nonce on the source chain + 1
                    1000000000, // gasPrice, get from the target chain
                    600000, // gasLimit, get from the target chain
                    0x50275d3F95E0F2FCb2cAb2Ec7A231aE188d7319d, // <------------------ the contract address on the target chain
                    0, // value, the only allowed value here is 0
                    hex"1003e2d20000000000000000000000000000000000000000000000000000000000000002" // the add function bytes that will be called on the target chain, add(2)
                )
            );
            bytes memory callEncoded = PalletEthereum.encodeTransactCall(call);

            // 2. Prepare the message payload
            MessagePayload memory payload = MessagePayload(
                28110, // spec version of target chain <----------- This may be changed, go to https://pangoro.subscan.io/runtime get the latest spec version
                2654000000, // call weight
                callEncoded // call encoded bytes
            );

            // 3. Send the message payload to the pangolin through the lane id
            bytes4 laneId = 0;
            uint64 _messageNonce = sendMessage(toPangolin, laneId, payload);
        }

        ...
    }

    ```

    Note:

    It follows the notes of [previous guide](./build-your-first-cross-chain-dapp#create-your-dapp). And, There are two more rules to note:

    1. `weight` of MessagePayload >= gas_to_weight(`gasLimit` of buildTransactionV2)

    2. `gasPrice` of buildTransactionV2 >= WeightToFee::calc(gas_to_weight(1)) * next_fee_multiplier * 10**9

    3. `nonce` of buildTransactionV2 is evm tx nonce.

# Restricted access

If you want to restrict your method to only be called remotely by your Dapp contract, you need to do something like this:

1. Prepare your Dapp contract for both source chain and target chain

    ```js
    // deploy on the target chain first, then deploy on the source chain
    contract RemoteTransactDemo is PangolinXApp {
        constructor() public {
            init();
        }

        uint256 public number;

        ///////////////////////////////////////////
        // used on the source chain
        ///////////////////////////////////////////
        function callAddOnTheTargetChain() public payable {
            // 1. prepare the call that will be executed on the target chain
            PalletEthereum.TransactCall memory call = PalletEthereum.TransactCall(
                // the call index of substrate_transact
                0x2902,
                // the evm transaction to transact
                PalletEthereum.buildTransactionV2(
                    0, // evm tx nonce, nonce on the target chain + pending nonce on the source chain + 1
                    1000000000, // gasPrice, get from the target chain
                    600000, // gasLimit, get from the target chain
                    0x50275d3F95E0F2FCb2cAb2Ec7A231aE188d7319d, // <------------------ change to the contract address on the target chain
                    0, // value, the only allowed value here is 0
                    hex"1003e2d20000000000000000000000000000000000000000000000000000000000000002" // the add function bytes that will be called on the target chain, add(2)
                )
            );
            bytes memory callEncoded = PalletEthereum.encodeTransactCall(call);

            // 2. Prepare the message payload
            MessagePayload memory payload = MessagePayload(
                28110, // spec version of target chain <----------- This may be changed, go to https://pangoro.subscan.io/runtime get the latest spec version
                2654000000, // call weight
                callEncoded // call encoded bytes
            );

            // 3. Send the message payload to the pangolin through the lane id
            bytes4 laneId = 0;
            uint64 _messageNonce = sendMessage(toPangolin, laneId, payload);
        }

        ///////////////////////////////////////////
        // used on the target chain
        ///////////////////////////////////////////
        function add(uint256 _value) public {
            // this 'require' makes this function only be called by the dapp contract on the source chain
            require(
                msg.sender == deriveSenderFromRemote(),
                "msg.sender must equal to the address derived from the message sender address on the source chain"
            );
            number = number + _value;
        }
    }
    ```

2. Deploy the contract to the target chain.

    After deployed, the target chain contract address will be used in the next step.

3. Deploy the contract to the source chain.

    Before deployment, you need to change the target chain contract address first.

    ```js
    PalletEthereum.TransactCall memory call = PalletEthereum.TransactCall(
        // the call index of substrate_transact
        0x2902,
        // the evm transaction to transact
        PalletEthereum.buildTransactionV2(
            0, // evm tx nonce, nonce on the target chain + pending nonce on the source chain + 1
            1000000000, // gasPrice, get from the target chain
            600000, // gasLimit, get from the target chain
            0x50275d3F95E0F2FCb2cAb2Ec7A231aE188d7319d, // <------------------ the contract address on the target chain
            0, // value, the only allowed value here is 0
            hex"1003e2d20000000000000000000000000000000000000000000000000000000000000002" // the add function bytes that will be called on the target chain, add(2)
        )
    );
    ```

    After deployed, the source chain contract address will be used in the next step.

4. Call `setMessageSenderOnSrcChain` to update the source chain contract address on the target chain

    ```js
    function setMessageSenderOnSrcChain(address _messageSenderOnSrcChain)
    ```


After these steps, the `add` function can only be called by `_messageSenderOnSrcChain`.