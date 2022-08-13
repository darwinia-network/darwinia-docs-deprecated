---
sidebar_position: 5
---

# RPC

 

The following sections contain known RPC methods that may be available on Darwinia nodes  and allow you to interact with the Darwinia node, query, and submit.


- [<font color="blue" size="5">net</font>](#net)
- [<font color="blue" size="5">web3</font>](#web3)

***


<span id="net"><font size="6">net</font></span>
 <br></br>
 <br></br>





 <font size="5">listening():bool </font>
 <br></br>

 - **interface**:  `api.rpc.net.listening`<br></br>


 - **summary**:Returns true if client is actively listening for network connections. Otherwise false.<br></br>


 <font size="5">peerCount():Text </font>
 <br></br>

 - **interface**:  `api.rpc.net.peerCount`<br></br>


 - **summary**:Returns number of peers connected to node.<br></br>



 <font size="5">version():Text </font>
 <br></br>

 - **interface**:  `api.rpc.net.version`<br></br>


 - **summary**:Returns protocol version.<br></br>



<span id="web3"><font size="6">web3</font></span>
 <br></br>
 <br></br>


 <font size="5">clientVersion():Text </font>
 <br></br>

 - **interface**:  `api.rpc.web3.clientVersion`<br></br>


 - **summary**:Returns current client version.<br></br>


  <font size="5">sha3(data:Bytes):H256 </font>
 <br></br>

 - **interface**:  `api.rpc.web3.sha3`<br></br>


 - **summary**:Returns sha3 of the given data.<br></br>

