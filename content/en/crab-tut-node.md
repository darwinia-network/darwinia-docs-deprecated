---
id: crab-tut-node
title: How to run a node
sidebar_label: Running a node
---

**#1 Create Account**

- Pay Attention
<br>`Set up a validator node, you need 2 available addresses, which are used as the [Stash Account] and [Controller Account].`
- Darwinia Web Wallet：
- Darwinia Block Explorer：
- Polkadot Telemetry：

**#2 Request RING**

- Faucet:

**#3 Run your validator**

**##3-1 Initial Set-up**

- Compile from source
<br>`Compiler environment configuration. Refer to sections 4.1 to 4.1.3` https://github.com/darwinia-network/darwinia#41-hacking-on-darwinia
<br>`Start command`
<br>`Enter the darwinia root directory`
<br>`cargo build --release`
<br>`The compiled executable file darwinia (.exe) can be found under darwinia / target / release`

- Download the compiled executable file
<br>`macOS Catalina:` https://github.com/darwinia-network/darwinia/releases/download/v0.4.6/macOS_Catalina.tar.gz
<br>`macOS Mojave:` https://github.com/darwinia-network/darwinia/releases/download/v0.4.6/macOS_Mojave.tar.gz
<br>`ArchLinux:` https://github.com/darwinia-network/darwinia/releases/download/v0.4.6/ArchLinux.tar.gz
<br>`Ubuntu:` https://github.com/darwinia-network/darwinia/releases/download/v0.4.6/Ubuntu.tar.gz
<br>`CentOS:` https://github.com/darwinia-network/darwinia/releases/download/v0.4.6/CentOS.tar.gz
<br>`Docker:` `docker pull darwinianetwork/darwinia:release-v0.4.6.2`

**##3-2 Execution**

- Read the configuration and start from the file (if not in the same folder, it is best to fill in the absolute path)

```
darwinia --conf=example.json
```

- Example configuration file example.json:

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

- Read the configuration from the command line and start

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

- Description of Parameters:

```
base-path: the address where the chain data is saved
key: The secret hex of the session key account, that is, its private key, the node needs to use it to sign the block, note that it is not the public key of the account.
port: p2p port
rpc-port: rpc port
ws-port: ws port
validator: Become a validator
name: the name displayed in telemetry
rpc-external: monitor all rpc(can not fill)
ws-external: monitor all ws(can not fill)
bootnodes: connected nodes (/ip4/35.234.35.49/tcp/6666/p2p/QmbKSNfeBGYiUiWAcpoeiM3pgAMagbRFXfWdgZ6nrT2koN)
```

- View all parameter descriptions:

```
./darwinia --help
```

- To avoid some seed nodes being fully connected, the following alternatives are provided, and you can choose to fill in bootnodes at will:

```
/ip4/35.234.35.49/tcp/6666/p2p/QmbKSNfeBGYiUiWAcpoeiM3pgAMagbRFXfWdgZ6nrT2koN
/ip4/35.234.35.49/tcp/20222/p2p/QmSEixwSMBLnkcAVSNenBLu1d3DoZfTFTFWE16BYSN4bMB
/ip4/121.199.60.87/tcp/20222/p2p/QmW26ydfXEALbj7Mm67czs4DxgKjyyMDW4ng9xGphSP1zu
```

**##3-3 Generate session key**

- Start your node

```
curl -H "Content-Type: application/json" --data '{ "jsonrpc":"2.0", "method":"author_rotateKeys", "params":[],"id":1 }' http://localhost:23332
```

```
23332 is rpc-port specified when you started the node
```

- After the startup is successful, the console log as follows:

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

```
That means the node is already synchronizing data.
```

**#4 Validate**

**##4-1 Check your address**

- Enter Darwinia Web Wallet and make sure you already have 2 available addresses, including the Session Key above. 
- Change the current account to the Stash Account of the custody asset.

**##4-2 Staking**

- [Node] on the left menu bar and click [Staking Now]
<br>`Validator please select [Node], Nominator please select [Nomination], "Nominator" and "Validator" are two mutually exclusive identities.`

- [Bond Funds] window pops up, you can bond RING / KTON, set bond parameters.
<br>`[Controller Account]: It is used to manage verification, voting and other activities, and cannot be reused.`
<br>`[Payment Destination]: The address used to earn rewards.`
<br>`[Value Bonded]: Enter the Value to be bonded (accuracy is 9) and Fund Type(RING / KTON).`
<br>`[Lock Limit]: The bonding limit can be set from 3 to 36 months. After bonding, you will get extra KTON rewards.`
<br>`[You Will Get]: Power/KTON estimates based on the Value and Limit of bonded funds you set.`

**##4.3 Bond More / Unbond**

- In the [Power Manager] of the [Nomination] page on the left menu bar, click [Bond] to add more bonded funds, and click "Unbond" to unbond funds.
<br>`1) [Unbonding] funds have a 14-day unbonding period. After the unbonding period, they will be automatically released to the account [Available].`
<br>`2) RING with Lock Limit, please go to the [Assets] on the left menu bar and go to the [Bond History] to unbond the time limit. Then return to this page and use the Unbond fund.`
<br>`3) Unbonding a RING with Lock Limit in advance requires paying a 3x penalty for KTON rewards.`

**##4.4 Set Session Key**

- After Bonded funds, it will enter the set session key process. 
- Fill in the generated Session Key here. For the generation method, reference [Starting a node] - [Generate Session Key].
<br>`1) You can skip it temporarily and set it up after ensuring that the node runs stably. `
<br>`2) Be sure to bind the real Session Key, and make sure that the node is running before participating in the verification, otherwise you may be penalized for missing blocks.`

**##4.5 Validate**

- Set Validator preferences and participate in node elections. Be sure that the node is running before participating in verification.
<br>`[Node Name]: Node name`
<br>`[Reward Commission]: the proportion of the node's retained revenue (this part will not be shared with the voter and will be exclusively owned by the node)`

**Now you can go to [Explorer] to check your validator nodes. Election information is updated every 1000 blocks / era, so thedata may be delayed, which is normal.**