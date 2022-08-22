---
sidebar_position: 2
---

# Determining Cross-chain Status

## Events

The cross-chain status is determined by listening to events on the chain. There are two events related to cross-chain status:

- `MessageAccepted` event of source chain

  When a cross-chain transaction is sent successfully on the source chain, the "MessageAccepted" event will be emitted.

- `MessageDispatched` event of target chain

  When the tasks carried within a cross-chain message have been executed on the target chain, the "MessageDispatched" event will be emitted.

- `MessageDelivered` event of source chain

  When the cross-chain message has been confirmed on the source chain, the "MessageDelivered" event will be emitted.

## View events in Subscan

The cross-chain status can be viewed in [subscan.io](https://subscan.io/).

  `MessageAccepted`  
  https://CHAIN_NAME.subscan.io/event?module=bridgedarwiniamessages&event=messageaccepted

  `MessageDispatched`  
  https://CHAIN_NAME.subscan.io/event?module=bridgedarwiniadispatch&event=messagedispatched  

  `MessageDelivered`  
  https://CHAIN_NAME.subscan.io/event?module=bridgedarwiniamessages&event=messagesdelivered  

Replace "CHAIN_NAME" with the actual chain name.

## Track events with Darwinia.js

```javascript
// Initialise the provider to connect to the local node
const provider = new WsProvider('ws://127.0.0.1:9944');

// Create the API and wait until ready
const api = await ApiPromise.create({ provider, typesBundle:  typesBundleForPolkadotApps});
await api.isReady;

// Subscribe to system events via storage
api.query.system.events((events) => {
  console.log(`\nReceived ${events.length} events:`);

  // Loop through the Vec<EventRecord>
  events.forEach((record) => {
    // Extract the phase, event and the event types
    const { event, phase } = record;
    const types = event.typeDef;

    // Show what we are busy with
    console.log(`\t${event.section}:${event.method}:: (phase=${phase.toString()})`);
    console.log(`\t\t${event.meta.documentation.toString()}`);

    // Loop through each of the parameters, displaying the type and data
    event.data.forEach((data, index) => {
      console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
    });
  });
});
```

## Query transaction status

```javascript
async function main () {
  
  const wsProvider = new WsProvider(dw);
 // const address = "5DCqw8chJYP78V7KPXLr1HCf9TX9ixnorRiXJFdwqiyy2KPV"
 
 
  const blockHash = "0xd337332b5260eef96f9029ec6ddc0696e33f0d7076da5860a0d594c4ebddf898"

  
  ApiPromise.create({ provider: wsProvider, typesBundle: darwiniaTypesBundle })
    .then( async (api) => {
   const apiAt =  await api.at(blockHash);
   let allRecords = await apiAt.query.system.events()
   let signedBlock = await api.rpc.chain.getBlock(blockHash);
   
   signedBlock.block.extrinsics.forEach(({ method: { method, section } }, index) => {
    // filter the specific events based on the phase and then the
    // index of our extrinsic in the block
    const events = allRecords
      .filter(({ phase }) =>
        phase.isApplyExtrinsic &&
        phase.asApplyExtrinsic.eq(index)
      ).forEach(({event})=>{
       // show  message events
       console.log(`each event ${event.method}  ${event.section} ${event.data.toHuman()}`)
        if (api.events.system.ExtrinsicSuccess.is(event)) {
         
            const [dispatchInfo] = event.data;
            console.log(`${section}.${method}:: ExtrinsicSuccess:: ${JSON.stringify(dispatchInfo.toHuman())}`);
        }else if (api.events.system.ExtrinsicFailed.is(event)) {
            // extract the data for this event
            const [dispatchError, dispatchInfo] = event.data;
            let errorInfo;
    
            // decode the error
            if (dispatchError.isModule) {
            
              const decoded = api.registry.findMetaError(dispatchError.asModule);
    
              errorInfo = `${decoded.section}.${decoded.name}`;
            } else {
              
              errorInfo = dispatchError.toString();
            }
    
            console.log(`${section}.${method}:: ExtrinsicFailed:: ${errorInfo}`);
          }
      });
  
  });
     
  }).catch((err) => {
      console.log(err);
  });
}
```




