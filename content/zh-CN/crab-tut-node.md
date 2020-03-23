---
id: crab-tut-node
title: 如何运行一个节点
sidebar_label: 运行节点
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/crab-tut-node.md
---

## 环境准备

从源码编译

> 编译环境配置，参考从 4.1 到 4.1.3 小节之前 https://github.com/darwinia-network/darwinia#41-hacking-on-darwinia  
> 启动命令行  
> 进入 darwinia 根目录  
> cargo build --release  
> 可以在 darwinia/target/release 下面找到编译好的可执行文件 darwinia(.exe)

下载可执行文件

> macOS Catalina: https://github.com/darwinia-network/darwinia/releases/download/v0.4.6/macOS_Catalina.tar.gz  
> macOS Mojave: https://github.com/darwinia-network/darwinia/releases/download/v0.4.6/macOS_Mojave.tar.gz  
> ArchLinux: https://github.com/darwinia-network/darwinia/releases/download/v0.4.6/ArchLinux.tar.gz  
> Ubuntu: https://github.com/darwinia-network/darwinia/releases/download/v0.4.6/Ubuntu.tar.gz  
> CentOS: https://github.com/darwinia-network/darwinia/releases/download/v0.4.6/CentOS.tar.gz  
> Docker: `docker pull darwinianetwork/darwinia:release-v0.4.6.2`

## 执行

从文件读取配置启动（如不在同一文件夹下最好填写绝对路径）

```
darwinia --conf=example.json
```

配置文件 example.json 示例：

```
{
	"base-path": "/tmp/example",
	"bootnodes": [
		"/ip4/35.234.35.49/tcp/6666/p2p/QmbKSNfeBGYiUiWAcpoeiM3pgAMagbRFXfWdgZ6nrT2koN",
		"/ip4/35.234.35.49/tcp/20222/p2p/QmSEixwSMBLnkcAVSNenBLu1d3DoZfTFTFWE16BYSN4bMB",
		"/ip4/121.199.60.87/tcp/20222/p2p/QmW26ydfXEALbj7Mm67czs4DxgKjyyMDW4ng9xGphSP1zu"
	],

	"name": "Example",
	"validator": true,

	"rpc-external": true,
	"rpc-port": 23332,
	"ws-external": true,
	"ws-port": 23333,
	"rpc-cors": "all",
	"port": 23334
}
```

从命令行读取配置启动

```
./darwinia \
--base-path /path/to/data \
--validator \
--bootnodes /ip4/35.234.35.49/tcp/6666/p2p/QmbKSNfeBGYiUiWAcpoeiM3pgAMagbRFXfWdgZ6nrT2koN \
--port 20222 \
--name name \
--rpc-external \
--ws-external 
```

部分参数说明：

```
base-path: 保存链数据的地址
key: sessionkey 账号的secret hex，也就是它的私钥，节点需要用它来签块；注意，不是该账号的public key，不要写错
port: p2p端口
rpc-port：rpc 端口
ws-port：ws 端口
validator： 成为验证人
name： 在telemetry中显示的名字，随便写一个
rpc-external：监听所有 rpc
ws-external：监听所有 ws
bootnodes: 连接的节点(/ip4/35.234.35.49/tcp/6666/p2p/QmbKSNfeBGYiUiWAcpoeiM3pgAMagbRFXfWdgZ6nrT2koN)
```

查看所有参数说明：

```
./darwinia --help
```

为了避免有些种子节点满连接，提供以下备选，大家可以任意选择填入bootnodes:

```
/ip4/35.234.35.49/tcp/6666/p2p/QmbKSNfeBGYiUiWAcpoeiM3pgAMagbRFXfWdgZ6nrT2koN
/ip4/35.234.35.49/tcp/20222/p2p/QmSEixwSMBLnkcAVSNenBLu1d3DoZfTFTFWE16BYSN4bMB
/ip4/121.199.60.87/tcp/20222/p2p/QmW26ydfXEALbj7Mm67czs4DxgKjyyMDW4ng9xGphSP1zu
```

## 生成Session Key

启动节点

```
curl -H "Content-Type: application/json" --data '{ "jsonrpc":"2.0", "method":"author_rotateKeys", "params":[],"id":1 }' http://localhost:23332
```

> 23332 为你启动节点时指定的 rpc-port

启动成功后控制台日志如下:

