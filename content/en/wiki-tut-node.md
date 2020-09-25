---
id: wiki-tut-node
title: How to run a node
sidebar_label: Running a node
---

## Node preparation

There are two way you can choose to obtain an node executable file.

1. Download the compiled executable file

	https://github.com/darwinia-network/darwinia/releases/tag/v0.7.0

2. Compile from source

	Refer to [Build from source](https://github.com/darwinia-network/darwinia#41-hacking-on-darwinia)

## Node run

To join the latest darwinia network node, just execute command below in your console:

```sh
$ ./darwinia --base-path <YourDataDir> --name <YourNodeName>
```

or docker:

```bash
$ docker run -d -v <YourDataDir>:/data -p 30333:30333 darwinianetwork/darwinia:v0.7.0 \
	--base-path /data \
	--name <YourNodeName> \
	--validator
```