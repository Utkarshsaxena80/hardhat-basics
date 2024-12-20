//SPDX-License-Identifier:MIT
pragma solidity ^0.8.8;
//evm ethereum virtual machine//
contract SimpleStorage{
//boolean,unit,int,address,bytes!nt check=3;
uint256  public favouriteNumber;
mapping (string=> uint256) public nameToFavouriteNumber;

struct People{
    uint256 favouriteNumber;
    string name;
}
People[] public people;//dynamic array
function stor(uint256 _favouriteNumber) public {
favouriteNumber= _favouriteNumber;
}
function retrieve() public view returns(uint256){
    return favouriteNumber; 
    }
  function addPerson (string memory _name,uint256 _favouriteNumber) public {
    people.push(People(_favouriteNumber,_name));
    nameToFavouriteNumber[_name]=_favouriteNumber;
  } 
} 