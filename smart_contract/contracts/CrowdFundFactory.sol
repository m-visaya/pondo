pragma solidity ^0.8.9;
// SPDX-License-Identifier: MIT

import "./CrowdFund.sol";

contract CrowdFundFactory {
    mapping(address => address) public contractOwners;
    address[] public fundMeArray;

    event CrowdFundPublished(address indexed _owner);

    function createFundMeContract(string memory _metadataURI, uint _goal)
        public
    {
        CrowdFund fundMe = new CrowdFund(msg.sender, _metadataURI, _goal);
        contractOwners[address(fundMe)] = msg.sender;
        fundMeArray.push(address(fundMe));

        emit CrowdFundPublished(msg.sender);
    }

    function getFundMeContracts() public view returns (address[] memory) {
        return fundMeArray;
    }
}
