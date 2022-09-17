# Oasis Sapphire Quickstart

https://docs.oasis.io/dapp/sapphire/quickstart/

## Setup

npm i -g truffle

npm i

vi .env

```bash
PRIVATE_KEY=yourprivatekeywithsomefunds
```

## Deploy

truffle migrate --network sapphire

truffle exec --network sapphire scripts/exercise.contract.js

## Logs

```
sapphire-test > truffle migrate --network sapphire

Compiling your contracts...
===========================
> Compiling ./contracts/MetaCoin.sol
> Artifacts written to /Users/leon/Desktop/sapphire-test/build/contracts
> Compiled successfully using:
   - solc: 0.8.17+commit.8df45f5f.Emscripten.clang


Starting migrations...
======================
> Network name:    'sapphire'
> Network id:      23295
> Block gas limit: 30000000 (0x1c9c380)


1_deploy_contracts.js
=====================

   Deploying 'MetaCoin'
   --------------------
   > transaction hash:    0x0c9ebcdd803983637743458970fefa537184365cfda75cc5ff84895e447466f8
   > Blocks: 1            Seconds: 4
   > contract address:    0xF07d5375F4e05a3AbA15674D1C90342D9f19Ea65
   > block number:        3676
   > block timestamp:     1663343919
   > account:             0xe9EB72519D543a0D080450582235ee84c757FE95
   > balance:             0.3969226
   > gas used:            191427 (0x2ebc3)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.0191427 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0191427 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.0191427 ETH


sapphire-test > truffle exec --network sapphire scripts/exercise.contract.js
Using network 'sapphire'.


Increment by 5 0x8424020d31646144097802d052f2316f5c81886b5e80d6dfede41c970f2a8973.
An Increment(5) was emitted.
The number is: 15.
```