---
id: build-an-app
title: Build an app with solidity
sidebar_label: Build an app with solidity
---

> This tutorial is only available in Pangolin testnet now.

# Deposit some PRING to a DVM address

The materials needs to be prepared in advance:

- evm address（Metamask generate one account）
- substrate address （have some balance, apply in element）

Deposit:

1. Generate evm address from substrate address

[apps]-[ToolBox]-[DVM address], enter the evm address, the corresponding substrate address will be generated, which represent this evm address to send or receive Pring.


![create substrate address](assets/wiki-tut-dvm-recharge-04.png)
The corresponding substrate address of `0xAa01a1bEF0557fa9625581a293F3AA7770192632` is `5ELRpquT7C3mWtjerXnTxDmKnvVxJjCCstXcN8yG34o4365H`.


2. Transfer balance use Apps

Transfer balance using Apps, the target address is `5ELRpquT7C3mWtjerXnTxDmKnvVxJjCCstXcN8yG34o4365H`.

![transfer pring](assets/wiki-tut-dvm-recharge-05.png)

`Make Transfer` and wait until the extrinsic been finalized in block.


3. Comfirm balance in MetaMask

![confirm balance in mataMask](assets/wiki-tut-dvm-recharge-06.png)

The balance of evm address `0xAa01a1bEF0557fa9625581a293F3AA7770192632` is 100, a successfully recharge completely。

# Send a DVM transaction

## Preparation

1. Install Nodejs

```sh
$ sudo apt install -y nodejs
```
2. install web3 package

```sh
$ mkdir transaction && cd transaction/
$ npm init --yes
$ npm install --save web3
```

The project layout as follows:

```sh
$ ls transaction/
balance.js  node_modules/  package.json  package-lock.json  transaction.js
```

> Note: If you are working on Pangolin Network，change the default address http://localhost:9933 to http://t1.hkg.itering.com:9933。

## Get Balance

```js
// balance.js
const Web3 = require('web3');

// Variables definition
const addressFrom = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const addressTo = '0xAa01a1bEF0557fa9625581a293F3AA7770192632';
const web3 = new Web3('http://localhost:9933');

// Balance call
const balances = async () => {
   const balanceFrom = web3.utils.fromWei(
      await web3.eth.getBalance(addressFrom),
      'ether'
   );
   const balanceTo = await web3.utils.fromWei(
      await web3.eth.getBalance(addressTo),
      'ether'
   );

   console.log(`The balance of ${addressFrom} is: ${balanceFrom} Pring.`);
   console.log(`The balance of ${addressTo} is: ${balanceTo} Pring.`);
};

balances();
```

The output:

```sh
$ node balance.js
The balance of 0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b is: 123.45678900000000009 Pring.
The balance of 0xAa01a1bEF0557fa9625581a293F3AA7770192632 is: 0 Pring.
```

## Transfer Balance

Make a transaction to Transfer 50 PRING from `0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b` to `0xAa01a1bEF0557fa9625581a293F3AA7770192632`.

```js
// transfer.js
const Web3 = require('web3');

// Variables definition
const privKey =
   '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';
const addressFrom = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const addressTo = '0xAa01a1bEF0557fa9625581a293F3AA7770192632';
const web3 = new Web3('http://localhost:9933');

// Create transaction
const deploy = async () => {
   console.log(
      `Attempting to send transaction from ${addressFrom} to ${addressTo}`
   );

   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: addressFrom,
         to: addressTo,
         value: web3.utils.toWei('50', 'ether'),
         gas: '5000000000',
      },
      privKey
   );

   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );

   console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`
   );

}

deploy();
```

The output:

```sh
$ node transaction.js 
Attempting to send transaction from 0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b to 0xAa01a1bEF0557fa9625581a293F3AA7770192632
Transaction successful with hash: 0xaccfb5438c6927c6c32adc640394600f5dda183ea82683dc5a9feddc64b5d438
```

Get balances again:

```sh
The balance of 0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b is: 73.45678900000000009 Pring.
The balance of 0xAa01a1bEF0557fa9625581a293F3AA7770192632 is: 50 Pring.
```

# Play with DVM contract

## Preparation

install web3, solc package

```sh
$ mkdir incrementer && cd incrementer/
$ npm init --yes
$ npm install --save web3
$ npm install --save solc@0.6.10
```

The project layout as follows:

```sh
$ ls incrementer/
compile.js  deploy.js  get.js  Incrementer.sol  increment.js  node_modules/  package.json  package-lock.json  reset.js
```

> Note: If you are working on Pangolin Network，change the default address http://localhost:9933 to http://t1.hkg.itering.com:9933。

## Play Contracts

A simple solidity contract demo.

```js
// Incrementer.sol
pragma solidity ^0.6.0;

