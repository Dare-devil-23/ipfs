const Storefile = artifacts.require("Storefile");

module.exports = function (deployer) {
  deployer.deploy(Storefile);
};
