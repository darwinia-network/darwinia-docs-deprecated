---
id: bridge-relayer-clients
title: Relayer Clients
sidebar_label: Relayer Clients
sidebar_position: 3
---

Currently, About Darwinia we have the following related bridges.

| Bridge             | Description                             |
| ------------------ | --------------------------------------- |
| Darwinia &lt;&gt; Ethereum | Implemented and running                 |
| Darwinia &lt;&gt; Crab     | Planning, We already have a test bridge |
| Darwinia &lt;&gt; Bsc      | Planning                                |

## Bridger
All bridges are implemented in the bridger project. The bridger project has been designed as a generic bridge solution. The bridger also supports multiple bridges running at the same time and has convenient event scheduling system.

For more information about bridger, you can see

- Code: [darwinia-network/bridger](https://github.com/darwinia-network/bridger/)
- Document: [Bridger Guide](https://itering.notion.site/Bridger-Guide-en-b5ae438609df41f682ab0efce3ddb98b)

### Bridge Darwinia &lt;&gt; Ethereum

Darwinia has implemented Ethereum bridge, and it is already in operation. It is a two-way bridge that can relay transactions between the two networks back and forth.

- Code: [darwinia-network/bridger/task/task-darwinia-ethereum](https://github.com/darwinia-network/bridger/tree/master/task/task-darwinia-ethereum)

### Bridge Darwinia &lt;&gt; Crab

This is the bridge we are planning. The test bridge [Pangolin &lt;&gt; Pangoro](https://github.com/darwinia-network/bridger/blob/master/task/task-pangolin-pangoro) has been completed.
When the test bridge becomes stable, it will be implemented between Darwinia and Crab.
In the test bridge, we have implemented the on-demand relay mechanism and an incentivisation strategy.

### Bridge Darwinia &lt;&gt; Bsc

Bridge under planning and development.
