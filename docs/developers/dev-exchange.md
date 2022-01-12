---
id: dev-guide-for-exchange
title: Guide for Exchange Integration
sidebar_label: Exchange Integration
sidebar_position: 6
---

# Guide for Exchange Integration

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

If you do not know how to run a full node, please refer to [*Running a Node*](../tutorials/wiki-tut-node).

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
const {
  mnemonicGenerate,
  mnemonicToMiniSecret,
  mnemonicValidate,
  naclBoxPairFromSecret
} = require('@polkadot/util-crypto');

async function main () {
  // Create mnemonic string for Alice using BIP39
  const mnemonicAlice = mnemonicGenerate();

  console.log(`Generated mnemonic: ${mnemonicAlice}`);

  // Validate the mnemic string that was generated
  const isValidMnemonic = mnemonicValidate(mnemonicAlice);

  console.log(`isValidMnemonic: ${isValidMnemonic}`);

  // Create valid Substrate-compatible seed from mnemonic
  const seedAlice = mnemonicToMiniSecret(mnemonicAlice);

  // Generate new public/secret keypair for Alice from the supplied seed
  const { publicKey, secretKey } = naclBoxPairFromSecret(seedAlice);
  console.log('publicKey, secretKey', publicKey, secretKey)
}

main().catch(console.error).finally(() => process.exit());
```

#### Get UsableBalance
```
  // get usable balance
  // params: tokenType(0 -> ring , 1 -> kton), adddres
  const usableBalance = await api.rpc.balances.usableBalance(0, '2tWwpfSGF16keTrrs7HRhWf7jM94ocnucTZBfJTCsv56QAsD');
  console.log('usableBalance', usableBalance.usableBalance.toString());
```


#### Get Block, Tx Info
```
// external imports
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const { cryptoWaitReady } = require('@polkadot/util-crypto');
const { typesBundleForPolkadotApps } =  require("@darwinia/types/mix");

function filterEvents(index, events = []) {
  return events.filter(({ phase }) => phase.isApplyExtrinsic && phase.asApplyExtrinsic.eq(index));
}

const darwiniaTypesBundle = {
  spec: {
    Crab: typesBundleForPolkadotApps.spec.Crab,
    Darwinia: typesBundleForPolkadotApps.spec.Darwinia,
    Pangolin: typesBundleForPolkadotApps.spec.Pangolin,
  },
};

const wsProvider = new WsProvider("wss://rpc.darwinia.network");

