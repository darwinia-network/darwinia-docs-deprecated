---
sidebar_position: 4
---

# Call Smart Contract Remotely

Darwinia supports calling smart contracts on the target chain from the source chain.

Here are the steps:

1. Prepare your smart contract to be deployed on the target chain

    ```javascript
    contract ContractOnPangolin {
        uint256 public number;

        function add(uint256 _value) public {
            number = number + _value;
        }
    }
    ```

    After deployed, the contract address will be used in the next step.

2. Prepare your smart contract to be deployed on the source chain

    ```js
    contract RemoteTransactDemo is PangoroApp {
        ...
        
        function remoteAdd(
            uint32 specVersionOfPangolin,
            address receivingContract
        ) public payable {
            uint64 messageNonce = _remoteTransact(
                _PANGOLIN_CHAIN_ID,
                _PANGORO_PANGOLIN_LANE_ID,
                specVersionOfPangolin,
                receivingContract,
                hex"1003e2d20000000000000000000000000000000000000000000000000000000000000002", // add(2)
                600000 // gas limit
            );
        }

        ...
    }

    ```

    The `receivingContract` here is the address of `ContractOnPangolin` on Pangolin.

# Restricted access

If you want to restrict the `add` function to be called only by the `RemoteTransactDemo` contract, you need to do something like this:

1. Prepare your Dapp contract for both source chain and target chain

    ```js
    contract ContractOnPangolin is PangoroAppOnPangolin {
        constructor() {
            init();
        }

        uint256 public number;

        function add(uint256 _value) public {
            // this 'require' makes this function only be called by the `RemoteTransactDemo` contract
            require(
                _isDerivedFromRemote(msg.sender),
                "msg.sender is not derived from remote"
            );
            number = number + _value;
        }

        function setSrcMessageSender(address _srcMessageSender) public {
            srcMessageSender = _srcMessageSender;
        }
    }
    ```

2. Deploy `RemoteTransactDemo` to Pangoro.

3. Deploy `ContractOnPangolin` to Pangolin.

4. Call `ContractOnPangolin`.`setSrcMessageSender` to set the srcMessageSender to the `RemoteTransactDemo` contract address.

5. Call `RemoteTransactDemo`.`remoteAdd`.

Now, the `add` function can only be called by `RemoteTransactDemo` contract.