---
sidebar_position: 2
---

# LCMP Overview

LCMP is Darwinia’s light-client cross-chain messaging protocol (former name: Darwinia bridge messages protocol). It allows one blockchain to send messages to another chain as long as they have established messaging channels with each other.

LCMP is designed to be a general-purpose protocol which means LCMP knows nothing about the Dapps running on it. 

## Design Principles

**Guaranteed delivery:**
When a cross-chain message has been successfully committed on the source chain, it will arrive the target chain as long as both chains are producing blocks.

**Trustless interoperability:**
Users are not required to trust any individual or party to behave honestly. The light-client model will ensure the transactions won’t be exploited by bad actors.

Notice: the source chain and the target chain must be secure.

**Generalized message**
The messages sent across blockchains can be encoded and decoded in an arbitrary way. The structure of messages is flexible which removes the complexity of building chain-specific integrations.    
Although the message format currently supports Substrate’s SCALE CODEC encoding and the Ethereum ABI format, the structure of messages is open to any format. In the near future, it will adopt Polkadot’s XCM format in order to be more general.

## High-level Overview

![high-level](/img/lcmpoverview-0.png)

LCMP is a cross-chain messaging protocol. LCMP has two layers in the design. One is the truth layer which contains the light client. Another is the message layer used to send cross-chain messages. The light client in the target chain’s truth layer is used to verify messages from the source chain.

As the diagram shows, there are four components across the source chain and the target chain.

The Dapp of the `App Layer` calls send_message of `Message Layer` to start a cross-chain operation. When send_message is executed, the `Relayer` forwards the message to the target chain, and the `Truth Layer` in the target chain checks the message and dispatches the task carried by the message. After dispatch, the `Relayer` forwards the confirmation message back to the source chain. This process actually includes two cross-chain processes.

![high-level](/img/lcmpoverview-1.png)

## Message Flow

Here we have a more detailed diagram with the inner components which might help you to understand the cross-chain messaging flow.

![message-flow](/img/lcmpoverview-2.png)

### Message Lifecycle

Once a user calls "send_message" of the source chain, a message is processed and the "MessageAccepted" event is emitted. Its initial status is "`undelivered`".

Once a relayer calls the "receive_messages_proof" of the target chain, the message will eventually enter the "`delivered`" status and emit the "MessageDispathed" event.

Once a relayer calls the "receive_messages_delivery_proof" of the source chain, the message finally enters the "`confirmed`" status and emits the "MessageDelivered" event.

![lifecycle](/img/lcmpoverview-3.png)

### Flow

1. send_message
    
    When a Dapp calls outbound's send_message function, outbound will store the message and emit a "MessageAccepted" event. The message is now in the "undelivered" status.
    
2. relay
    
    There are off-chain participants, called Relayers, who relay messages to blockchain on the other side. 
    
    The relayers take the "undelivered" messages and relay them. Relayer then crafts "receive_messages_proof()" transaction (aka delivery transaction) for the messages module instance, deployed at the target chain. Once a transaction is mined, the message is considered "delivered".
    
3. filter
    
    Developers can provide a custom filter on the target chain which is used to filter out messages that do not meet the condition.

    In the filter, developers should implement the interface `ICrossChainFilter` to decide which chain and account to send the message to. Messages that meet the conditions will continue to be processed. Otherwise, Otherwise, the message will be discarded.
  
    Some target chains without smart contract support can only have a built-in filter. If you need a custom filter, you might want to contact the chain developers.
    
4. dispatch
    
    The messages that pass the filter will be executed on the target chain to complete the tasks carried by these messages.
    
5. confirm

    Once a message is delivered, the relayer may want to confirm delivery back to the source chain. There are two reasons why he would want to do that. 

    The first is that we intentionally limit number of "delivered", but not yet "confirmed" messages at inbound lanes. So at some point, the target chain may stop accepting new messages until relayers confirm some of these. 

    The second is that if the relayer wants to be rewarded for delivery, he must prove the fact that he has actually delivered the message. And this proof may only be generated after the delivery transaction is mined. So relayer crafts the "receive_messages_delivery_proof()"" transaction (aka confirmation transaction) for the messages module instance, deployed at the source chain. Once this transaction is mined, the message is considered "confirmed".
    
    
6. callback
    
    On the source chain, developers can provide a callback that has some post-cross-chain actions.
    
    Notice: the callback will be called whether the cross-chain operation succeeded or failed, so this is also the correct place to handle the errors.
    
7. Reward
    
    Pay rewards to the relayers.
    
8. The relayers include the latest "`confirmed`" message in the next receive_messages_proof transaction, proving that some messages have been confirmed. The "`confirmed`" state is the final state of the message. But there is still something that needs to be done - the reward that has been paid to the relayers must be known to the target chain. Otherwise, it may reach the limit of unconfirmed messages on the target chain, which will cause the target chain to stop accepting new messages.  

![flow](/img/lcmpoverview-4.png)

Notice: the header relay of the light client is not shown in this diagram.
