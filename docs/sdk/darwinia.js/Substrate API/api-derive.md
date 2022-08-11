---
sidebar_position: 2
---

# API-Derive




Common function derived from RPC calls and storage queries. Note that Darwinia.js libary version must be greate than v2.8.0 including api-derive feature.

Install it in your project directory with the following command:

```json
	yarn add @darwinia/api-derive
```

Inject our **darwiniaDerive** when creating API instance

```typescript
// Import
import { ApiPromise, WsProvider } from '@polkadot/api';
import { darwiniaDerive } from '@darwinia/api-derive/bundle';
import { typesBundle } from "@darwinia/types/mix";
...

// Construct
const wsProvider = new WsProvider('wss://rpc.darwinia.network');
const api = await ApiPromise.create({ provider: wsProvider, typesBundle: typesBundle.spec.darwinia, derives: darwiniaDerive });

```

Since you are already familiar with the api.query interface, the api.derive interface follows the same format, for instance **usableBalance** derived function to query account's Ring Balance.

```typescript
// Import darwinia token type (ring, kton)
import { TokenType } from '@darwinia/api-derive/accounts/types';
// Initialize the API as in previous sections injecting darwiniaDerive
...

// The actual address that we will use
const ADDR = '<address>';
await api.derive.usableBalance.balance(TokenType.Ring, ADDR).then((balance) => {
        console.log(` ring usable  balance ${balance.usableBalance} `)

```

####  Customer Api-Derive

Darwinia.js allow application developer to extend their derived method. first you should put function declaration in ExactDerive interface. for example there is 'custome.something' augmentation.

```typescript
// augmentDerives.ts
import type { Observable } from "rxjs";

declare module "@polkadot/api-derive/derive" {
      // extend, add our custom section
      export interface ExactDerive {
            custom: {
                  something: ReturnType<() => () => Observable<number[]>>;
            };
      }
}
```

and then, ensure 'custom.somethinig' augmentation is applied.

```typescript
// customeDerive.ts
custom: {
      something: () => (): Observable<number> => from([1, 2, 3]);
}
```

create api instance to use this derived api.

```typescript
import { custom } from "customeDerive.ts";
import { darwiniaDerive } from "@darwinia/api-derive/bundle";
import { DeriveCustom } from "@polkadot/api/types";

const cutomeDerives = {
      ...darwiniaDerive, // it's optinal
      // assignment your augmentation
      custom: {
            something: custome.something,
      },
} as DeriveCustom;

const api = await ApiPromise.create({
      provider: wsProvider,
      typesBundle: typesBundle.spec.darwinia,
      derives: cutomeDerives,
});

// your derived method
await api.derive.custom.something().then((res) => {
      console.log(`somthing is ${res}`); // return [1,2,3]
});
```