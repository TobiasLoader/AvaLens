// SPDX-License-Identifier: Ecosystem

pragma solidity 0.8.18;

import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol";
import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.0/contracts/token/ERC20/ERC20.sol";

contract Merit is ITeleporterReceiver, ERC20 {
    ITeleporterMessenger public immutable teleporterMessenger =
        ITeleporterMessenger(0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf);

    // Initialize with the TeleporterMessenger address
    constructor() ERC20("MERIT", "MERIT") {
        _mint(msg.sender, 1000000 * (10**uint256(decimals())));
    }

    bytes public lastMessage;

    function receiveTeleporterMessage(
        bytes32 originChainID,
        address originSenderAddress,
        bytes calldata message
    ) external override {
        // Decode the message, which should contain the recipient address and the amount of merit to mint
        (
            address awardee1,
            uint256 voteAward1,
            address awardee2,
            uint256 voteAward2
        ) = abi.decode(
                message,
                (
                    address,
                    uint256,
                    address,
                    uint256
                )
            );

        // Mint the merits to the recipient address
        _mint(awardee1, voteAward1);
        _mint(awardee2, voteAward2);
    }

    /**
     * @dev Allows a user to "borrow" a camera by staking a specified amount of MERIT tokens.
     * The tokens are transferred from the user (msg.sender) to an arbitrary address.
     *
     * @param cameraId The ID of the camera to be borrowed.
     * @param stakeAmount The amount of MERIT tokens to stake for borrowing the camera.
     */
    function borrowCamera(string memory cameraId, uint256 stakeAmount) public {
        require(bytes(cameraId).length > 0, "Camera ID is required");
        require(stakeAmount > 0, "Stake amount must be greater than 0");

        // Transfer the stake amount from the sender to the specified address
        _transfer(msg.sender, 0x93c837D1Db75262646f1026F3462faeC280e3555, stakeAmount);
    }
}


// pragma solidity 0.8.18;

// import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol";
// import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.0/contracts/token/ERC20/ERC20.sol";

// contract Merit is ITeleporterReceiver, ERC20 {

//     ITeleporterMessenger public immutable teleporterMessenger = ITeleporterMessenger(0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf);
//     // Initialize with the TeleporterMessenger address
//     constructor() ERC20("MERIT", "MERIT") {
//         _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
//     }

//     bytes public lastMessage;

//     function receiveTeleporterMessage(
//         bytes32 originChainID,
//         address originSenderAddress,
//         bytes calldata message
//     ) external override {
//         // Decode the message, which should contain the recipient address and the amount of merit to mint
//         (
//         address awardee1,
//         uint voteAward1,
//         address awardee2,
//         uint voteAward2,
//         address awardee3,
//         uint voteAward3,
//         address awardee4,
//         uint voteAward4,
//         address awardee5,
//         uint voteAward5
//         ) = abi.decode(message, (address, uint, address, uint, address, uint, address, uint, address, uint));

//         // Mint the merits to the recipient address
//         _mint(awardee1, voteAward1);
//         _mint(awardee2, voteAward2);
//         _mint(awardee3, voteAward3);
//         _mint(awardee4, voteAward4);
//         _mint(awardee5, voteAward5);
//     }
// }
