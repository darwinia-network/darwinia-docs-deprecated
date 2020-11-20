---
id: wiki-tut-dvm-use-web3-contract
title: 使用 web3 玩转合约
sidebar_label: 使用 web3 玩转合约
---

## 准备工作

1. 安装 nodejs

```sh
$ sudo apt install -y nodejs
```
2. 初始化 node 环境，并安装 web3， solc 工具包

```sh
$ mkdir incrementer && cd incrementer/
$ npm init --yes
$ npm install --save web3
$ npm install --save solc@0.6.10
```

项目初始化后，文件布局如下：

```sh
$ ls incrementer/
compile.js  deploy.js  get.js  Incrementer.sol  increment.js  node_modules/  package.json  package-lock.json  reset.js
```

> 注： 示例使用 web3 工具，默认地址为 http://localhost:9933，如果您的目标网络为 Pangolin Network，请修改为 http://t1.hkg.itering.com:9933。

## 玩转合约

合约内容

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

### 部署合约

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

输入以下命令进行合约部署：

```sh
$ node deploy.js
```

输出：

```sh
Attempting to deploy from account: 0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b
Contract deployed at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
```

合约地址为 `0x5c4242beB94dE30b922f57241f1D02f36e906915`.

### 获取 number 值 

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

输入：

```sh
$ node get.js
```

输出：

```sh
aking a call to contract at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
The current number stored is: 5
```

### 改变 number 值

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

输入：

```sh
$ node increment.js 
```

输出：

```sh
Calling the increment by 3 function in contract at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
Tx successfull with hash: 0x259078d1eefb40b9859748e2116c5bed04360583d5309e9d6947458bb5e1d0f9
```

再次查询 number 值：

```sh
Making a call to contract at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
The current number stored is: 8
```

### 重置 number 值

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

输入：

```sh
$ node reset.js
```

输出：

```sh
Calling the reset function in contract at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
Tx successfull with hash: 0x79b8b47ba82e271cd6e105b07743f2a2f470b5fa923a0c97d7f75ce3a3bcceac
```

再次查询 number 值：

```sh
Making a call to contract at address 0x5c4242beB94dE30b922f57241f1D02f36e906915
The current number stored is: 0
```