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

- macOS Catalina: https://github.com/darwinia-network/darwinia/releases/download/v0.6.1/darwinia-catalina.tar.gz
- ArchLinux: https://github.com/darwinia-network/darwinia/releases/download/v0.6.1/darwinia-archlinux.tar.gz
- Ubuntu: https://github.com/darwinia-network/darwinia/releases/download/v0.6.1/darwinia-ubuntu.tar.gz
- CentOS: https://github.com/darwinia-network/darwinia/releases/download/v0.6.1/darwinia-centos7.tar.gz
- Docker: `docker pull darwinianetwork/darwinia:release-v0.6.1`


## Start Parameters

### Choose one of the following two starting methods

#### 1.Read the configuration and start from the file (Not currently supported)

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

### Common parameters

|  parameter   |                                                             Annotate                                                             | Subparameter | Subparameter type |
| :----------: | :------------------------------------------------------------------------------------------------------------------------------: | :----------: | :---------------: |
|  validator   |                                               The node type is the validator node                                                |      /       |         /         |
| rpc-external | To monitor all rpc, the verifier node needs to use `--unsafe-rpc-external` but it is not recommended to enable the verifier node |      /       |         /         |
| ws-external  |  To monitor all ws, the verifier node needs to use `--unsafe-ws-external` but it is not recommended to enable the verifier node  |      /       |         /         |
|     port     |                                                             p2p port                                                             | port number  |      number       |
|   rpc-port   |                                                             rpc port                                                             | port number  |      number       |
|   ws-port    |                                                             ws port                                                              | port number  |      number       |
|  base-path   |                                        Address for storing various data used in the chain                                        |     path     |      String       |
|     name     |                                                            Node name                                                             |  Node name   |      String       |
|   rpc-cors   |                                                     Request header whitelist                                                     | Filter type  |     enumerate     |
|  bootnodes   |                             The seed node used to obtain startup data（/ip4/0.0.0.0/tcp/0/p2p/xxx）                              |   Node URL   |   String array    |

#### View all parameter descriptions:

```
./darwinia --help
```

## Start Node

### Start Command

```sh
./darwinia \
	-d /tmp/example \
	--bootnodes /ip4/0.0.0.0/tcp/0/p2p/xxx \
	--name Example
```

It is recommended to use systemctl, pm2, screen and other tools to maintain the process.

### Bootnodes

To avoid some seed nodes being fully connected, the following alternatives are provided, and you can choose to fill in bootnodes at will:

```sh
# maintain by @AurevoirXavier
/ip4/49.234.225.216/tcp/30333/p2p/12D3KooWFHNgAmrphmgcgukREKRrwWn6pZ6qQ8eFVXsRdnUQKZvL
/ip4/106.54.116.32/tcp/30333/p2p/12D3KooWKhcHAUCs2CUGA5NtRnRRarL4C5U7fVB4ycmHxDidZsrj
/ip4/35.234.33.88/tcp/30333/p2p/12D3KooWMCTzZVwJCafwPVQGxr8CkSK1VKmg5pbhjKjqgEwhywSe
# maintain by @clearloop
/ip4/122.152.213.162/tcp/30333/p2p/QmWfdcdFaiCr6gfJvh7jjmQ6hUGshA4BrGSLSDMuFBf823
# maintain by @HackFisher
/ip4/104.199.197.8/tcp/20222/p2p/Qmc9tW5xSVUH1EBdH8WEE5nYAuswGrRvtYZ93MAwH9fsZo
/ip4/104.199.197.8/tcp/30333/p2p/QmURDEZxHHVguYpfaDRAYfqYJSZT5LuBtK4mD7GXhfehtp
# maintain by @yanganto
/ip4/220.134.22.36/tcp/30333/p2p/Qme2VxbvZFxNbF3xKxWBQczRzbcudmny9n3eSube73ZmEw
```

### Q&A

- Q: Unable to start node
- A:
	1. Confirm that the system supports the executable file
	1. Some dynamic link library dependencies are missing, installation dependencies

- Q: Why does my node not synchronize blocks
- A:
	1. Check if bootnodes are filled in incorrectly
	1. Poor network communication with the target node, try other bootnodes
	1. The number of target node connections is full, try other bootnodes
	1. Confirm that the version numbers are consistent (in most cases, they do not need to be identical)

- If there are still problems, welcome [Submit issue](https://github.com/darwinia-network/darwinia/issues/new）