```
|icefrog  | 2019-12-28 03:05:02   _____                      _       _
0|icefrog  | 2019-12-28 03:05:02  |  __ \                    (_)     (_)
0|icefrog  | 2019-12-28 03:05:02  | |  | | __ _ _ ____      ___ _ __  _  __ _
0|icefrog  | 2019-12-28 03:05:02  | |  | |/ _` | '__\ \ /\ / / | '_ \| |/ _` |
0|icefrog  | 2019-12-28 03:05:02  | |__| | (_| | |   \ V  V /| | | | | | (_| |
0|icefrog  | 2019-12-28 03:05:02  |_____/ \__,_|_|    \_/\_/ |_|_| |_|_|\__,_|
0|icefrog  | 2019-12-28 03:05:02 Chain specification: Darwinia IceFrog Testnet
0|icefrog  | 2019-12-28 03:05:02 Node name: Xavier ArchLinux Full Node
0|icefrog  | 2019-12-28 03:05:02 Roles: "FULL"
0|icefrog  | 2019-12-28 03:05:02 Highest known block at #964
0|icefrog  | 2019-12-28 03:05:02 Local node identity is: QmPdBsTDn19MCRpFKbcgbRon71EsXiqdXiGMhCrvecf3rJ
0|icefrog  | 2019-12-28 03:05:02 Discovered new external address for our node: /ip4/192.168.1.51/tcp/23334/p2p/QmPdBsTDn19MCRpFKbcgbRon71EsXiqdXiGMhCrvecf3rJ
0|icefrog  | 2019-12-28 03:05:02 Discovered new external address for our node: /ip4/120.195.64.114/tcp/23334/p2p/QmPdBsTDn19MCRpFKbcgbRon71EsXiqdXiGMhCrvecf3rJ
0|icefrog  | 2019-12-28 03:11:11 Local node identity is: QmfD2PcKB6BdL6KDnaBqqVx69iK4Ag1RogPdVj4h8JVzpz
0|icefrog  | 2019-12-28 03:11:11 New epoch 0 launching at block 0xf33e…73d2 (block slot 525814062 >= start slot 525814062).
0|icefrog  | 2019-12-28 03:11:11 Next epoch starts at slot 525814262
0|icefrog  | 2019-12-28 03:11:11 New epoch 1 launching at block 0xc984…dbd3 (block slot 525814262 >= start slot 525814262).
0|icefrog  | 2019-12-28 03:11:11 Next epoch starts at slot 525814462
0|icefrog  | 2019-12-28 03:11:11 New epoch 2 launching at block 0x3366…83e6 (block slot 525814462 >= start slot 525814462).
0|icefrog  | 2019-12-28 03:11:11 Next epoch starts at slot 525814662
0|icefrog  | 2019-12-28 03:11:11 Discovered new external address for our node: /ip4/192.168.1.51/tcp/23334/p2p/QmfD2PcKB6BdL6KDnaBqqVx69iK4Ag1RogPdVj4h8JVzpz
0|icefrog  | 2019-12-28 03:11:11 Discovered new external address for our node: /ip4/120.195.64.114/tcp/23334/p2p/QmfD2PcKB6BdL6KDnaBqqVx69iK4Ag1RogPdVj4h8JVzpz
0|icefrog  | 2019-12-28 03:11:11 New epoch 3 launching at block 0xf648…5b9e (block slot 525814662 >= start slot 525814662).
0|icefrog  | 2019-12-28 03:11:11 Next epoch starts at slot 525814862
0|icefrog  | 2019-12-28 03:11:11 New epoch 4 launching at block 0xeff5…6ed8 (block slot 525814862 >= start slot 525814862).
0|icefrog  | 2019-12-28 03:11:11 Next epoch starts at slot 525815062
0|icefrog  | 2019-12-28 03:11:11 New epoch 5 launching at block 0xae57…2026 (block slot 525815062 >= start slot 525815062).
0|icefrog  | 2019-12-28 03:11:11 Next epoch starts at slot 525815262
0|icefrog  | 2019-12-28 03:11:16 Idle (2 peers), best: #1109 (0xeeba…6ba5), finalized #1108 (0xf4dc…d410), ⬇ 71.7kiB/s ⬆ 4.9kiB/s
0|icefrog  | 2019-12-28 03:11:16 Imported #1110 (0xacf8…ebea)
0|icefrog  | 2019-12-28 03:11:19 Imported #1111 (0xbb21…f300)
0|icefrog  | 2019-12-28 03:11:21 Idle (3 peers), best: #1111 (0xbb21…f300), finalized #1109 (0xeeba…6ba5), ⬇ 4.1kiB/s ⬆ 2.9kiB/s
0|icefrog  | 2019-12-28 03:11:22 Imported #1112 (0xb5e5…a827)
0|icefrog  | 2019-12-28 03:11:25 Imported #1113 (0xcff1…527a)
0|icefrog  | 2019-12-28 03:11:26 Idle (2 peers), best: #1113 (0xcff1…527a), finalized #1111 (0xbb21…f300), ⬇ 4.0kiB/s ⬆ 2.3kiB/s
0|icefrog  | 2019-12-28 03:11:28 Imported #1114 (0xf6f0…f34b)
0|icefrog  | 2019-12-28 03:11:31 Idle (3 peers), best: #1114 (0xf6f0…f34b), finalized #1113 (0xcff1…527a), ⬇ 5.7kiB/s ⬆ 4.8kiB/s
0|icefrog  | 2019-12-28 03:11:31 Imported #1115 (0x2e68…e762)
0|icefrog  | 2019-12-28 03:11:34 Imported #1116 (0x3eb7…34fa)
```

即说明节点已经在同步数据。