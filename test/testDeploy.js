const { ethers } = require("hardhat")
const {assert,expect }= require("chai");

describe("SimpleStorage",function (){
  let simpleStorage,simpleStorageFactory;
beforeEach(async function (){
 simpleStorageFactory=await ethers.getContractFactory("SimpleStorage")
 simpleStorage= await simpleStorageFactory.deploy();
})  ;

it("should start with favourite number of 0", async function (){
  const currentValue= await simpleStorage.retrieve();
  const expectedValue="0";
  assert.equal(currentValue.toString(),expectedValue);
})

})