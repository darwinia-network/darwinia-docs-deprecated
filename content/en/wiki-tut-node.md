---
id: wiki-tut-node
title: How to run a node
sidebar_label: Running a node
---

## Initial Setup

### Choose one of the following 3 ways to obtain an executable file

#### 1. Compile from source

- Compiler environment configuration. Refer to sections 4.1 to 4.1.3 https://github.com/darwinia-network/darwinia#41-hacking-on-darwinia
- Enter the darwinia root directory
- cargo build --release
- The compiled executable file darwinia (.exe) can be found under darwinia/target/release

#### 2. Download the compiled executable file

- https://github.com/darwinia-network/darwinia/releases

#### 3. Docker

- `docker pull quay.io/darwinia-network/darwinia:vx.x.x`

## Run


### Linux / MacOS

```sh
./darwinia \
    --base-path <YOUR_DATA_DIR> \
    --name <YOUR_NODE_NAME>
```

Add the `--ws-external` and `--rpc-cors all` options if you want to [remotely connect to this node](https://wiki.polkadot.network/docs/en/maintain-wss):

```
./darwinia \
    --base-path <YOUR_DATA_DIR> \
    --name <YOUR_NODE_NAME> \
    --ws-external \
    --rpc-cors all
```

### Docker

```
docker run -it \
    -v <YOUR_DATA_DIR>:/data \
    darwinianetwork/darwinia:vx.x.x \
        --base-path /data \
        --name <YOUR_NODE_NAME>
```

Add the `--ws-external` and `--rpc-cors all` options and map out the rpc ports if you want to [remotely connect to this node](https://wiki.polkadot.network/docs/en/maintain-wss):


```
docker run -it \
    -v <YOUR_DATA_DIR>:/data \
    -p <YOUR_NODE_HTTP_PORT>:9933 \
    -p <YOUR_NODE_WSS_PORT>:9944 \
    darwinianetwork/darwinia:vx.x.x \
        --base-path /data \
        --name <YOUR_NODE_NAME> \
        --ws-external \
        --rpc-cors all
```

### Other parameters

- `--target-gas-price`: Node with `darwinia` version higher than v0.11.1 can set the dvm gas price
    with `--target-gas-price=xxx`, the current recommended value is `5000000000`.

#### View all parameters

```
./darwinia --help
```

> It is recommended to use systemctl, pm2, tmux, screen and other tools to maintain the process.


