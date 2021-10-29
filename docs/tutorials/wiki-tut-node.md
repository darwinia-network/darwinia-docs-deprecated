---
id: wiki-tut-node
title: How to run a node
sidebar_label: Running a node
sidebar_position: 7
---

## Clone and Build

The [darwinia-network/darwinia](https://github.com/darwinia-network/darwinia) repo's master branch contains the latest Darwinia code.

```sh
$ git clone https://github.com/darwinia-network/darwinia.git
$ cd darwinia && cargo build --release
```
Alternatively, if you wish to use a specific release, you can download the binary from release page.(`v0.11.4` in the example below):

```sh
$ wget https://github.com/darwinia-network/darwinia/releases/download/v0.11.4/darwinia-x86_64-linux-gnu.tar.bz2
```

## Run


### Linux / MacOS

```sh
$ ./darwinia --name my-darwinia-node
```

Add the `--ws-external` and `--rpc-cors all` options if you want to [remotely connect to this node](https://wiki.polkadot.network/docs/en/maintain-wss):

```
$ ./darwinia --name my-darwinia-node --ws-external --rpc-cors all
```

### Docker

```
$ docker run -it -v node-data:/darwinia/data quay.io/darwinia-network/darwinia:v0.11.4 --base-path /darwinia/data --name my-darwinia-node
```

Add the `--ws-external` and `--rpc-cors all` options and map out the rpc ports if you want to [remotely connect to this node](https://wiki.polkadot.network/docs/en/maintain-wss):


```
$ docker run -it -v node-data:/darwinia/data quay.io/darwinia-network/darwinia:v0.11.4 --base-path /darwinia/data --name my-darwinia-node --ws-external --rpc-cors all
```

> It is recommended to use systemctl, pm2, tmux, screen and other tools to maintain the process.

## Appendix--Darwinia and Crab Network Database Snapshot

Darwinia provides the node database snapshots for node maintainers. It enables maintainers to download the latest snapshot, unarchive, and start a node instantly without syncing from block zero.

Available Snapshots
Darwinia Network: https://snapshots.darwinia.network
Crab Network: https://snapshots.crab.network
The number in the file names indicates the block height of the snapshot. For example, the block number of snapshot darwinia-3468533.tar.zst is 3468533.

Usage
For Kubernetes users, please use [snapshot-init-container](https://github.com/darwinia-network/snapshot-init-container).

1. Install zstd:

```
# Debian, Ubuntu
apt install zstd
# CentOS, Rad Hat
dnf install zstd
# Arch Linux
pacman -S zstd
```

2. Download the snapshot archive and extract:

Copy the snapshot archive URL from https://snapshots.darwinia.network (Darwinia Network) or https://snapshots.crab.network (Crab Network). Always choosing the latest snapshot with the highest block number is strongly recommended.

```
wget -c https://snapshots.darwinia.network/darwinia-xxxx.tar.zst # the snapshot URL
tar xv --zstd -f darwinia-xxxx.tar.zst -C /path/to/chain-dir # Or tar xv -I zstd -f darwinia-xxxx.tar.zst -C /path/to/chain-dir
```

It's worth noting that `/path/to/chain-dir` depends on two factors: 1) the node CLI option --base; 2) the chain name. For example, assume with --base /data, the chain dirs for networks are:

    * Darwinia Network: /data/chains/darwinia
    * Crab Network: /data/chains/crab

3. Run the validator (optional):

If you want to use the snapshot to initialize a validator node, please notice that the node CLI options --unsafe-pruning and --pruning=xxx are required since the database format of the snapshots are not "archived". For example, to run a darwinia validator:

```
darwinia --validator --unsafe-pruning --pruning=15000
```

**Thanks To**
https://polkashots.io/


