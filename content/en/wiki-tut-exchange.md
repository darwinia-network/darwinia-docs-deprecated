---
id: wiki-tut-exchange
title: Darwinia Exchange Access Guide
sidebar_label: Darwinia Exchange Access Guide
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/en/wiki-tut-exchange.md


---

# Darwinia Exchange Access Guide

Darwinia Network is a decentralized heterogeneous cross-chain bridge protocol built on Substrate, serves as critical infrastructure for interoperability across the blockchain networks.  Darwinia Network focuses on decentralized cross-chain token swap, exchange, and market and enables single-chain application upgrade to cross-chain version, including Defi, Game, DEX, NFT market, and more.  Its vision is to build the future Internet of Tokens.  

#Polkadot #NFT #DeFI #Interoperability #Staking

### RING
RING is the native token of Darwinia Network.  It's used to pay for the GAS fee of the on-chain transactions and cross-chain services.  RING can be staked for staking rewards and obtaining voting power to participate in the governance.  

RING total supply:2_035_657_675.1095
RING circulating supply:449_346_894.5532

Real-time supply  data api: https://api.darwinia.network/supply/ring

### KTON
KTON is a derivative commitment token of RING (Darwinia Network native token), which encourages long-term involvement. RING holders can voluntarily lock RING for 3–36 months and get KTON as rewards, compensating for the liquidity loss.  KTON can be staked for staking rewards and obtaining voting power to participate in the governance.  

KTON total supply:69_607.2280
KTON circulating supply:49_915.3625

Real-time supply  data api:  https://api.darwinia.network/supply/kton

---

Because Darwinia is a cross-chain bridges project, there are currently Darwinia assets on Ethereum and TRON. Therefore, exchanges can have multiple access methods, and one or more can be selected according to your needs.

## Method 1: Connect to the Darwinia mainnet

### Informations

Official website: https://darwinia.network/
Blockchain Explorer: https://darwinia.subscan.io/
Code: https://github.com/darwinia-network/darwinia
Block time: 6 seconds
Public Websocket RPC: [wss://rpc.darwinia.network](wss://rpc.darwinia.network)
Public Http RPC: https://rpc.darwinia.network

* RING
    Symbol: RING
    Name: Darwinia Network Native Token
    Precision:9

* KTON
    Symbol: KTON
    Name: Darwinia Commitment Token
    Precision: 9

### Full node quick installation and running

Download releases from https://github.com/darwinia-network/darwinia/releases

#### Minimum requirements of host server

CPU: 1 core
Memory: 2 GB
Disk: 30 GB SSD

#### Linux

##### 1. Prepare binary

```
curl -sL https://github.com/darwinia-network/darwinia/releases/download/vx.x.x/darwinia-x.x.x-x86_64-linux-gnu-glibc-x.xx-llvm-x.x.tar.bz2

tar xvf darwinia-x.x.x-x86_64-linux-gnu-glibc-x.xx-llvm-x.x.tar.bz2

chmod +x ./darwinia
```

##### 2. Run

```
./darwinia \
    --base-path <YOUR_DATA_DIR> \
    --name <YOUR_NODE_NAME>
```

Add the --ws-external and --rpc-cors all options if you want to [remotely connect to this node](https://wiki.polkadot.network/docs/en/maintain-wss):

```
./darwinia \
    --base-path <YOUR_DATA_DIR> \
    --name <YOUR_NODE_NAME> \
    --ws-external \
    --rpc-cors all
```

#### Docker

##### 1. Pull docker image

```
docker pull quay.io/darwinia-network/darwinia:vx.x.x
```

##### 2. Run

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

### Usages

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

## Method 2: Connect to Ethereum ERC20

* RING
Contract: 0x9469d013805bffb7d3debe5e7839237e535ec483
Precision: 18

* KTON
Contract:0x9f284e1337a815fe77d2ff4ae46544645b20c5ff
Precision:18

## Method 3: Connect to Tron TRC20

* RING
Contract: TL175uyihLqQD656aFx3uhHYe1tyGkmXaW
Precision: 18

* KTON
Contract:TW3kTpVtYYQ5Ka1awZvLb9Yy6ZTDEC93dC
Precision: 18
