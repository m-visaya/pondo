pragma solidity ^0.8.9;

// SPDX-License-Identifier: MIT

contract CrowdFund {
    address payable public owner;
    string public metadataURI;
    uint public goal;
    bool public isActive = true;
    bool public goalReached = false;
    string public tag;
    uint public donationCount;

    event Fund(address indexed _donor, uint value, uint balance);

    mapping(address => uint) public userFunds;

    constructor(
        address _owner,
        string memory _metadataURI,
        uint _goal,
        string memory _tag
    ) {
        owner = payable(_owner);
        metadataURI = _metadataURI;
        goal = _goal;
        tag = _tag;
    }

    receive() external payable {
        require(isActive);
        userFunds[msg.sender] += msg.value;

        emit Fund(msg.sender, msg.value, address(this).balance);
        donationCount += 1;

        if (address(this).balance >= (goal * 1 ether)) {
            goalReached = true;
        }
    }

    function cancelFund() external payable {
        require(isActive);
        payable(msg.sender).transfer(userFunds[msg.sender]);
        userFunds[msg.sender] = 0;
    }

    function withdraw() external payable {
        require(isActive);
        owner.transfer(address(this).balance);
        isActive = false;
    }
}
