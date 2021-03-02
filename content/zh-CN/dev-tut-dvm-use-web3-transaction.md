---
id: dev-tut-dvm-use-web3-transaction
title: 使用 web3 发送交易
sidebar_label: 使用 web3 发送交易
---

## 准备工作

1. 安装 nodejs

```sh
$ sudo apt install -y nodejs
```
2. 初始化 node 环境，并安装 web3 工具包

```sh
$ mkdir transaction && cd transaction/
$ npm init --yes
$ npm install --save web3
```

3. 项目初始化之后，文件布局如下：

```sh
$ ls transaction/
balance.js  node_modules/  package.json  package-lock.json  transaction.js
```

> 注： 示例使用 web3 工具，默认地址为 http://localhost:9933，如果您的目标网络为 Pangolin Network，请修改为 http://t1.hkg.itering.com:9933。

## 查询余额

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

输出：

```sh
$ node balance.js
The balance of 0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b is: 123.45678900000000009 Pring.
The balance of 0xAa01a1bEF0557fa9625581a293F3AA7770192632 is: 0 Pring.
```

## 转账交易

接下来通过 web3，`0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b` 给 `0xAa01a1bEF0557fa9625581a293F3AA7770192632` 转账 50 Pring。

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

输出：

```sh
$ node transaction.js 
Attempting to send transaction from 0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b to 0xAa01a1bEF0557fa9625581a293F3AA7770192632
Transaction successful with hash: 0xaccfb5438c6927c6c32adc640394600f5dda183ea82683dc5a9feddc64b5d438
```

再次查询转账结果：

```sh
The balance of 0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b is: 73.45678900000000009 Pring.
The balance of 0xAa01a1bEF0557fa9625581a293F3AA7770192632 is: 50 Pring.
```
