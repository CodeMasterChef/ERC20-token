// Keep the returned value in its original type (BigNumber on Truffle 4.x / web3 0.x, and BN on Truffle 5.x / web3 1.x),
// and use only the functions of this type (e.g., plus, minus, mul, div, equals, etc).
const BigNumber = web3.utils.BN;

const MyToken = artifacts.require('MyToken');
require('chai').use(require('chai-bignumber')(BigNumber)).should();

contract('MyToken', (accounts) => {
  const _name = 'MyToken'; 
  const _symbol = 'MYT';
  // Avoid using toNumber() on any value returned from a contract function whose return-value type is one of the following: uint64, uint128, uint256
  const _totalSupply = web3.utils.toBN('1000000');

  beforeEach(async () => {
    this.token = await MyToken.new();
  })
  describe('token attributes', () => {
    it('has the correct name', async () => {
      const name = await this.token.name();
      name.should.equal(_name);
    })
    it('has the correct symbol', async () => {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    })
    it('has the correct total supply', async () => {
      const totalSupply = await this.token.totalSupply();
      expect(totalSupply).to.eql(_totalSupply);
    })
  })
})
