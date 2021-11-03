---
id: bridge-indexer
title: Realtime Indexer 
sidebar_label: Realtime Indexer
sidebar_position: 6
---

The Graph is a decentralized and open-source protocol for indexing and querying data from blockchains. It is very difficult to query data directly from blockchains. And The Graph makes it easy to save data from blockchain to database and query. The Darwinia DVM is compatible with EVM, we suggest using The Graph as the indexer. Developers can easily deploy The Graph Node, build APIs called Subgraphs, and query data from it. The data is saved in postgres, and with a standard GraphQL API to query. For more detail of the usage of The Graph, you can visit their [docs](https://thegraph.com/docs/about/introduction).

Here we introduce you about how to deploy a local The Graph Node, create and deploy a Subgraph to listen event from DVM contract.

## The Graph Node
The docker-compose file is like this. Before start the server, you need to set a URL for the network. Here we use the Darwinia testnet `pangolin` http://pangolin-rpc.darwinia.network.
```
version: '3'
services:
  graph-node:
    image: graphprotocol/graph-node
    ports:
      - '8000:8000'
      - '8001:8001'
      - '8020:8020'
      - '8030:8030'
      - '8040:8040'
    depends_on:
      - ipfs
      - postgres
    environment:
      postgres_host: postgres
      postgres_user: graph-node
      postgres_pass: let-me-in
      postgres_db: graph-node
      ipfs: 'ipfs:5001'
      ethereum: 'pangolin:http://pangolin-rpc.darwinia.network'
      GRAPH_LOG: info
  ipfs:
    image: ipfs/go-ipfs:v0.4.23
    ports:
      - '5001:5001'
    volumes:
      - ./data/ipfs:/data/ipfs
  postgres:
    image: postgres
    ports:
      - '5432:5432'
    command: ["postgres", "-cshared_preload_libraries=pg_stat_statements"]
    environment:
      POSTGRES_USER: graph-node
      POSTGRES_PASSWORD: let-me-in
      POSTGRES_DB: graph-node
    volumes:
      - ./data/postgres:/var/lib/postgresql/data

```

To start The Graph Node docker server, enter the command
```
docker-compose up -d
```

The server will open some ports to support subgraph depoly, graphQL query, etc.

| Port  |  Usage            |
| ----- | ----------------- |
|  8000 |  GraphQL(http)    |
|  8001 |  GraphQL(ws)      |
|  8020 |  Subgraph(deploy) |

## Deploy Subgraph

If you're creating a new project, you can enter the following command to generate a demo.
Before do this, please prepare a contract and the ABI file of the contract. For example, we have such a contract and deploy it at address `0xA6BDC789074A8b5C6eA697EE74B2e3a363b2dAA1`.

```js
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract TheGraphExample {
    event TestEvent(address indexed sender);

    function triggerTestEvent () external {
        emit TestEvent(msg.sender);
    }
}
```

the ABI file is `example.json`
```json
[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "TestEvent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "triggerTestEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
```
Then enter the follow command to generate a subgraph project.
```
graph init --product subgraph-studio. --abi
```
follow the steps, then you can have this output.
```js
>> graph init --product subgraph-studio. --abi
✔ Product for which to initialize · hosted-service
✔ Subgraph name · example/TheGraphExample
✔ Directory to create the subgraph in · TheGraphExample
✔ Ethereum network · ropsten
✔ Contract address · 0xA6BDC789074A8b5C6eA697EE74B2e3a363b2dAA1
✔ ABI file (path) · ./example.json
✔ Contract Name · TheGraphExample
———
  Generate subgraph from ABI
  Write subgraph to directory
✔ Create subgraph scaffold
✔ Initialize subgraph repository
✔ Install dependencies with yarn
✔ Generate ABI and schema types with yarn codegen

Subgraph example/TheGraphExample created in TheGraphExample

Next steps:

  1. Run `graph auth` to authenticate with your deploy key.

  2. Type `cd TheGraphExample` to enter the subgraph.

  3. Run `yarn deploy` to deploy the subgraph.

Make sure to visit the documentation on https://thegraph.com/docs/ for further information.
```
A Subgraph project has three parts.
### schema.graphql
This used to define the entity used. For example
```graphql
type ExampleEntity @entity {
  id: ID!
  count: BigInt!
  sender: Bytes! # address
}
```
Once you modify this schema file, you need regenerate the TypeScript types for The Graph, running:
```js
>> npx graph codegen --output-dir generated/
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Load contract ABI from abis/TheGraphExample.json
✔ Load contract ABIs
  Generate types for contract ABI: TheGraphExample (abis/TheGraphExample.json)
  Write types to generated/TheGraphExample/TheGraphExample.ts
✔ Generate types for contract ABIs
✔ Generate types for data source templates
✔ Load data source template ABIs
✔ Generate types for data source template ABIs
✔ Load GraphQL schema from schema.graphql
  Write types to generated/schema.ts
✔ Generate types for GraphQL schema

Types generated successfully
```
### subgraph.yaml
This file tells you the basic infomation of the subgraph(contract address, abi, event...) and which network to use.
```yaml
specVersion: 0.0.2
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum/contract
    name: TheGraphExample
    network: pangolin
    source:
      address: "0xA6BDC789074A8b5C6eA697EE74B2e3a363b2dAA1"
      abi: TheGraphExample
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.4
      language: wasm/assemblyscript
      entities:
        - TestEvent
      abis:
        - name: TheGraphExample
          file: ./abis/TheGraphExample.json
      eventHandlers:
        - event: TestEvent(indexed address)
          handler: handleTestEvent
      file: ./src/mapping.ts
```
### AssemblyScript mappings
In this file, users define their own logic to save the event as entities.
```js
import { BigInt } from "@graphprotocol/graph-ts"
import {
  TheGraphExample,
  TestEvent
} from "../generated/TheGraphExample/TheGraphExample"
import { ExampleEntity } from "../generated/schema"

export function handleTestEvent(event: TestEvent): void {
  let entity = ExampleEntity.load(event.transaction.from.toHex())
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.sender = event.params.sender
  entity.save()
}
```
### Deploy
First we need to create the subgraph on The Graph server.
```js
>> npx graph create example/TheGraphExample --node http://127.0.0.1:8020
Created subgraph: example/TheGraphExample
```
Then we deploy it to the server.
```js
>> npx graph deploy example/TheGraphExample --ipfs http://localhost:5001 --node http://localhost:8020
✔ Version Label (e.g. v0.0.1) ·
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: TheGraphExample => build/TheGraphExample/TheGraphExample.wasm
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/TheGraphExample/abis/TheGraphExample.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmVRyRF12mxYcKAd9YfsiXkeHHc79wkU5LqWLDinrfnmbg
  Add file to IPFS build/TheGraphExample/abis/TheGraphExample.json
                .. QmTDhpdjATMtKcmxoeAR9nZ59fhhm2cJ1xuQ5dikJiWNyL
  Add file to IPFS build/TheGraphExample/TheGraphExample.wasm
                .. QmTDJcE1hZ1cbSa9kTx7iGVQ5VM2H8XVg7tQKCRwz3iSwZ
✔ Upload subgraph to IPFS

Build completed: QmSAjoWQcHa9B56DGuE3WTSahWR3dTy7d7VpVNuWj3VFmS

Deployed to http://localhost:8000/subgraphs/name/example/TheGraphExample/graphql

Subgraph endpoints:
Queries (HTTP):     http://localhost:8000/subgraphs/name/example/TheGraphExample
Subscriptions (WS): http://localhost:8001/subgraphs/name/example/TheGraphExample
```
After we deploy the subgraph, the server start to scan blocks. Wait for the scan result and then we can use the Subgraph endpoints `http://localhost:8000/subgraphs/name/example/TheGraphExample` to query the entity.