contract Incrementer {
    uint256 public number;

    constructor(uint256 _initialNumber) public {
        number = _initialNumber;
    }

    function increment(uint256 _value) public {
        number = number + _value;
    }

    function reset() public {
        number = 0;
    }
}
```

### Deploy Contract

```js
// compile.js
const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Compile contract
const contractPath = path.resolve(__dirname, 'Incrementer.sol');
const source = fs.readFileSync(contractPath, 'utf8');
const input = {
   language: 'Solidity',
   sources: {
      'Incrementer.sol': {
         content: source,
      },
   },
   settings: {
      outputSelection: {
         '*': {
            '*': ['*'],
         },
      },
   },
};

const tempFile = JSON.parse(solc.compile(JSON.stringify(input)));
const contractFile = tempFile.contracts['Incrementer.sol']['Incrementer'];
module.exports = contractFile;
```

```js
// deploy.js
const Web3 = require('web3');
const contractFile = require('./compile');

// Initialization
const bytecode = contractFile.evm.bytecode.object;
const abi = contractFile.abi;
const privKey =
   '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342'; // Genesis private key
const address = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const web3 = new Web3('http://localhost:9933');

// Deploy contract
const deploy = async () => {
    console.log('Attempting to deploy from account:', address);
 
    const incrementer = new web3.eth.Contract(abi);
 
    const incrementerTx = incrementer.deploy({
       data: bytecode,
       arguments: [5],
    });
 
    const createTransaction = await web3.eth.accounts.signTransaction(
       {
          from: address,
          data: incrementerTx.encodeABI(),
          gas: '4294967295',
       },
       privKey
    );
 
    const createReceipt = await web3.eth.sendSignedTransaction(
       createTransaction.rawTransaction
    );
    console.log('Contract deployed at address', createReceipt.contractAddress);
 };
 
 deploy();
```

Deploy contract using the command below:

```sh
$ node deploy.js
```

The output:

```sh
Attempting to deploy from account: 0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b
Contract deployed at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
```

The contract address `0x5c4242beB94dE30b922f57241f1D02f36e906915`.

### Get number

```js
// get.js
const Web3 = require('web3');
const { abi } = require('./compile');

// Initialization
const address = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const web3 = new Web3('http://localhost:9933');
const contractAddress = '0x5c4242beB94dE30b922f57241f1D02f36e906915';

// Contract Call
const incrementer = new web3.eth.Contract(abi, contractAddress);
const get = async () => {
   console.log(`Making a call to contract at address ${contractAddress}`);
   const data = await incrementer.methods
      .number()
      .call();
   console.log(`The current number stored is: ${data}`);
};

get();
```

Run command below:

```sh
$ node get.js
```

The output:

```sh
aking a call to contract at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
The current number stored is: 5
```

### Set number

```js
// increment.js
const Web3 = require('web3');
const { abi } = require('./compile');

// Initialization
const privKey =
   '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342'; // Genesis private key
const address = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const web3 = new Web3('http://localhost:9933');
const contractAddress = '0x5c4242beB94dE30b922f57241f1D02f36e906915';
const _value = 3;

// Contract Tx
const incrementer = new web3.eth.Contract(abi);
const encoded = incrementer.methods.increment(_value).encodeABI();

const increment = async () => {
   console.log(
      `Calling the increment by ${_value} function in contract at address ${contractAddress}`
   );
   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: address,
         to: contractAddress,
         data: encoded,
         gas: '4294967295',
      },
      privKey
   );

   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(`Tx successfull with hash: ${createReceipt.transactionHash}`);
};

increment();
```

Run command below:

```sh
$ node increment.js 
```

The output:

```sh
Calling the increment by 3 function in contract at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
Tx successfull with hash: 0x259078d1eefb40b9859748e2116c5bed04360583d5309e9d6947458bb5e1d0f9
```

Get the number value:

```sh
$ node get.js
Making a call to contract at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
The current number stored is: 8
```

### Reset number

```js
// reset.js
const Web3 = require('web3');
const { abi } = require('./compile');

// Initialization
const privKey =
   '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342'; // Genesis private key
const address = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const web3 = new Web3('http://localhost:9933');
const contractAddress = '0x5c4242beB94dE30b922f57241f1D02f36e906915';

// Contract Tx
const incrementer = new web3.eth.Contract(abi);
const encoded = incrementer.methods.reset().encodeABI();

const reset = async () => {
   console.log(
      `Calling the reset function in contract at address ${contractAddress}`
   );
   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: address,
         to: contractAddress,
         data: encoded,
         gas: '4294967295',
      },
      privKey
   );

   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(`Tx successfull with hash: ${createReceipt.transactionHash}`);
};

reset();
```

Run command below:

```sh
$ node reset.js
```

The output:

```sh
Calling the reset function in contract at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
Tx successfull with hash: 0x79b8b47ba82e271cd6e105b07743f2a2f470b5fa923a0c97d7f75ce3a3bcceac
```

Get the number value:

```sh
$ node get.js
Making a call to contract at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
The current number stored is: 0
```
