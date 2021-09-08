---
id: quick-start-staking-validator
title: 如何成为验证人
sidebar_label: 成为验证人
---

## 简介

高级用户可以尝试竞选成为验证人。一旦成为正式验证人，你将获得可观的被动收入。要想成为验证人，你需要运行一个全节点（验证人节点）并质押一部分通证。本文将演示如何竞选成为验证人。

## 先决条件

只有满足以下条件，才可以竞选验证人：

1. 配置了合适的软硬件资源可以运行一个全节点；
    
    >  如果你不知道如何运行一个节点，可以参照[*运行节点*](./wiki-tut-node)一文。
2. 你有一定的通证可以质押;
3. 你现在不是提名人。

## 步骤

### 启动验证人节点

你已经知道了如何配置不同的参数启动节点。为了在后续的操作中能得到“*会话 Key*”，你需要在启动验证人节点时设置这三个选项：`--unsafe-rpc-external`， `--rpc-methods=Unsafe` 和 `--rpc-cors=all`。

如果你是从一个可执行文件启动节点，使用如下命令。将其中的*<YOUR_DATA_DIR>* 和 *<YOUR_NODE_NAME>* 替换成自己的参数。
```
./darwinia \
  --base-path <YOUR_DATA_DIR> \
  --name <YOUR_NODE_NAME> \
  --validator \
  --unsafe-rpc-external \
  --rpc-methods=Unsafe \
  --ws-external \
  --rpc-cors all
```

如果你使用Docker,命令如下图所示。 用自己的参数替换*<YOUR_DATA_DIR>*, *<YOUR_DATA_DIR>*, *<YOUR_NODE_WSS_PORT>* 和 *<YOUR_NODE_NAME>*。
```
docker run -it \
  -v <YOUR_DATA_DIR>:/data \
  -p <YOUR_NODE_HTTP_PORT>:9933 \
  -p <YOUR_NODE_WSS_PORT>:9944 \
  darwinianetwork/darwinia:vx.x.x \
      --base-path /data \
      --name <YOUR_NODE_NAME> \
      --validator \
      --unsafe-rpc-external \
      --rpc-methods=Unsafe
      --ws-external \
      --rpc-cors all
```

### 得到验证人节点的会话Keys

在验证人节点服务器的Shell下执行以下命令，
```
$ curl http://127.0.0.1:9933 -H "Content-Type:application/json;charset=utf-8" -d \
'{
  "jsonrpc":"2.0",
  "id":1,
  "method":"author_rotateKeys",
  "params": []
}'
```

得到如下响应。
```
{
  "jsonrpc":"2.0", "result":"0xba99ecfb4a87357a44ee3765cf617a6d81adf8f43e522db52e348d2e9d45ccde12d53d562e14bb18523fbc3032b786f44b2b92340f4756386d4baec68bbfb882bbaccce1440c84d7f5b67c8ecb956345130d5dbd07adfeba3d9482f95d9dec6c68d085323e61590f850c38244dd2d2bc4055548d9edfd0471f47da7667c17fe8",
  "id":1
  }
```
 "*result*" 的内容就是我们需要的会话Key. (*文中的会话Key仅用于演示，请勿用于自己的账户。*)

### 质押通证

登录[Darwinia Apps Portal](https://apps.darwinia.network)后进入 "*质押*" 板块，点击 "*开始Staking*".
![Validator](assets/quick_start_zh-CN/darwinia-staking-validator-01_zh-CN.png)

然后设置质押的参数并查看估计的当前Power值和KTON。各项参数的含义请参考文章[*成为提名人*](./quick-start-nominator)。我们建议为了安全性和便利性，资金账户和控制账户使用不同的账号。
![Validator](assets/quick_start_zh-CN/darwinia-staking-validator-02_zh-CN.png)

### 设置会话Key

质押成功后，你将看到左侧的资金账户，点击“Session账户”。如果当前你是提名人，将不会出现这个按钮。你需要先停止提名才行。
![Validator](assets/quick_start_zh-CN/darwinia-staking-validator-03_zh-CN.png)

此时你将看到你在质押阶段设置“控制账户”。将之前到的会话Key复制过来，然后点击“*设置会话Key*”。
![Validator](assets/quick_start_zh-CN/darwinia-staking-validator-04_zh-CN.png)


然后点击“*签名并提交*”。
![Validator](assets/quick_start_zh-CN/darwinia-staking-validator-05_zh-CN.png)

### 设置验证人参数

点击 "*验证*"，然后开始设置验证人参数。
![Screenshot of Click "Validate" Button](assets/quick_start_zh-CN/darwinia-staking-validator-06_zh-CN.png)

参数"*奖励佣金百分比*" 是指节点产生收益时验证人优先分得的比例，取值范围是 0-100. (例如: 如果奖励佣金百分比为5%，该节点产生的收入，验证人将首先分得其中的5%，剩余的95%将在验证人和所有提名该节点的提名人之间按照质押比例分配。所以验证人的收益 = 节点奖励佣金 + 质押奖励分成).
 ![Screenshot of Click "Sign and Submit" Button](assets/quick_start_zh-CN/darwinia-staking-validator-07_zh-CN.png)

至此你的操作已经完成，验证人申请需要等到下一个时代（Era）才能生效。
