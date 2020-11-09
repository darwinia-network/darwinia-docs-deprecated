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
$ ./darwinia --base-path <YourDataDir> --name <YourNodeName> --chain darwinia
```

or docker:

```bash
$ docker run -it -v <YourDataDir>:/data -p 30333:30333 darwinianetwork/darwinia:v0.7.0 \
	--base-path /data \
	--name <YourNodeName> \
	--chain darwinia
```


The output:

```sh
2020-09-27 00:57:11.483 main INFO darwinia_cli::command    _____                      _       _       
2020-09-27 00:57:11.483 main INFO darwinia_cli::command   |  __ \                    (_)     (_)      
2020-09-27 00:57:11.483 main INFO darwinia_cli::command   | |  | | __ _ _ ____      ___ _ __  _  __ _ 
2020-09-27 00:57:11.483 main INFO darwinia_cli::command   | |  | |/ _` | '__\ \ /\ / / | '_ \| |/ _` |
2020-09-27 00:57:11.483 main INFO darwinia_cli::command   | |__| | (_| | |   \ V  V /| | | | | | (_| |
2020-09-27 00:57:11.483 main INFO darwinia_cli::command   |_____/ \__,_|_|    \_/\_/ |_|_| |_|_|\__,_|
2020-09-27 00:57:11.483 main INFO sc_cli::runner  Darwinia
2020-09-27 00:57:11.483 main INFO sc_cli::runner  ✌️  version 0.7.0-3160101-x86_64-linux-gnu
2020-09-27 00:57:11.483 main INFO sc_cli::runner  ❤️  by Darwinia Network <hello@darwinia.network>, 2018-2020
2020-09-27 00:57:11.483 main INFO sc_cli::runner  📋 Chain specification: Darwinia CC1
2020-09-27 00:57:11.483 main INFO sc_cli::runner  🏷  Node name: node
2020-09-27 00:57:11.483 main INFO sc_cli::runner  👤 Role: FULL
2020-09-27 00:57:11.483 main INFO sc_cli::runner  💾 Database: RocksDb at ./data/chains/darwinia/db
2020-09-27 00:57:11.483 main INFO sc_cli::runner  ⛓  Native runtime: Darwinia-1 (Darwinia-0.tx0.au0)
2020-09-27 00:57:12.663 main INFO sc_service::client::client  🔨 Initializing Genesis block/state (state: 0x192d…81ef, header-hash: 0x729c…1db8)
2020-09-27 00:57:12.680 main INFO afg  👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2020-09-27 00:57:12.907 main INFO sc_consensus_slots  ⏱  Loaded block-time = 6000 milliseconds from genesis on first-launch
2020-09-27 00:57:12.907 main INFO babe  👶 Creating empty BABE epoch changes on what appears to be first startup.
2020-09-27 00:57:12.907 main INFO sub-libp2p  🏷  Local node identity is: 12D3KooWQUpjrhnXiKhtWPq1XchQujECDj1i89NxmHtqS4dZFVFL (legacy representation: QmYGg1xADtFAESDxJ4bhoExSGDyLT87PXA7G7fLjkEZk7z)
2020-09-27 00:57:12.908 main INFO sc_service::builder  📦 Highest known block at #0
2020-09-27 00:57:12.908 tokio-runtime-worker INFO substrate_prometheus_endpoint::known_os  〽️ Prometheus server started at 127.0.0.1:9615
2020-09-27 00:57:17.912 tokio-runtime-worker INFO substrate  💤 Idle (0 peers), best: #0 (0x729c…1db8), finalized #0 (0x729c…1db8), ⬇ 0.1kiB/s ⬆ 0.4kiB/s
2020-09-27 00:57:17.972 tokio-runtime-worker INFO sub-libp2p  🔍 Discovered new external address for our node: /ip4/220.191.124.203/tcp/30333/p2p/12D3KooWQUpjrhnXiKhtWPq1XchQujECDj1i89NxmHtqS4dZFVFL
2020-09-27 00:57:22.913 tokio-runtime-worker INFO substrate  ⚙️  Syncing 122.1 bps, target=#9458 (2 peers), best: #611 (0x2d67…a720), finalized #512 (0xf071…4087), ⬇ 161.4kiB/s ⬆ 1.9kiB/s
2020-09-27 00:57:27.915 tokio-runtime-worker INFO substrate  ⚙️  Syncing 151.1 bps, target=#9459 (3 peers), best: #1367 (0x19a8…83f4), finalized #1024 (0x702d…fd7c), ⬇ 99.0kiB/s ⬆ 2.0kiB/s
2020-09-27 00:57:32.916 tokio-runtime-worker INFO substrate  ⚙️  Syncing 110.5 bps, target=#9460 (5 peers), best: #1920 (0xd96c…b239), finalized #1536 (0x89e9…06ed), ⬇ 8.3kiB/s ⬆ 4.8kiB/s
2020-09-27 00:57:37.918 tokio-runtime-worker INFO substrate  ⚙️  Syncing  0.0 bps, target=#9461 (7 peers), best: #1920 (0xd96c…b239), finalized #1536 (0x89e9…06ed), ⬇ 21.0kiB/s ⬆ 10.2kiB/s
2020-09-27 00:57:42.918 tokio-runtime-worker INFO substrate  ⚙️  Syncing 34.2 bps, target=#9462 (8 peers), best: #2091 (0x3047…5dc5), finalized #2048 (0x6cf0…fb27), ⬇ 10.0kiB/s ⬆ 5.6kiB/s
2020-09-27 00:57:44.931 tokio-runtime-worker INFO darwinia-staking  era_duration: 14394000, living_time: 0, total_left: 7999999999999700012, payout_fraction: Perbill(500000000)
2020-09-27 00:57:47.921 tokio-runtime-worker INFO substrate  ⚙️  Syncing 134.5 bps, target=#9462 (12 peers), best: #2764 (0xcdac…6db9), finalized #2560 (0xcc34…e79d), ⬇ 9.9kiB/s ⬆ 6.1kiB/s
2020-09-27 00:57:52.921 tokio-runtime-worker INFO substrate  ⚙️  Syncing 135.4 bps, target=#9463 (15 peers), best: #3441 (0x1ac6…119f), finalized #3072 (0x8326…a08f), ⬇ 13.3kiB/s ⬆ 8.9kiB/s
```

The output indicates the node has started to synchronize with Darwinia main network, the node started successfully.

> It is recommended to use systemctl, pm2, screen, tmux and other tool to maintain the process background.

Using `--help` to expore all operations of node if you are interested.

```
$ ./darwinia --help
```