pragma solidity ^0.8.9;
// SPDX-License-Identifier: MIT

import "./CrowdFund.sol";

contract CrowdFundFactory {
    event CrowdFundPublished(
        address indexed _owner,
        address _fundMe,
        bytes32 indexed _tag
    );

    function createFundMeContract(
        string memory _metadataURI,
        uint _goal,
        bytes32 _tag
    ) public {
        CrowdFund fundMe = new CrowdFund(msg.sender, _metadataURI, _goal, _tag);

        emit CrowdFundPublished(msg.sender, address(fundMe), _tag);
    }
}
