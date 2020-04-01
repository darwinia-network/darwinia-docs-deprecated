---
id: wiki-acct-ss58address
title: Account Address
sidebar_label: Account Address
---

## SS58 Address Format
SS58 is a simple address format designed for Substrate based chains. There's no problem with using other address formats for a chain, but this serves as a robust default. It is heavily based on Bitcoin's Base-58-check format with a few alterations.

The basic idea is a base-58 encoded value that can identify a specific account on the Substrate chain. Different chains have different means of identifying accounts. SS58 is designed to be extensible for this reason.

The living specification for the SS-58 address format can be found on the Substrate GitHub wiki:

https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)

## Generate and Regenerate Account Address

You may see `account address`, `address` or `public address` in various articles, they essentially mean the same thing. You should understand this that once you have an account that means you have the `secret phrase` or `secret seed`, you can derive public key from it deterministicly.  When encoding with various `network id`, you can get network related `public address`.  That is to say, one `private key` can derives many `public addresses` depending on what `network id` you include in encoding process.

If you have an account generated for Polkadot or Kusama, you already have an account that is enabled for Darwinia Network, the `private key` or `public key` are exactly the same.  All you need to find is its accordinate `account address` or `address` under Darwinia context.  You can achieve this using these methods:


<!--DOCUSAURUS_CODE_TABS-->
<!--Web Apps-->
Web apps include a wide range of web based applications that help you manage accounts, this inlucde:

- Darwinia Apps
- Polkadot.js Apps
- Polkadot.js Browser Plugin

Import your account through app if your account is not generated their, go to "options" or "preferences" whatever the application calls it, and choose "Darwinia Network" from network selection.  The application should display your account's address in Darwinia format.  This process also applies to Crab Network.

<!--Subkey CLI-->

Use an generated account's `secret phrase` or `secret seed`, you can find out your Darwinia's address by running this command:

```bash
$ subkey -n darwinia inspect "YOUR_SECRET_PHRASE_OR_SECRET_SEED"
```

Let's take a look at the example below, first we generate a Kusama account, using that account, we can find out Darwinia's address:

```bash
$ subkey -n kusama generate

Secret phrase `despair ball sibling trust captain glide hamster film banana food tree security` is account:
  Network ID/version: kusama
  Secret seed:        0xef0dce87bd91b90d1d9c3a16bb3a4c0b2c1c63e8b0f5428c366211a5fa3471c0
  Public key (hex):   0x000789ce986659c3acf6b99b9c590ae5ae4fad4c0bce174ab245341c482f7e73
  Account ID:         0x000789ce986659c3acf6b99b9c590ae5ae4fad4c0bce174ab245341c482f7e73
  SS58 Address:       CaMksEyDesu7EfNY6HME1k534aKcX1fGynAQez6RL3xgRYp
```

Let's inspect secret phrase first using Darwinia's network ID:

```bash
$ subkey -n darwinia inspect "despair ball sibling trust captain glide hamster film banana food tree security"

Secret phrase `despair ball sibling trust captain glide hamster film banana food tree security` is account:
  Network ID/version: darwinia
  Secret seed:        0xef0dce87bd91b90d1d9c3a16bb3a4c0b2c1c63e8b0f5428c366211a5fa3471c0
  Public key (hex):   0x000789ce986659c3acf6b99b9c590ae5ae4fad4c0bce174ab245341c482f7e73
  Account ID:         0x000789ce986659c3acf6b99b9c590ae5ae4fad4c0bce174ab245341c482f7e73
  SS58 Address:       2oAutjuRNJsXcB8o2cMjGRzsNps2VT5zJ2eGFbGuq1ZmBTYm
```

> Note: `Network ID/version` in the output above is set to `darwinia`

You will see last line `SS58 Address` is your account address in Darwinia Network, which is `2oAutjuRNJsXcB8o2cMjGRzsNps2VT5zJ2eGFbGuq1ZmBTYm`.  Next let's inpsect `secret seed` when generating Kusama account, that should display the same account address:

```bash
$ subkey -n darwinia inspect "0xef0dce87bd91b90d1d9c3a16bb3a4c0b2c1c63e8b0f5428c366211a5fa3471c0"

Secret Key URI `0xef0dce87bd91b90d1d9c3a16bb3a4c0b2c1c63e8b0f5428c366211a5fa3471c0` is account:
  Network ID/version: darwinia
  Secret seed:        0xef0dce87bd91b90d1d9c3a16bb3a4c0b2c1c63e8b0f5428c366211a5fa3471c0
  Public key (hex):   0x000789ce986659c3acf6b99b9c590ae5ae4fad4c0bce174ab245341c482f7e73
  Account ID:         0x000789ce986659c3acf6b99b9c590ae5ae4fad4c0bce174ab245341c482f7e73
  SS58 Address:       2oAutjuRNJsXcB8o2cMjGRzsNps2VT5zJ2eGFbGuq1ZmBTYm
```

The same account address is displayed.  You have your Darwinia account address.

<!--END_DOCUSAURUS_CODE_TABS-->