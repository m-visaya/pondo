pragma solidity ^0.8.9;

// SPDX-License-Identifier: MIT

contract CrowdFund {
    address payable public owner;
    string public metadataURI;
    uint public goal;
    bool public isActive = true;
    bool public goalReached = false;

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
        if (address(this).balance >= (goal * 1 ether)) {
            goalReached = true;
        }
    }

    function withdraw(uint _value) public payable {
        (bool sent, bytes memory data) = owner.call{value: _value * 1 ether}("");
        require(sent, "Error sending eth.");
        isActive = false;
    }
}
