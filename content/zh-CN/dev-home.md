---
id: dev-home
title: Developer Portal
sidebar_label: 开发者资源
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/dev-home.md
---

## Developer

### Substrate 
#### The foundation for blockchain innovators [- Website](https://www.parity.io/substrate/) [- Twitter](https://twitter.com/ParityTech) [- Telegram](https://t.me/parity_technologies) [- Github](https://github.com/paritytech/substrate)
With Substrate, you can mix and match features to suit your project's needs. WebAssembly smart contracts, Multi-level permissioning, Encrypted transactions and state, Limiting to asynchronous calls optionality, Account-level locking, Governance tools and methods such as stakeholder referendums / approval voting / and qualified abstention biasing.

### Polkalert API Explorer
#### Browser substrate chain API and run tests [- Website](https://apiexplorer.polkalert.com/)

### Substrate Playground
#### Start hacking your substrate runtime in a web based VSCode like IDE [- Website](https://playground.substrate.dev/)

### Rust Playground
#### Rust Web IDE [- Website](https://play.rust-lang.org/)

### Substrate Api Client
#### Library for connecting to the substrate's RPC interface via WebSockets [- Github](https://github.com/scs/substrate-api-client)
Compose extrinsics, send them and subscribe to updates. Watch events and execute code upon events. Parse and print the note metadata.

### JS API Client
#### Original implementation by Parity [- Website](https://polkadot.js.org/api/) [- Github](https://github.com/polkadot-js/api)

### Java API Client
#### Java APIs around Polkadot and any Substrate-based chain RPC calls [- Website](https://polkadot-java.github.io/) [- Github](https://github.com/polkadot-java/api)
Java APIs around Polkadot and any Substrate-based chain RPC calls. It is dynamically generated based on what the Substrate runtime provides in terms of metadata. Full documentation & examples available.

### C++ API Client
#### C++ API for Polkadot [- Website](https://usetech.com/blockchain.html) [- Telegram](https://t.me/USETECHBlockchain) [- Github](https://github.com/usetech-llc/polkadot_api_cpp/)
C++ API includes full documentation on how to set up and get going, as well as sample use cases - Rasberry Pi integration and signing up for email notifications on the Polkadot account. Updated for Kusama support. Code is in the GitHub shown bellow.

### Rust API Client
#### Library for connecting to substrate API over WebSockets [- Github](https://github.com/scs/substrate-api-client)

### Python API Client
#### Not a pure implementation, but the Polkascan team created a wrapper to the JS code [- Github](https://github.com/polkascan/polkascan-pre-harvester)

### Rust SCALE Codecs
#### Lightweight, efficient, binary serialization and deserialization codec [- Github](https://github.com/paritytech/parity-scale-codec)

### JS SCALE Codecs
#### Implementation of the types and their (de-) serialisation via SCALE codec [- Github](https://github.com/polkadot-js/api/tree/master/packages/types)

### Java SCALE Codecs
#### SCALE Codecs - Java [- Github](https://github.com/polkadot-java/api/tree/master/packages/src/main/java/org/polkadot/types)

### Go SCALE Codecs
#### SCALE Codecs - Go [- Github](https://github.com/Joystream/parity-codec-go)

### Python SCALE Codecs
#### Python SCALE-Codec Library [- Github](https://github.com/polkascan/py-scale-codec)

### Vue-Polkadot
#### Vue JS components for Polkadot JS apps [- Website](https://vue-polkadot.js.org/) [- Github](https://github.com/vue-polkadot)
VueJS utilities, libraries and Vue components in use across @polkadot projects.

### Runtime Verification
#### Build executable K specifications of the SRML [- Website](https://runtimeverification.com/) [- Twitter](https://twitter.com/rv_inc) [- Github](https://github.com/runtimeverification/polkadot-verification)
Cutting edge formal verification tools for aerospace, automotive and the blockchain.

