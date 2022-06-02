// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Storefile {
  string public fileHash = '';

  function setFile(string memory _fileHash ) public {
      fileHash = _fileHash;
  }

  function getFile() public view returns( string memory _fileHash ){
      return fileHash;
  }
}
