---
sidebar_position: 3
---

# Build your first cross-chain Dapp

We will use [hardhat](https://hardhat.org/) to build our first cross-chain Dapp. The Dapp will be deployed to the Pangoro Smart Chain, then call the `remark_with_event` on the [Pangolin](https://docs.crab.network/evm-compatible-crab-smart-chain/get-started/darwinia-pangolin) remotely.

## Preparation

1. Go to an empty folder, running `npm init`
2. `npm install --save-dev hardhat`
3. `npm install --save @darwinia/contracts-periphery`

Now, we have a hardhat project with Darwinia SDK.

## Create Scale Types (Optional)

If there is no existing Scale Types for the target chain, you need to define the types yourself. You can find the existing types in `@darwinia/contracts-utils`. Here, Darwinia is our target chain. We need to define the remark dispatch call type.

Create a new file named `PalletSystem.sol` in your contracts folder and copy and paste the code below into it.

```solidity
library PalletSystem {
    struct RemarkCall {
        bytes2 callIndex;
        bytes remark;
    }

    function encodeRemarkCall(RemarkCall memory call) internal pure returns (bytes memory) {
        return abi.encodePacked(
            call.callIndex, 
            ScaleCodec.encodeBytes(call.remark)
        );
    }
}
```

`remark_with_event` is the function(dispatch call) on the Pangolin that will be cross-chain called. The `System.RemarkCall` type is used to encode it.

Darwinia SDK will provide the most common types for you. If you want to learn more about the Scale Codec, please visit https://docs.substrate.io/v3/advanced/scale-codec/.

## Create your Dapp

Darwinia SDK provides a abstract base Dapp contract named `PangoroXApp`. You should extends it to create your Dapp contract. In your contracts folder, create a file `RemarkDemo.sol`.

```javascript
// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import "@darwinia/contracts-periphery/contracts/s2s/SmartChainXApp.sol";
import "./System.sol";

contract RemarkDemo is PangoroXApp {
    constructor() public {
        init();
    }

    function remark() public payable {
        // 1. prepare the call that will be executed on the target chain
        System.RemarkCall memory call = System.RemarkCall(
            hex"0009", // the call index of remark_with_event
            hex"12345678"
        );
        bytes memory callEncoded = System.encodeRemarkCall(call);

        // 2. Prepare the message payload
        MessagePayload memory payload = MessagePayload(
            1210, // spec version of target chain
            2654000000, // call weight
            callEncoded // call encoded bytes
        );

        // 3. Send the message payload to the pangolin through the lane id
        bytes4 laneId = 0;
        uint64 _messageNonce = sendMessage(toPangolin, laneId, payload);
    }
}
```

Note: 

1. The spec version of the `MessagePayload` must be correct, you can get the latest spec version from https://pangolin.subscan.io/runtime.

3. The call weight of the `MessagePayload` must be equal to or greater than the expected weight. you can get it from the target chain's benchmarks.


## Run in Remix

The easiest way to run the code is [Remix](https://remix.ethereum.org/).

1. [Connect your MetaMask to Pangoro](./01-using-smart-chain-with-metamask.md).
2. Export you Dapp to a single flattened solidity file.
    
    ```bash
    npx hardhat flatten ./contracts/RemarkDemo.sol > ~/Desktop/RemarkDemo.sol
    ```
    
3. Copy it to Remix and deploy the `RemarkDemo` contract.
4. Run `systemRemark` with value 200 ethers(here means ORINGs), the value must ≥ the [market fee](../../fee.md). important!

## Or, Run in your project with hardhat command

1. Open your `hardhat.config.js` in your project folder, add Crab Network into `networks`.

    ```js
    crab: {
      url: 'https://pangoro-rpc.darwinia.network',
      network_id: "45",
      accounts: [PRIVATE_KEY],
      gas: 3_000_000,
      gasPrice: 53100000000
    }
    ```
    PRIVATE_KEY is your private key of Crab Network account with enough(≥ market fee + transaction fee) ORINGs tokens.

2. Add a script to deploy and run your contract. Inside `scripts/`, create a new file `remarkdemo-script.js` with the following code:

    ```js
    const hre = require("hardhat");

    async function main() {
        // We get the contract to deploy
        const RemarkDemo = await hre.ethers.getContractFactory("RemarkDemo");
        const demo = await RemarkDemo.deploy();
        await demo.deployed();
        await demo.deployTransaction.wait();
        console.log("Deployed to:", demo.address);

        // Send transaction
        const tx = await demo.remark({
          value: BigInt(200000000000000000000), // 200 CRAB, The fee to use the cross-chain service, determined by the Fee Market
        });
        await tx.wait();
        console.log("txhash:", tx["hash"]);
    }

    main()
      .then(() => process.exit(0))
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
    ```

3. Run

    In your project's folder, run:

    ```bash
    npx hardhat run --network crab scripts/remarkdemo-script.js
    ```

    It will output the txhash of the transaction. You can copy it to [subscan](https://pangoro.subscan.io/) to see the detail of the transaction. 

## Track cross-chain events with subscan

### MessageAccepted events of Pangoro

[https://pangoro.subscan.io/event?address=&module=bridgedarwiniamessages&event=all](https://crab.subscan.io/event?address=&module=bridgedarwiniamessages&event=all)

### MessageDelivered events of Pangolin

[https://pangolin.subscan.io/event?address=&module=bridgecrabmessages&event=all](https://darwinia.subscan.io/event?address=&module=bridgecrabmessages&event=all)

[More](./02-know-your-cross-chain-status.md)
