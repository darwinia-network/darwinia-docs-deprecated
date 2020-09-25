---
id: wiki-tut-node
title: 如何运行一个节点
sidebar_label: 运行节点
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/wiki-tut-node.md
---

## 节点准备

想要成功运行一个区块链节点，你需要一份可执行文件，Darwinia 提供以下两种方式供您选择。

1. 下载可执行文件

	https://github.com/darwinia-network/darwinia/releases/tag/v0.7.0

2. 源码编译出可行性文件

	请参考[源码编译可执行文件](https://github.com/darwinia-network/darwinia#41-hacking-on-darwinia)。

## 节点启动

```sh
$ ./darwinia --base-path <YourDataDir> --name <YourNodeName>
```

或者通过 Docker 方式启动：

```sh
$ docker run -d -v <YourDataDir>:/data -p 30333:30333 darwinianetwork/darwinia:v0.7.0 \
	--base-path /data \
	--name <YourNodeName> \
	--validator
```

> 建议使用 systemctl，pm2，screen 等工具来维护进程后台运行。
