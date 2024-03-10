// (c) 2023, Ava Labs, Inc. All rights reserved.
// See the file LICENSE for licensing terms.

// SPDX-License-Identifier: Ecosystem

pragma solidity 0.8.18;

import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol";
import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol";

contract ReceiverOnAvaLens is ITeleporterReceiver {

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
        string someString,
        uint256 someNumber,
        address someAddress
    ) = abi.decode(message, (string, uint256, address));
    
    // Calling the internal function
    _someFunction(someString, someNumber, someAddress);
    
    }

    function _someFunction(string someString, uint256 someNumber, address someAddress) private {
    // Do something
    }
}