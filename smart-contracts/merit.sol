// (c) 2023, Ava Labs, Inc. All rights reserved.
// See the file LICENSE for licensing terms.

// SPDX-License-Identifier: Ecosystem

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol";
import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol";

contract Merit is ERC20, Ownable {

    constructor() ERC20("Merit", "MERIT") {}


    /**
     * @dev Function to mint tokens
     * @param to The address that will receive the minted tokens.
     * @param amount The amount of tokens to mint.
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Function to burn tokens
     * @param amount The amount of tokens to be burned.
     */
    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
    }

    // The `transfer` function is inherited from the ERC20 contract and does not need to be explicitly implemented 


    ITeleporterMessenger public immutable teleporterMessenger = ITeleporterMessenger(0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf);

    string public lastMessage;

    function receiveTeleporterMessage(
    bytes32 originChainID,
    address originSenderAddress,
    bytes calldata message
    ) external {
    // Only the Teleporter receiver can deliver a message.
    if (msg.sender != address(teleporterMessenger)) {
        revert Unauthorized();
    }

    // Decoding the function parameters
    (
        string firstId,
        uint256 firstMerit,
        string secondId,
        uint256 secondMerit,
        string thirdId,
        uint256 thirdMerit,
        string fourthId,
        uint256 fourthMerit,
        string fifthId,
        uint256 fifthMerit
    ) = abi.decode(message, (string, uint256, address));
    
    // Calling the internal function
    _sendMerits((firstId,firstMerit,secondId,secondMerit,thirdId,thirdMerit,fourthId,fourthMerit,fifthId,fifthMerit
    ));
    
    }

    function _sendMerits(
        string firstId,
        uint256 firstMerit,
        string secondId,
        uint256 secondMerit,
        string thirdId,
        uint256 thirdMerit,
        string fourthId,
        uint256 fourthMerit,
        string fifthId,
        uint256 fifthMerit
    ) private {
        mint(firstId, firstMerit);
        mint(secondId, secondMerit);
        mint(thirdId, thirdMerit);
        mint(fourthId, fourthMerit);
        mint(fifthId, fifthMerit);
    }
}