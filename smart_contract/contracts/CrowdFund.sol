pragma solidity ^0.8.9;

// SPDX-License-Identifier: MIT

contract CrowdFund {
    address payable public owner;
    string public metadataURI;
    uint public goal;

    event Fund(address indexed _donor, uint _value);

    mapping(address => uint) private funds;

    constructor(
        address _owner,
        string memory _metadataURI,
        uint _goal
    ) {
        owner = payable(_owner);
        metadataURI = _metadataURI;
        goal = _goal;
    }

    receive() external payable {
        funds[msg.sender] += msg.value;
        emit Fund(msg.sender, msg.value);
    }
}
