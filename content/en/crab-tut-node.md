---
id: crab-tut-node
title: How to run a node
sidebar_label: Running a node
---

## Initial Set-up

### Choose one of the following two ways to obtain an executable file

#### 1.Compile from source

- Compiler environment configuration. Refer to sections 4.1 to 4.1.3 https://github.com/darwinia-network/darwinia#41-hacking-on-darwinia
- Start command
- Enter the darwinia root directory
- cargo build --release
- The compiled executable file darwinia (.exe) can be found under darwinia / target / release

#### 2.Download the compiled executable file

- macOS Catalina: https://github.com/darwinia-network/darwinia/releases/download/v0.5.7/darwinia-catalina.tar.gz
- ArchLinux: https://github.com/darwinia-network/darwinia/releases/download/v0.5.7/darwinia-archlinux.tar.gz
- Ubuntu: https://github.com/darwinia-network/darwinia/releases/download/v0.5.7/darwinia-ubuntu.tar.gz
- CentOS: https://github.com/darwinia-network/darwinia/releases/download/v0.5.7/darwinia-centos7.tar.gz
- Docker: `docker pull darwinianetwork/darwinia:release-v0.5.7`


## Execution

### Choose one of the following two starting methods

#### 1.Read the configuration and start from the file

If not in the same folder, it is best to fill in the absolute path.

```
darwinia --conf=example.json
```

Example configuration file example.json:

```
{
	"validator": true,
	"base-path": "/tmp/example",
	"bootnodes": [
		"/ip4/0.0.0.0/tcp/0/p2p/aaa",
		"/ip4/0.0.0.1/tcp/0/p2p/bbb",
		"/ip4/0.0.0.2/tcp/0/p2p/ccc"
	],
	"name": "Example"
}
```

#### 2.Read the configuration from the command line and start

```sh
./darwinia \
	-d /tmp/example \
	--bootnodes /ip4/0.0.0.0/tcp/0/p2p/xxx \
	--name Example
```

### 常用参数

|     参数     |                                      注释                                       |  子参数  | 子参数类型 |
| :----------: | :-----------------------------------------------------------------------------: | :------: | :--------: |
|  validator   |                              节点类型为验证人节点                               |    无    |     无     |
| rpc-external | 监听所有 rpc，验证人节点需要使用 `--unsafe-rpc-external` 但不推荐验证人节点开启 |    无    |     无     |
| ws-external  |  监听所有 ws，验证人节点需要使用 `--unsafe-ws-external` 但不推荐验证人节点开启  |    无    |     无     |
|     port     |                                    p2p 端口                                     |  端口号  |    数字    |
|   rpc-port   |                                    rpc 端口                                     |  端口号  |    数字    |
|   ws-port    |                                     ws 端口                                     |  端口号  |    数字    |
|  base-path   |                           保存用于链的各种数据的地址                            |   路径   |   字符串   |
|     name     |                                   节点的名称                                    |  节点名  |   字符串   |
|   rpc-cors   |                                  请求头白名单                                   | 过滤类型 |    枚举    |
|  bootnodes   |            用来获取启动数据的种子节点（/ip4/0.0.0.0/tcp/0/p2p/xxx）             | 节点 URL | 字符串数组 |

#### View all parameter descriptions:

```
./darwinia --help
```

## 启动节点

### 启动命令

```sh
./darwinia \
	-d /tmp/example \
	--bootnodes /ip4/0.0.0.0/tcp/0/p2p/xxx \
	--name Example
```

建议使用 systemctl，pm2，screen 等工具来维护进程。

### 种子节点

```
/ip4/175.24.95.3/tcp/30333/p2p/12D3KooWKdcGZkFe3y63dj8VWLH6xw3rB5QhhnoC8UenSscXFuqx
/ip4/35.234.33.88/tcp/30333/p2p/QmR4fARccJJA2o2Ac3fG2FcgatyGaoaZqUzymUDpvBZr7c
/ip4/35.234.9.96/tcp/30333/p2p/QmPPGpFMgqSm9ZeeHubZk8UXpKdZMNRCk4Wkymm181bpve
```

To avoid some seed nodes being fully connected, the following alternatives are provided, and you can choose to fill in bootnodes at will:

### Q&A

- Q：无法启动节点
- A：
	1. 确认系统支持该可执行文件
	1. 部分动态链接库依赖丢失，安装依赖

- Q：我的节点为什么不同步块
- A：
	1. 检查 bootnodes 是否填错
	1. 与目标节点网络通信差，尝试其他 bootnodes
	1. 目标节点连接数已满，尝试其他 bootnodes
	1. 确认版本号一致（多数情况下并不需要完全一致）

- ***如仍有问题，欢迎[提交 issue]("https://github.com/darwinia-network/darwinia/issues/new")***