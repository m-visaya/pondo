pragma solidity ^0.8.9;
// SPDX-License-Identifier: MIT

import "./CrowdFund.sol";

contract CrowdFundFactory {
    mapping(address => address[]) public contractOwners;
    address[] public fundMeArray;

    event CrowdFundPublished(address indexed _owner, address _fundMe);

    function createFundMeContract(
        string memory _metadataURI,
        uint _goal,
        string memory _tag
    ) public {
        CrowdFund fundMe = new CrowdFund(msg.sender, _metadataURI, _goal, _tag);
        contractOwners[address(fundMe)].push(address(fundMe));
        fundMeArray.push(address(fundMe));

        emit CrowdFundPublished(msg.sender, address(fundMe));
    }

    function getFundMeContracts() public view returns (address[] memory) {
        return fundMeArray;
    }

    function getUserContracts(address _owner)
        public
        view
        returns (address[] memory)
    {
        return contractOwners[_owner];
    }
}
