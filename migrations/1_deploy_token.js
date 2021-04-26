const MyToken = artifacts.require('MyToken');

module.exports = function (deployer) {
  const totalSupply = '50000000';
  deployer.deploy(MyToken, 'CatCoin', 'CAT', web3.utils.toWei(totalSupply));
};
