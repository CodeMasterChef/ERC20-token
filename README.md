# ERC20 Token:
How to create a ERC-20 Token with Solidity, OpenZeppelin, and Truffle.

# Quick start:
Compile smart contracts into ABI (Application Binary Interface):
```bash
$ truffle compile

Compiling your contracts...
===========================
> Compiling ./contracts/MyToken.sol
> Artifacts written to /Users/loya/Code/ERC20-token/build/contracts
> Compiled successfully using:
   - solc: 0.8.0+commit.c7dfd78e.Emscripten.clang
```

Deploy to local testnet (Ganache):

```bash
$ truffle migrate --reset

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x3fcb9052d39e4a0832ce3056a99aa2fe876b274f3c3ea5ce309062b213fb6b4e
   > Blocks: 0            Seconds: 0
   > contract address:    0x224999f77Ad1d8C954728A7A25d215aa18F1a8e9
   > block number:        3
   > block timestamp:     1618287256
   > account:             0xE0223477f74151c79bA00f7525f2A95a0D18fE76
   > balance:             99.98937774
   > gas used:            244300 (0x3ba4c)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.004886 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:            0.004886 ETH


2_deploy_token.js
=================

   Deploying 'MyToken'
   -------------------
   > transaction hash:    0x8ef3c7c54027d9cf19ac3f2f3c4b99d3b119ea13c0fcff104658510aad8032da
   > Blocks: 0            Seconds: 0
   > contract address:    0x80Bc09EA8B7616D5aD4dF3d5791A7b456a4D2395
   > block number:        5
   > block timestamp:     1618287257
   > account:             0xE0223477f74151c79bA00f7525f2A95a0D18fE76
   > balance:             99.96396422
   > gas used:            1228163 (0x12bd83)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02456326 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.02456326 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.02944926 ETH

```

Test with Truffle Console:
```bash
$  truffle console
# Using Promise: long and hard
truffle(development)> MyToken.deployed().then(function(instance){return instance.name();});

'MyToken'
# Using Async - Await
truffle(development)> const myToken = await MyToken.deployed()
undefined
truffle(development)> myToken.name()
'MyToken'
truffle(development)> myToken.address
'0x80Bc09EA8B7616D5aD4dF3d5791A7b456a4D2395'
```

Test with ChaiJS (https://www.chaijs.com/):

```
$ truffle test
Using network 'development'.


Compiling your contracts...
===========================
> Compiling ./contracts/MyToken.sol
> Artifacts written to /var/folders/w_/s37l6f4100lfl4dgqmn94t580000gp/T/test--11184-VOx15sIIYFpK
> Compiled successfully using:
   - solc: 0.8.0+commit.c7dfd78e.Emscripten.clang



  Contract: MyToken
    token attributes
      ✓ has the correct name (177ms)
      ✓ has the correct symbol (68ms)
      ✓ has the correct total supply (143ms)


  3 passing (2s)

```

# Deploy to Binance Smart Chain Testnet:
Enter in the BSC Testnet details as follows:
```
Network Name: BSC Testnet
New RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545
ChainID: 97
Symbol: BNB
Block Explorer URL: https://testnet.bscscan.com/
```
Faucet for free BNB on BSC Testnet: https://testnet.binance.org/faucet-smart


