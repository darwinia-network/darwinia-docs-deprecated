---
id: bridge-relayer-clients
title: Relayer Clients
sidebar_label: Relayer Clients
sidebar_position: 9
---

Currently, About Darwinia we have the following related bridges.

| Bridge             | Description                             |
| ------------------ | --------------------------------------- |
| Darwinia &lt;&gt; Ethereum | Implemented and running                 |
| Darwinia &lt;&gt; Crab     | Planning, We already have a test bridge |
| Darwinia &lt;&gt; Bsc      | Planning                                |

## Bridger
All bridges are implemented in the bridger project. The bridger project has been designed as a common bridge solution. The bridger also supports multiple bridges running at the same time and have convenient event scheduling system.
For more information about bridger, you can see

- Code: [darwinia-network/bridger](https://github.com/darwinia-network/bridger/)
- Document: [Bridger Guide](https://itering.notion.site/Bridger-Guide-en-b5ae438609df41f682ab0efce3ddb98b)

### Bridge Darwinia &lt;&gt; Ethereum

The Darwinia has implemented Ethereum bridge and is already in work. This is a two-way bridge that can freely relay transactions between the two parties to the other chain.

- Code: [darwinia-network/bridger/task/task-darwinia-ethereum](https://github.com/darwinia-network/bridger/tree/master/task/task-darwinia-ethereum)

### Bridge Darwinia &lt;&gt; Crab

This is the bridge we are planning. The test bridge [pangolin-pangoro](https://github.com/darwinia-network/bridger/blob/master/task/task-pangolin-pangoro) has been completed.
After the test bridge is stable, it will be implemented between darwinia-crab.
In the test bridge, we implemented an on-demand relay and implemented an incentive strategy.

### Bridge Darwinia &lt;&gt; Bsc

Bridge under planning and development
