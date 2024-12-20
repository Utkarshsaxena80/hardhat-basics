const {ethers} =require("hardhat");


async function main (){

const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

console.log("deploying contract ...");
const simpleStorage= await simpleStorageFactory.deploy();
await simpleStorage.waitForDeployment();
const address=  await simpleStorage.getAddress();
console.log(address);
const currentValue=await simpleStorage.retrieve();
console.log(currentValue);
//update
const response= await simpleStorage.stor(7);
await response.wait(1);
const updatedValue=await simpleStorage.retrieve();
console.log(updatedValue);


}


main().then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});