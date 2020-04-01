---
id: wiki-acct-create
title: 创建账户
sidebar_label: 创建账户
---

## Generate a Darwinia account

There are several ways to generate a Darwinia account, you can choose either one based on your preference.  Once your account is created and you have your account `secret phrase` or `secret seed`, you can migrate your account from various medium by importing your account.  


<!--DOCUSAURUS_CODE_TABS-->
<!--Darwinia Web Apps-->
### Darwinia Web Apps

- [Crab Network](https://apps.darwinia.network)
- Darwinia Mainnet (coming soon)

TODO: complete guide

<!--Polkadot.js Browser Plugin-->
### Polkadot.js Browser Plugin

The polkadot.js plugin provides a reasonable balance of security and usability. It provides a separate local mechanism to generate your address and interact with Polkadot.

This method involves installing the polkadot.js plugin and using it as a “virtual vault," separate from your browser, to store your private keys. It also allows signing of transactions and similar functionality.

**Install the Browser Plugin**

The browser plugin is available for both [Google Chrome](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) and [FireFox](https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension).

After installing the plugin, you should see the orange and white polkadot.js logo in the menu bar of your
browser.

Click the Orange P symbol in your extensions to open the account manager dialog.

Click "Create New Account" button and follow the instructions to have account created.  

> Make sure to store your mnemonic seed somewhere securely. You will need it to maintain access to your account.

**Set Address for Darwinia Mainnet or Crab Network**

Now we will ensure that the addresses are displayed as Darwinia mainnet addresses.  Your address will be different depending on network selection.

Click on "Options" at the top of the plugin window.  Select `Darwinia Mainnet` or `Crab Network` in "Display Address Format for" dropdown box. 

> At this moment, you won't see Darwinia or Crab network in the dropdown box, it's coming soon once polkadot.js extension merged our PR.

<!--Subkey CLI-->
### Subkey

Subkey is recommended for technically advanced users who are comfortable with command line and compiling Rust code. Subkey allows you to generate keys on any device that can compile the code. Subkey may also be useful for automated account generation, using an air-gapped device other than one running iOS or Android or other specific purposes. It is not recommended for general users.

To [install Subkey](https://substrate.dev/docs/en/ecosystem/subkey#more-subkey-to-explore), run:

```bash
$ curl https://getsubstrate.io -sSf | bash -s -- --fast
$ cargo install --force --git https://github.com/paritytech/substrate subkey
$ cargo build -p subkey
```

After installing Subkey successfully, run:

```shell
subkey -n darwinia generate
```

You should see an output something like below- **save all of this information somewhere secure you will not be able to recover your account if you lose your phrase or seed.**

```text
Secret phrase `destroy vague trend estate person civil cattle lab hockey tooth error pigeon` is account:
  Network ID/version: darwinia
  Secret seed:        0x58e57817a2ccfa696ed6c3735d4cc4646f894bf7daf51a94f0c4702a92e40710
  Public key (hex):   0x225ce1f9c178189d2a977a195f822ebbfb538b317f23f83ab35605fb009fa438
  Account ID:         0x225ce1f9c178189d2a977a195f822ebbfb538b317f23f83ab35605fb009fa438
  SS58 Address:       2owvscruh7PNbykGLMZPxHyjYdi1Ryanrm4PTxVKh85Ef8Dn
```

> If you previously created an account without the `-n darwinia` flag, you need to derive the  correct `Address` from your previous  `secret phrase` or `secret seed`.  You can use `subkey -n darwinia inspect "YOUR SECRET PHRASE HERE"` to obtain the Darwinia network-ID inclusive Address (SS58).

<!--Polkadot.js Web Apps-->
### Polkadot.js Web Apps
TODO: complete guide when Darwinia network is supported

<!--Mobile Wallet-->
### ~~Itering ID Wallet~~

Coming soon.

### ~~Math Wallet~~

Coming soon.
<!--END_DOCUSAURUS_CODE_TABS-->
<hr />

## Storing your key safely

> **DISCLAIMER: Key Security**
Your secret seed is the _only_ way to get access to your account. You must keep
the secret both secure and private. If you share you secret with anyone they
will be able to have full access to your account, including all of your funds.
The secret, for this reason, is a target from hackers and others with bad
intentions to steal your funds. We recommend a variety of account generation
methods that have various convienience and security tradeoffs. Please review
this page carefully before making your address so that you understand the risks
of the account generation method you choose and how to properly mitigate them
in order to keep your funds safe.

The seed is your **key** to the account. Knowing the seed allows you, or anyone
else who knows the seed, to re-generate and control this account.

It is imperative to store the seed somewhere safe, secret, and secure. If
you lose access to your account, you can re-create it by entering the seed. This
also means that somebody else can have control over your account if they have
access to your seed.

For maximum security, the seed should be written down on paper or another non-digital device and stored in a
safe place. You may also want to protect your seed from physical damage, as well (e.g. by storing in a sealed
plastic bag to prevent water damage, storing it in a fireproof safe, etc.) It is recommended that you store
multiple copies of the seed in geographically separate locations (e.g., one in your home safe and one in a
safety deposit box at your bank).

You should definitely not store your seed on any kind of computer that has or may have access to the internet
in the future.