### substraTEE
#### substraTEE is an extension to Parity Substrate, allowing to call a custom state transition function (STF) inside a Trusted Execution Environment (TEE), namely an Intel SGX enclave thereby providing confidentiality and integrity [- Github](https://github.com/scs/substraTEE)
The enclaves operate on an encrypted state which can be read and written only by a set of provisioned and remote-attested enclaves. substraTEE enables use cases demanding transaction privacy as well as atomic cross-chain transfers (bridges). What substraTEE aims to provide: confidential decentralized state transition functions, private transactions, private smart contracts, off-chain confidential personal data records (GDPR), scalability by providing a 2nd layer to substrate-based blockchains, off-chain smart contracts, payment hubs, trusted chain bridges, trusted oracles.

### Substrate Builders Program
#### The Substrate Builders Program brings you many value adds [- Website](https://builders.parity.io/)
Upon joining the program, you get attention from dedicated program managers to help you in four categories: Technical support, Business development support, Marketing support, Funding support.

### GSRPC
#### Substrate RPC client for go aka GSRPC [- Github](https://github.com/centrifuge/go-substrate-rpc-client/)

### C# API for Polkadot
#### .NET Developer's access to Polkadot [- Website](https://usetech.com/blockchain.html) [- Telegram](https://t.me/USETECHBlockchain) [- Github](https://github.com/usetech-llc/polkadot_api_dotnet)
Once completed (October 2019), .NET API will be provided complete with documentation and instructions.

## Developer SmartContract

### ink! Playground
#### ink! playground is the browser IDE for Substrate's smart contract (srml-contract） [- Website](https://ink-playground.com/) [- Github](https://github.com/staketechnologies/ink-playground)
This will be similar to Remix, the smart contract IDE of Ethereum. Currently, if developers want to run ink! smart contract, they have to install substrate and ink into local environment. But this takes many steps, and also it is not easy to run stably because of version compatibility issues or so. By using ink! playground, Substrate developers can test contracts easily just by writing main code on browser. It doesn't require installing Substrate or running Substrate node. This is very useful for Substrate smart contract developers. For the future works, ink! playground also provides high level security audits. This is for developer who wants to make high secured smart contracts like for enterprise use.

### ink! Remix Plugin
#### ink! remix plugin [- Github](https://github.com/blockchain-it-hr/ink-remix-plugin)

## Developer Pallet

### Cumulus
#### A set of tools for writing Polkadot parachains that are based on Substrate [- Website](https://wiki.polkadot.network/docs/en/build-cumulus) [- Github](https://github.com/paritytech/cumulus)
It's easy to write blockchains using Substrate, and the overhead of writing parachains' distribution, p2p, database, and synchronization layers is generally high and should be reusable. This project aims to make it easy to write parachains for Polkadot by leveraging the power of Substrate. Cumulus clouds are shaped sort of like dots and are up in the air, like this project (as it is an initial prototype -- expect a rename when it gets cooler).

### Substrate Account Set
#### A Substrate pallet for account-level permissioning [- Twitter](https://twitter.com/gautamdhameja) [- Github](https://github.com/gautamdhameja/substrate-account-set/)

### Substrate Validator Set
#### A Substrate pallet to add/remove validators in Substrate-based PoA networks [- Twitter](https://twitter.com/gautamdhameja) [- Github](https://github.com/gautamdhameja/substrate-validator-set/)

### Substrate Pallet Template
#### Template for a Substrate pallet which lives as its own crate so it can be imported into multiple other runtimes. It is based on the "template" pallet which is included with the Substrate node template [- Github](https://github.com/substrate-developer-hub/substrate-pallet-template)

## Developer Job

### Centrifuge
#### Substrate Go API client [- Website](https://centrifuge.io/) [- Twitter](https://twitter.com/centrifuge) [- Github](https://github.com/centrifuge/) [- Job](https://centrifuge.breezy.hr/)