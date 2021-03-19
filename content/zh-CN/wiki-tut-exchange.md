---
id: wiki-tut-exchange
title: 交易平台接入 Darwinia 主网指南
sidebar_label: 交易平台接入 Darwinia 主网指南
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/wiki-tut-exchange.md

---

# 交易平台接入 Darwinia 主网指南

达尔文网络基于 Substrate 开发，是一个连通波卡平行链生态与外部异构链的跨链转接桥接网络，全面兼容 EVM 虚拟机，专注于建设未来资产互联网络，侧重非标资产 NFT 拍卖市场、稳定币跨链，资产交易兑换等领域。为跨链及多链应用提供基础设施。 

#波卡 #NFT #DeFI #跨链 #Staking

### RING
RING 是达尔文网络（Darwinia Network）的原生资产，可用作交易的 Gas。Gas 包括链上交易费用，合约执行费用及跨链服务费等。RING 可参与 Staking 获取影响力，以此参与治理并获得收益。

RING 发行总量：2_035_657_675.1095
RING 流通总量：449_346_894.5532

供应量实时数据: https://api.darwinia.network/supply/ring

### KTON
KTON 是达尔文网络（Darwinia Network）原生通证 RING 的衍生通证，称为承诺通证。是为了鼓励用户进行长期的承诺锁定。当用户在 Staking 的过程中承诺锁定 RING 一定时限，系统会给予相应数量的 KTON 作为流动性丧失的弥补和奖励。KTON 同时也可以在主网上参与 Staking 获取影响力，以此参与治理并获得收益。

KTON 发行总量：69_607.2280
KTON 流通总量：49_915.3625

供应量实时数据:  https://api.darwinia.network/supply/kton

---

达尔文是一个跨链桥项目，目前在以太坊和 TRON 上都有达尔文资产。 因此，交易平台可以有多种接入方式，可以根据需要选择一种或多种。

## 方法 1: 接入达尔文主网

### 信息

官网: https://darwinia.network/
链浏览器: https://darwinia.subscan.io/
代码: https://github.com/darwinia-network/darwinia
出块时间: 6 秒
公共 Websocket RPC: [wss://rpc.darwinia.network](wss://rpc.darwinia.network)
公共 Http RPC: https://rpc.darwinia.network

* RING
    符号: RING
    全称: Darwinia Network Native Token
    精度：9

* KTON
    符号: KTON
    全称: Darwinia Commitment Token
    精度: 9

### 全节点快速安装并运行

从 https://github.com/darwinia-network/darwinia/releases 下载最新的程序

#### 服务器的最低要求

CPU: 1 core
Memory: 2 GB
Disk: 30 GB SSD

#### Linux

##### 1. 准备二进制

```
curl -sL https://github.com/darwinia-network/darwinia/releases/download/vx.x.x/darwinia-x.x.x-x86_64-linux-gnu-glibc-x.xx-llvm-x.x.tar.bz2

tar xvf darwinia-x.x.x-x86_64-linux-gnu-glibc-x.xx-llvm-x.x.tar.bz2

chmod +x ./darwinia
```

##### 2. 运行

```
./darwinia \
    --base-path <YOUR_DATA_DIR> \
    --name <YOUR_NODE_NAME>
```

如果要[远程连接到此节点](https://wiki.polkadot.network/docs/en/maintain-wss)，请添加--ws-external 和--rpc-cors 选项：

```
./darwinia \
    --base-path <YOUR_DATA_DIR> \
    --name <YOUR_NODE_NAME> \
    --ws-external \
    --rpc-cors all
```

#### Docker

##### 1. 拉取 docker 镜像

```
docker pull quay.io/darwinia-network/darwinia:vx.x.x
```

##### 2. 运行

```
docker run -it \
    -v <YOUR_DATA_DIR>:/data \
    -p <YOUR_NODE_HTTP_PORT>:9933 \
    -p <YOUR_NODE_WSS_PORT>:9944 \
    darwinianetwork/darwinia:vx.x.x \
        --base-path /data \
        --name <YOUR_NODE_NAME> \
        --ws-external \
        --rpc-cors all
```

### 使用

#### Check address correctness

```
var cryptoUtil = require('@polkadot/util-crypto');

/**
 * check address
 * @param {string} address - crab address
 * @param {number} ss58 - ss58 number, darwinia = 18
 * @return {*} [boolean, string | null]
 */
var checkResult = cryptoUtil.checkAddress('2qaG2RhtCchZcziyYeFN7BJbfe5q8dXqiqDVwd3LAx1c4L81', 18);

console.log('-----check crab address----- \n' , checkResult);
```

#### Generate address
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
 // darwinia = 18
 var ss58Format = 18;
 var address = cryptoUtil.encodeAddress(keyPair.publicKey, ss58Format);
 console.log('-----mnemonic----- \n', mnemonic, seed, keyPair, address)
})
```

#### Get the latest block height
```
curl 'http-rpc-url' -X POST -H "Content-Type: application/json"  --data '{"id":1,"jsonrpc":"2.0","method":"chain_getFinalizedHead","params":[]}'
```

#### Get the specified block information by hash

```
curl 'http-rpc-url' -X POST -H "Content-Type: application/json"  --data '{"id":1,"jsonrpc":"2.0","method":"chain_getBlock","params":["0xe61e542b5087973a2fed9d85615bc5a19039f9da9628395d83d8b4d7b42b9f8f"]}'
```

#### Get details of a transaction
```
curl 'http-rpc-url' -X POST -H "Content-Type: application/json"  --data '{"hash": "0x861ce0f4b890c2710d503882ac2ac3f3fbff496737f8c821349d5309d662ce5f"}' https://darwinia.subscan.io/api/scan/extrinsic
```

* How to judge and avoid a fake deposit
    ```
    1. Check whether the transaction is successful
    result["data"]["success"] == true;
    
    2. Check if the transaction is a transfer
    // RING
    const event = result["event"].find(event => {
        event["module_id"] == "balances" && event["event_id"] == "Transfer" 
    }); 
    
    // KTON
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

#### Transfer

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
const B = '2qaG2RhtCchZcziyYeFN7BJbfe5q8dXqiqDVwd3LAx1c4L81';

// Create a extrinsic
// RING, transferring 1 RING to B
const transfer = api.tx.balances.transfer(B, 1_000_000_000);

// KTON, transferring 1 KTON to B
const transfer = api.tx.kton.transfer(B, 1_000_000_000);

// Sign and send the transaction using our account
const hash = await transfer.signAndSend(A);

console.log('Transfer sent with hash', hash.toHex());
```

#### Transfer: Offline signature with online broadcast
https://github.com/darwinia-network/darwinia-polkadotjs-typegen/blob/master/src/test/index.ts

#### Get address balance
```
curl 'http-rpc-url' -X POST -H "Content-Type: application/json" --data '{"id":6,"jsonrpc":"2.0","method":"balances_usableBalance","params":[0, ss58 地址]}' 
```

#### Prevention of chain forks

Waiting for block finalized

## 方法 2: 接入 Ethereum ERC20

* RING
Contract: 0x9469d013805bffb7d3debe5e7839237e535ec483
Precision: 18

* KTON
Contract:0x9f284e1337a815fe77d2ff4ae46544645b20c5ff
Precision:18

## 方法 3: 接入 Tron TRC20

* RING
Contract: TL175uyihLqQD656aFx3uhHYe1tyGkmXaW
Precision: 18

* KTON
Contract:TW3kTpVtYYQ5Ka1awZvLb9Yy6ZTDEC93dC
Precision: 18
