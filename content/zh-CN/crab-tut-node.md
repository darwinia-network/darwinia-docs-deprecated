---
id: crab-tut-node
title: 如何运行一个节点
sidebar_label: 运行节点
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/crab-tut-node.md
---

## 环境准备

### 以下两种获取可执行文件方式任选其一

#### 1.从源码编译

- 编译环境配置，参考从 4.1 到 4.1.3 小节之前 https://github.com/darwinia-network/darwinia#41-hacking-on-darwinia
- 启动命令行
- 进入 darwinia 根目录
- cargo build --release
- 可以在 darwinia/target/release 下面找到编译好的可执行文件 darwinia(.exe)

#### 2.下载可执行文件

- macOS Catalina: https://github.com/darwinia-network/darwinia/releases/download/v0.5.8/darwinia-catalina.tar.gz
- ArchLinux: https://github.com/darwinia-network/darwinia/releases/download/v0.5.8/darwinia-archlinux.tar.gz
- Ubuntu: https://github.com/darwinia-network/darwinia/releases/download/v0.5.8/darwinia-ubuntu.tar.gz
- CentOS: https://github.com/darwinia-network/darwinia/releases/download/v0.5.8/darwinia-centos7.tar.gz
- Docker: `docker pull darwinianetwork/darwinia:release-v0.5.8`

## 启动参数

### 以下两种启动方式任选其一

#### 1.从文件读取配置启动（暂不支持）

如不在同一文件夹下最好填写绝对路径

```
./darwinia --conf=example.json
```

配置文件 example.json 示例：

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

#### 2.从命令行读取配置启动

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

#### 查看所有参数

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

```sh
# 维护者 @AurevoirXavier
/ip4/49.234.225.216/tcp/30333/p2p/QmdEScYKoNjAQn18r1pCNc3CTYVoHZfJFNEzf9shsMsBHc
# 维护者 @clearloop
/ip4/122.152.213.162/tcp/30333/p2p/12D3KooWPwEXkoEYRk79QLhQDzCtfwsAGDhPJ4dYDkogpxyJZuYz
# 维护者 @HackFisher
/ip4/104.199.197.8/tcp/20222/p2p/Qmc9tW5xSVUH1EBdH8WEE5nYAuswGrRvtYZ93MAwH9fsZo
/ip4/104.199.197.8/tcp/30333/p2p/QmURDEZxHHVguYpfaDRAYfqYJSZT5LuBtK4mD7GXhfehtp
# 维护者 @yananto
/ip4/220.134.22.36/tcp/30333/p2p/Qme2VxbvZFxNbF3xKxWBQczRzbcudmny9n3eSube73ZmEw
```

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
