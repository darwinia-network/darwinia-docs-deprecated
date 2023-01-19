---
sidebar_position: 110
---

# Glossary

## Endpoint

The cross-chain operation entry. An endpoint is a smart contract which is used by Dapps to do cross-chain operations. 

The endpoint contract is created and deployed by the Dapp developer. After that Dapp can call the endpoint to do cross-chain operations.

```js
contract YourEndpoint is MessageEndpoint {...}
```

```js
contract YourDapp {
    YourEndpoint endpoint;

    constructor(YourEndpoint _endpoint) {
        endpoint = _endpoint;
    }
   
    function foo() {
        YourEndpoint(endpoint).remoteExecute(...);
    }
}
```

## Source Chain

The blockchain from which the messages are sent.

## Target Chain

THe blockchain that receives cross-chain messages.

## Application layer

Where Dapps are located, Dapps developers use the SDK to call the message layer to send cross-chain messages.

## Message layer

Responsible for the delivery of cross-chain messages, sending messages from the source chain to the target chain.

The message layer provides the application layer with an interface for sending cross-chain messages.

## Truth layer

Responsible for the trust between blockchains.
It is responsible for messages that can eventually be trusted by the target chain. This layer is implemented by adversary light clients running on different blockchains. Dapp developers don't need to care this layer.

## Message

Here, this refers to cross-chain messages. Dapps on the source chain use messages to call functions with parameters on the target chain. Similar to the Remote Procedure Call or RPC. A message contains data that identifies the source program, the target program, and the target program is expected to understand.

The message is sent by the source chain application layer and finally delivered to the target chain.

## Relayer

The intermediary of cross-chain data is responsible for fetching data from one blockchain and then sending the data to the other side.

## Channel & Lane

Channels facilitate the transfer of data in one direction. A channel consists of a sender `outboundLane` of the source chain and a receiver `inboundLane` of the target chain. Any user or system that wants to send a message on the bridge must submit it to the `outboundLane`. The message layer supports multiple channels and provides different deliverability guarantees for messages, such as message replay protection, message order or out-of-order guarantee, etc.

Messages sent over the channel are assigned a unique (for this channel) strictly increasing integer value of the nonce. Messages sent over the same channel are guaranteed to be sent to the target chain in the same order they were sent from the source chain. In other words, messages with nonce `N` will be delivered before nonce `N+1`.

A single message channel can be thought of as a transport channel for a single application (on-chain, off-chain, or hybrid).

## Light client

Light clients are a key element in the blockchain ecosystem. They help users access and interact with the blockchain in a secure and decentralized way without synchronizing the entire blockchain, [more info](https://www.parity.io/blog/what-is-a-light-client/). Darwinia's cross-chain message verification is based on on-chain light client. There is a light client of the target in the source chain, and vice versa.

Darwinia has applied many technologies. On the premise of meeting the needs of cross-chain verification, light clients require very few resources.

