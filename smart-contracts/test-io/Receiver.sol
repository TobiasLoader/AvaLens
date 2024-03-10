// SPDX-License-Identifier: Ecosystem

pragma solidity ^0.8.18;

import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol";
import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.0/contracts/token/ERC20/ERC20.sol";

contract Merit is ITeleporterReceiver, ERC20 {

    ITeleporterMessenger public immutable teleporterMessenger;

    constructor() ERC20("MERIT", "MERIT") {
        teleporterMessenger = ITeleporterMessenger(0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf);
    }

    function receiveTeleporterMessage(
        bytes32 originChainID,
        address originSenderAddress,
        bytes calldata message
    ) external override {
        // Decoding the function parameters
        (string memory userId, uint merit) = abi.decode(message, (string, uint));

        // Calling the internal function to mint merits
        _mintMerits(userId, merit);
    }

    function _mintMerits(string memory userId, uint merit) private {
        // Convert userId to address if necessary
        // For simplicity, let's assume userId can be directly converted to an address
        // In a real-world scenario, you'd need a secure way to map userIds to addresses
        address userAddress = _convertUserIdToAddress(userId);

        // Minting the merits as tokens to the user's address
        _mint(userAddress, merit);
    }

    function _convertUserIdToAddress(string memory userId) private pure returns (address) {
        // Implement the logic to convert userId to an address
        // This is a placeholder function. In a real implementation, you need a secure and reliable way to do this conversion
        return address(0);
    }
}
