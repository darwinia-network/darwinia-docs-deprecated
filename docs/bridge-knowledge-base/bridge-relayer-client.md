---
id: bridge-relayer-clients
title: Relayer Clients
sidebar_label: Relayer Clients
sidebar_position: 9
---

Currently, About Darwinia we have the following related bridges.

| Bridge             | Description                             |
| ------------------ | --------------------------------------- |
| Darwinia<>Ethereum | Implemented and running                 |
| Darwinia<>Crab     | Planning, We already have a test bridge |
| Darwinia<>Bsc      | Planning                                |

## Bridger
All bridges are implemented in the bridger project. The bridger project has been designed as a common bridge solution. supports multiple bridges running at the same time. There is a convenient event scheduling system.
For more information about bridger, you can see

- Code: [darwinia-network/bridger](https://github.com/darwinia-network/bridger/)
- Document: [Bridger Guide](https://www.notion.so/itering/Dawinia-Bridge-instance-2abfc9e3bbcf4a0796189fad53d9fab9#d8f494d045e24435847f2b73eda98546)

### Bridge Darwinia<>Ethereum

The Darwinia has implemented Ethereum bridge and is already in work. This is a two-way bridge that can freely relay transactions between the two parties to the other chain.

- Code: [darwinia-network/bridger/task/task-darwinia-ethereum](https://www.notion.so/itering/Dawinia-Bridge-instance-2abfc9e3bbcf4a0796189fad53d9fab9#e970bc00ca4547b98337e6a873191a85)

### Bridge Darwinia<>Crab

This is the bridge we are planning. The test bridge [pangolin-pangoro](https://www.notion.so/itering/Dawinia-Bridge-instance-2abfc9e3bbcf4a0796189fad53d9fab9#5ae5f2c856924691a81ae51d1bd64a6e) has been completed.
After the test bridge is stable, it will be implemented between darwinia-crab.
In the test bridge, we implemented an on-demand relay and implemented an incentive strategy.

### Bridge Darwinia<>Bsc

Bridge under planning and development
