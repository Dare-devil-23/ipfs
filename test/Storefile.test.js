const Storefile = artifacts.require("Storefile");

require("chai").use(require("chai-as-promised")).should();

contract("Storefile", (address) => {
  let file;
  before(async () => {
    file = await Storefile.deployed();
  });
  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = file.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
  });

  describe("update", async () => {
    it("updating the hash", async () => {
      let fileHash;
      fileHash= "sahi";
      await file.setFile(fileHash);
      const result = await file.getFile();

      assert.equal(fileHash, result);
    });
  });
});
