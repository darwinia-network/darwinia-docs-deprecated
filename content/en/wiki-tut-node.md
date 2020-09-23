---
id: wiki-tut-node
title: How to run a node
sidebar_label: Running a node
---

## Initial Set-up

### Choose one of the following two ways to obtain an executable file

#### 1.Compile from source

- Rust environment preparation. Refer to https://github.com/darwinia-network/darwinia#41-hacking-on-darwinia

- Download source

  https://github.com/darwinia-network/darwinia/archive/v0.7.0.zip

- Enter the darwinia source directory

- cargo build --release

- The compiled executable file darwinia (.exe) can be found under darwinia target/release

#### 2.Download the compiled executable file

https://github.com/darwinia-network/darwinia/releases/tag/v0.7.0


## Start Parameters

## Start Node

### Full Node

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

### Validator Node

- The validator node runs for the first time

  The purpose is to expose the rpc port, and then add a key to the node through the rpc call. This key will be set as the session key when participating in staking), Refer to: [Become a Validator](wiki-tut-validator)

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

- The validator node general start command

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

It is recommended to use systemctl, pm2, screen and other tools to maintain the process.

### Common parameters

|  parameter   |                           Annotate                           | Subparameter | Subparameter type |
| :----------: | :----------------------------------------------------------: | :----------: | :---------------: |
|  validator   |             The node type is the validator node              |      /       |         /         |
| rpc-external | To monitor all rpc, the verifier node needs to use `--unsafe-rpc-external` but it is not recommended to enable the verifier node |      /       |         /         |
| ws-external  | To monitor all ws, the verifier node needs to use `--unsafe-ws-external` but it is not recommended to enable the verifier node |      /       |         /         |
|     port     |                           p2p port                           | port number  |      number       |
|   rpc-port   |                           rpc port                           | port number  |      number       |
|   ws-port    |                           ws port                            | port number  |      number       |
|  base-path   |      Address for storing various data used in the chain      |     path     |      String       |
|     name     |                          Node name                           |  Node name   |      String       |
|   rpc-cors   |                   Request header whitelist                   | Filter type  |     enumerate     |
|  bootnodes   | The seed node used to obtain startup data（/ip4/0.0.0.0/tcp/0/p2p/xxx） |   Node URL   |   String array    |

View all parameter:

```sh
./darwinia --help
```

If there are problems, welcome to [submit issue](https://github.com/darwinia-network/darwinia/issues/new).