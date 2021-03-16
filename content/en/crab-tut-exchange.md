---
id: crab-tut-exchange
title: Darwinia Crab Exchange Access Guide
sidebar_label: Darwinia Crab Exchange Access Guide
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/en/crab-tut-exchange.md

---

# Darwinia Crab Exchange Access Guide

Darwinia Crab Testnet (Crab for short) is a Canary Network for Darwinia. Expect Chaos is a reasonable expectation.

Crab Network is not just a testnet, it will be a long-term network.

Crab mainly provides simulation and test environment for Darwinia's upgrade and application deployment, perform various radical experiments. The test environment includes not only the software operation environment and network environment required for testing, but also the test economic environment.

Crab use the same Staking mechanism and inflation model with Darwinia mainnet. Crab’s tokens are CRING and CKTON, the initial supply of CRING is 2000M, and the supply of CKTON is 0.

## Informations

Official website: https://crab.network/ (under construction)
Blockchain Explorer: https://crab.subscan.io/
Code: https://github.com/darwinia-network/darwinia
Block time: 6 seconds
Public Websocket RPC: [wss://crab-rpc.darwinia.network](wss://crab-rpc.darwinia.network)
Public Http RPC: https://crab-rpc.darwinia.network

* CRING
    Symbol: CRING
    Name: Darwinia Crab Network Native Token
    Precision: 9

* CKTON
    Symbol: CKTON
    Name: Darwinia Crab Commitment Token
    Precision: 9

## Full node quick installation and running

Download releases from https://github.com/darwinia-network/darwinia/releases

### Minimum requirements of host server

CPU: 1 core
Memory: 2 GB
Disk: 30 GB SSD

### Linux

#### 1. Prepare binary

```
curl -sL https://github.com/darwinia-network/darwinia/releases/download/vx.x.x/darwinia-x.x.x-x86_64-linux-gnu-glibc-x.xx-llvm-x.x.tar.bz2

tar xvf darwinia-x.x.x-x86_64-linux-gnu-glibc-x.xx-llvm-x.x.tar.bz2

chmod +x ./darwinia
```

#### 2. Run

```
./darwinia \
    --base-path <YOUR_DATA_DIR> \
    --name <YOUR_NODE_NAME> \
    --chain crab
```

Add the --ws-external and --rpc-cors all options if you want to [remotely connect to this node](https://wiki.polkadot.network/docs/en/maintain-wss):

```
./darwinia \
    --base-path <YOUR_DATA_DIR> \
    --name <YOUR_NODE_NAME> \
    --chain crab \
    --ws-external \
    --rpc-cors all
```

### Docker

#### 1. Pull docker image

```
docker pull quay.io/darwinia-network/darwinia:vx.x.x
```

#### 2. Run

```
docker run -it \
    -v <YOUR_DATA_DIR>:/data \
    -p <YOUR_NODE_HTTP_PORT>:9933 \
    -p <YOUR_NODE_WSS_PORT>:9944 \
    darwinianetwork/darwinia:vx.x.x \
        --base-path /data \
        --name <YOUR_NODE_NAME> \
        --chain crab \
        --ws-external \
        --rpc-cors all
```

## Usages

### Check address correctness

```
var cryptoUtil = require('@polkadot/util-crypto');

/**
 * check address
 * @param {string} address - crab address
 * @param {number} ss58 - ss58 number, darwinia crab = 42
 * @return {*} [boolean, string | null]
 */
var checkResult = cryptoUtil.checkAddress('5EU6EEhZRbh1NQS7HRMwAogoBHWtT2eLFQWei2UZHUHJosHt', 42);

console.log('-----check crab address----- \n' , checkResult);
```

### Generate address
```
var cryptoUtil = require('@polkadot/util-crypto');

// buffer is an ArrayBuffer
function buf2hex(buffer) {
 return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

cryptoUtil.cryptoWaitReady().then(() => {
 /**
  * generate mnemonic
  * @param {number} numWords - word count ,default = 12
  * @return {*} string
  */
 var mnemonic = cryptoUtil.mnemonicGenerate();
 var seed = cryptoUtil.mnemonicToMiniSecret(mnemonic);

 console.log('-----seed hex----- \n', buf2hex(seed.buffer))

 /**
  * Creates a new public/secret keypair from a seed
  * @param {Uint8Array} seed - seed
  * @return {*} a object containing a `publicKey` & `secretKey` generated from the supplied seed.
  * { secretKey: [...], publicKey: [...] }
  */
 var keyPair = cryptoUtil.schnorrkelKeypairFromSeed(seed);
  // https://github.com/paritytech/substrate/blob/master/primitives/core/src/crypto.rs#L437
 // darwinia crab = 42
 var ss58Format = 42;
 var address = cryptoUtil.encodeAddress(keyPair.publicKey, ss58Format);
 console.log('-----mnemonic----- \n', mnemonic, seed, keyPair, address)
})
```

### Get the latest block height
```
curl 'http-rpc-url' -X POST -H "Content-Type: application/json"  --data '{"id":1,"jsonrpc":"2.0","method":"chain_getFinalizedHead","params":[]}'
```

### Get the specified block information by hash

```
curl 'http-rpc-url' -X POST -H "Content-Type: application/json"  --data '{"id":1,"jsonrpc":"2.0","method":"chain_getBlock","params":["0xb375d7db4d737bdbfb8f8089d7b4589fd9fe68a535d448b44dcf9aa2ef8eed17"]}'
```

### Get details of a transaction
```
curl 'http-rpc-url' -X POST -H "Content-Type: application/json"  --data '{"hash": "0x04af51c980a9152ad8319f73a85d13305e273be8ebd3cc979c18f4ad14e716d6"}' https://crab.subscan.io/api/scan/extrinsic
```

* How to judge and avoid a fake deposit
    ```
    1. Check whether the transaction is successful
    result["data"]["success"] == true;
    
    2. Check if the transaction is a transfer
    // CRING
    const event = result["event"].find(event => {
        event["module_id"] == "balances" && event["event_id"] == "Transfer" 
    }); 
    
    // CKTON
    const event = result["event"].find(event => {
        event["module_id"] == "kton" && event["event_id"] == "Transfer" 
    });
    
    3. Check if the transaction is finalized
    result["data"]["finalized"] == true;
    
    4. Confirm the receipt address and quantity
    event["params"][1]["value"] == Deposit Address
    
    5. Get the value transfered
    value = event["params"][2]["value"] / 1_000_000_000
    ```

### Transfer

```
yarn add @polkadot/api
yarn add @polkadot/keyring
yarn add @darwinia/types
```

```
const { ApiPromise } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');

// Darwinia types
const { typesBundleForPolkadot } = require('@darwinia/types/mix');

const provider = new WsProvider('wss://<YOUR_NODE_IP>:<YOUR_NODE_WSS_PORT>');
const api = await ApiPromise.create({
  provider: wsProvider,
  types: typesBundleForPolkadot
});

const keyring = new Keyring({ type: 'sr25519' });

const A = keyring.addFromUri('<YOUR_SEED>');
const B = '5EU6EEhZRbh1NQS7HRMwAogoBHWtT2eLFQWei2UZHUHJosHt';

// Create a extrinsic
// CRING, transferring 1 CRING to B
const transfer = api.tx.balances.transfer(B, 1_000_000_000);

// CKTON, transferring 1 CKTON to B
const transfer = api.tx.kton.transfer(B, 1_000_000_000);

// Sign and send the transaction using our account
const hash = await transfer.signAndSend(A);

console.log('Transfer sent with hash', hash.toHex());
```

### Transfer: Offline signature with online broadcast
https://github.com/darwinia-network/darwinia-polkadotjs-typegen/blob/master/src/test/index.ts

### Get address balance
```
curl 'http-rpc-url' -X POST -H "Content-Type: application/json" --data '{"id":6,"jsonrpc":"2.0","method":"balances_usableBalance","params":[0, ss58 地址]}' 
```

### Prevention of chain forks

Waiting for block finalized


