---
id: crab-tut-exchange
title: 交易所接入Crab网络指南
sidebar_label: 交易所接入Crab网络指南
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/crab-tut-exchange.md

---

# 交易所接入Crab网络指南

Darwinia Crab Network（简称：Crab 网络）对于 Darwinia 来说是一个金丝雀网络，定位类似于 Kusama 网络之于 Polkadot。它将会是一个长期运行的网络。

Crab 网络是一个具有价值的网络，其为应用部署提供了和Darwinia主网类似的环境，它的参数更为激进，非常适合各种快速演进的应用。Crab 网络不仅包含应用运行所需要的软件环境和网络环境，还包括接近Darwinia主网的经济博弈环境。

Crab 网络使用与Darwinia主网相同的抵押机制和通胀模型。 Crab的代币为CRING和CKTON，CRING的初始供应为2000M，CKTON的供应为0。

## Informations

官网: https://crab.network/ (under construction)
链浏览器: https://crab.subscan.io/
代码: https://github.com/darwinia-network/darwinia
出块时间: 6 秒
公共 Websocket RPC: [wss://crab-rpc.darwinia.network](wss://crab-rpc.darwinia.network)
公共 Http RPC: https://crab-rpc.darwinia.network

* CRING
    符号: CRING
    全称: Darwinia Crab Network Native Token
    精度: 9

* CKTON
    符号: CKTON
    全称: Darwinia Crab Commitment Token
    精度: 9

## 全节点快速安装并运行

从 https://github.com/darwinia-network/darwinia/releases 下载最新的程序

### 服务器的最低要求

CPU: 1 core
Memory: 2 GB
Disk: 30 GB SSD

### Linux

#### 1. 准备二进制

```
curl -sL https://github.com/darwinia-network/darwinia/releases/download/vx.x.x/darwinia-x.x.x-x86_64-linux-gnu-glibc-x.xx-llvm-x.x.tar.bz2

tar xvf darwinia-x.x.x-x86_64-linux-gnu-glibc-x.xx-llvm-x.x.tar.bz2

chmod +x ./darwinia
```

#### 2. 运行

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

#### 1. 拉取docker镜像

```
docker pull quay.io/darwinia-network/darwinia:vx.x.x
```

#### 2. 运行

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

## 使用

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
curl 'http-rpc-url' -X POST -H "Content-Type: application/json" --data '{"id":6,"jsonrpc":"2.0","method":"balances_usableBalance","params":[0, ss58地址]}' 
```

### Prevention of chain forks

Waiting for block finalized


