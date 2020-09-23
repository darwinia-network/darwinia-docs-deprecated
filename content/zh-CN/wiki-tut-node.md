---
id: wiki-tut-node
title: 如何运行一个节点
sidebar_label: 运行节点
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/wiki-tut-node.md
---

## 环境准备

### 以下两种获取可执行文件方式任选其一

#### 1.下载可执行文件

https://github.com/darwinia-network/darwinia/releases/tag/v0.7.0

#### 2.从源码编译

- Rust编译环境准备，参考 https://github.com/darwinia-network/darwinia#41-hacking-on-darwinia

- 下载源代码

  https://github.com/darwinia-network/darwinia/archive/v0.7.0.zip

- 解压源码，进入根目录

- cargo build --release

- 可以在 target/release 下面找到编译好的可执行文件 darwinia(.exe)

## 启动节点

### 普通全节点启动

```sh
./darwinia \
	--base-path <YourDataDir> \
	--name <YourNodeName>
```

or docker:

```bash
docker run -d -v <YourDataDir>:/data -p 30333:30333 darwinianetwork/darwinia:v0.7.0 \
	--base-path /data \
	--name <YourNodeName> \
	--validator
```

### 验证人节点启动

- 验证人节点首次运行。目的是暴露rpc端口，然后通过rpc调用为节点增加key（此key在参与staking时绑定为session key)，详见：[成为验证人](wiki-tut-validator)

  ```bash
  ./darwinia \
  	--base-path <YourDataDir> \
  	--name <YourNodeName> \
  	--validator \
  	--unsafe-rpc-external \
  	--rpc-methods=Unsafe
  ```

  or docker:

  ```bash
  docker run -d -v <YourDataDir>:/data -p 30333:30333 darwinianetwork/darwinia:v0.7.0 \
  	--base-path /data \
  	--name <YourNodeName> \
  	--validator \
  	--unsafe-rpc-external \
  	--rpc-methods=Unsafe
  ```

- 验证人节点启动

  ```bash
  ./darwinia \
  	--base-path <YourDataDir> \
  	--name <YourNodeName> \
  	--validator
  ```

  or docker:

  ```bash
  docker run -d -v <YourDataDir>:/data -p 30333:30333 darwinianetwork/darwinia:v0.7.0 \
  	--base-path /data \
  	--name <YourNodeName> \
  	--validator
  ```

注：建议使用 systemctl，pm2，screen 等工具来维护进程。

### 常用参数列表

|     参数     |                             注释                             |  子参数  | 子参数类型 |
| :----------: | :----------------------------------------------------------: | :------: | :--------: |
|  validator   |                     节点类型为验证人节点                     |    无    |     无     |
| rpc-external | 监听所有 rpc，验证人节点需要使用 `--unsafe-rpc-external` 但不推荐验证人节点开启 |    无    |     无     |
| ws-external  | 监听所有 ws，验证人节点需要使用 `--unsafe-ws-external` 但不推荐验证人节点开启 |    无    |     无     |
|     port     |                           p2p 端口                           |  端口号  |    数字    |
|   rpc-port   |                           rpc 端口                           |  端口号  |    数字    |
|   ws-port    |                           ws 端口                            |  端口号  |    数字    |
|  base-path   |                  保存用于链的各种数据的地址                  |   路径   |   字符串   |
|     name     |                          节点的名称                          |  节点名  |   字符串   |
|   rpc-cors   |                         请求头白名单                         | 过滤类型 |    枚举    |
|  bootnodes   |   用来获取启动数据的种子节点（/ip4/0.0.0.0/tcp/0/p2p/xxx）   | 节点 URL | 字符串数组 |

查看所有参数

```bash
./darwinia --help
```

如遇问题请先仔细查看文档，如果无法解决，欢迎[提交 issue]("https://github.com/darwinia-network/darwinia/issues/new")。