async function main() {
  const api = await ApiPromise.create({ provider: wsProvider, typesBundle: darwiniaTypesBundle });

  // get account info
  const accountInfo = await api.query.system.account('2tWwpfSGF16keTrrs7HRhWf7jM94ocnucTZBfJTCsv56QAsD');

  // #############################
  // {
  //   "nonce": 8,
  //   "refcount": 0,
  //   "data": {
  //     "free": 10753082843,
  //     "reserved": 0,
  //     "freeKton": 0,
  //     "reservedKton": 0,
  //     "miscFrozen": 0,
  //     "feeFrozen": 0
  //   }
  // }
  // #############################
  console.log('-----accountInfo----- \n', JSON.stringify(accountInfo, null, 2));


  // get block info
  const blockHash = '0xcb5ca3e6642e4af4fd5b9128d77740db6de360f0ecb8ae639183299f545066f1'; // system.ExtrinsicSuccess
  const block = await api.rpc.chain.getBlock(blockHash);
  const events = await api.query.system.events.at(blockHash);
  const blockHeader = await api.derive.chain.getHeader(blockHash);

  const blockNumber = blockHeader ? blockHeader.number.unwrap() : undefined;
  const parentHash = blockHeader ? blockHeader.parentHash.toHex() : undefined;

  // #############################
  // {
  //   "block": {
  //     "header": {
  //       "parentHash": "0x3fe1a1087ad1e872b148e98cb5c1ba45d63e7d73bc71e14679fc3530f5331ad3",
  //       "number": 6722195,
  //       "stateRoot": "0xb0e6c4afdaf3951473baf53300cc7a40ceaeaf190cefe6fbda47b03582773ec5",
  //       "extrinsicsRoot": "0x27b2eaa3751f2cefcbfd99fb052660477b21c65254a2e936e99870521549ac1b",
  //       "digest": {
  //         "logs": [
  //           {
  //             "preRuntime": [
  //               "0x42414245",
  //               "0x0268000000bc624f1000000000"
  //             ]
  //           },
  //           {
  //             "other": "0x4d4d5252ca8029e0f913e61d0d5b492d1da509bd5ab821bf2c86a44e18e11f084a4237c6"
  //           },
  //           {
  //             "seal": [
  //               "0x42414245",
  //               "0x3abcb2cbf10a9c0f83c5f794527900cc50c50f420704c631d1e65fa6ae50d165e7c9048237901af2e7aade0de799040dc6ca74e4ad1e58940044d1d7b0879789"
  //             ]
  //           }
  //         ]
  //       }
  //     },
  //     "extrinsics": [
  //       "0x280403000b41169a447e01",
  //       "0x450284000ef407af75417a160038262baf376a8ff8147142f860a8be9cb893d6f3a4971e01e0d3bc1bbd34e3ffc00fb927500ca632acbbb38a0f94d87370c00301ad34491f79f3d6e60204ee3df115d4a6c2de3ee19255f77d7952208a4459943fb5267a83f500a90a0004000022636d27fb735196a81a406b2a008016817048a8636732d5d6a1d944ebf971060700c4a5b684"
  //     ]
  //   },
  //   "justifications": null
  // }
  // #############################
  console.log('-----blockInfo By Hash----- \n', JSON.stringify(block, null, 2));
  // 6722195
  console.log('-----blockNumber----- \n', blockNumber.toString());
  // 0x3fe1a1087ad1e872b148e98cb5c1ba45d63e7d73bc71e14679fc3530f5331ad3
  console.log('-----parentHash----- \n', parentHash);


  // check transfer tx
  const extrinsics = block.block.extrinsics;
  extrinsics.map((value, index) => {
    const { meta, method, section } = api.registry.findMetaCall(value.callIndex);
    console.log(`-----extrinsic(${section}.${method})----- \n`, JSON.stringify({ meta, method, section }, null, 2));

    const thisEvents = filterEvents(index, events);
    
    thisEvents.map(({event}, index) => {
      // #############################
      // balances.Transfer
      // {"index":"0x0402","data":["2oWUpHD3iHZtNchEvxQMiFrDGEgmxzQ2tXMDUjodpQHYZCfs","2owxpN4gjuHQnh76JLQo8VtxvLX75dRp7VFkq4AZxYUk43Tc",570000000000]}
      // system.ExtrinsicSuccess
      // {"index":"0x0000","data":[{"weight":193987000,"class":"Normal","paysFee":"Yes"}]}
      // #############################

      // Transfer succeeded (from, to, value).
      console.log(`-----event section.method----- \n`, `${event.section}.${event.method}`)
      console.log(`-----event detail----- \n`, JSON.stringify(event, null ,2));

      // Confirm whether a RING transfer transaction is successful
      // 1. The block is Finalized
      // 2. The current extrinsic event has ${event.section}.${event.method} === 'balances.Transfer'
      // 3. The current extrinsic event has ${event.section}.${event.method} === 'system.ExtrinsicSuccess'
    });
  });


  // get current block number
  const currentBlockNumber = await api.query.system.number();
  console.log('current block number', currentBlockNumber.toString());

};

main();
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

#### Transfer

```
yarn add @polkadot/api
yarn add @polkadot/keyring
yarn add @darwinia/types
```

```
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const { cryptoWaitReady } = require('@polkadot/util-crypto');
const { typesBundleForPolkadotApps } =  require("@darwinia/types/mix");

const darwiniaTypesBundle = {
  spec: {
    Crab: typesBundleForPolkadotApps.spec.Crab,
    Darwinia: typesBundleForPolkadotApps.spec.Darwinia,
    Pangolin: typesBundleForPolkadotApps.spec.Pangolin,
  },
};

const wsProvider = new WsProvider("wss://rpc.darwinia.network");

async function main() {
  const api = await ApiPromise.create({ provider: wsProvider, typesBundle: darwiniaTypesBundle });
  const BOB = '2qMskW9mrrdUcFS5s7a3Pq5PxoTa1NTirDEggPUNmaCEJ5Ch';
  const transferAmount = '123456789';

  cryptoWaitReady().then(async () => {
    // Create a extrinsic, transferring amount units to Bob.
    const transfer = api.tx.balances.transfer(BOB, transferAmount);
    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('...');

    await transfer.signAndSend(alice, ({ events = [], status }) => {
      if (status.isInBlock) {
        console.log('Successful transfer of ' + transferAmount + ' with hash ' + status.asInBlock.toHex());
      } else {
        console.log('Status of transfer: ' + status.type);
      }

      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString());
        if (status.type === 'Finalized' && section + '.' + method === 'system.ExtrinsicSuccess') {
          console.log('transfer success');
          api.disconnect();
        }
      });
    });
  });
};

main();
```

#### Offline sign tx

```
https://github.com/darwinia-network/darwinia-js-usecases/blob/main/src/offlineSign/offlineSign.ts
```

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
