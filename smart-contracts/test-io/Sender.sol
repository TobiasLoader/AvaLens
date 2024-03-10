// (c) 2023, Ava Labs, Inc. All rights reserved.
// See the file LICENSE for licensing terms.

// SPDX-License-Identifier: Ecosystem

// modified the code from Avalanche Academy Teleporter course

pragma solidity ^0.8.18;


import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol";
import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol";

/**
 * @dev ExampleCrossChainMessenger is an example contract that demonstrates how to send and receive
 * messages cross chain.
 */
contract Vote {

    // Mapping of imageId to votes received
    mapping(bytes32 => uint256) public userVotes;

    // Mapping of imageId to the publicId of the photographer (imgOwner)
    mapping(bytes32 => bytes32) public imageOwners;

    // Mapping of imgOwner to their total merits
    mapping(bytes32 => uint256) public ownerMerits;

    constructor() {
        // Initialize userVotes mapping within the constructor
        userVotes[bytes32("Image1")] = 91;
        userVotes[bytes32("Image2")] = 72;
        userVotes[bytes32("Image3")] = 77;
        userVotes[bytes32("Image4")] = 59;
        userVotes[bytes32("Image5")] = 36;
        userVotes[bytes32("Image6")] = 30;
        userVotes[bytes32("Image7")] = 26;
        userVotes[bytes32("Image8")] = 22;
        userVotes[bytes32("Image9")] = 12;
        userVotes[bytes32("Image10")] = 10;
        

        // Initialize imageOwners mapping
        imageOwners[bytes32("Image1")] = bytes32("De0vYJ7k7D");
        imageOwners[bytes32("Image2")] = bytes32("qkGzdCRY9e");
        imageOwners[bytes32("Image3")] = bytes32("KM7HRQydNZ");
        imageOwners[bytes32("Image4")] = bytes32("eipbLjnyeG");
        imageOwners[bytes32("Image5")] = bytes32("gyGE5kaecT");
        imageOwners[bytes32("Image6")] = bytes32("76VfzkXOtG");
        imageOwners[bytes32("Image7")] = bytes32("N6SrxMNX8w");
        imageOwners[bytes32("Image8")] = bytes32("JFktwjtSka");
        imageOwners[bytes32("Image9")] = bytes32("DXM951ZMtd");
        imageOwners[bytes32("Image10")] = bytes32("sf6Qd9Vk2Y");

        // Initialize ownerMerits mapping
        ownerMerits[bytes32("De0vYJ7k7D")] = 0;
        ownerMerits[bytes32("qkGzdCRY9e")] = 0;
        ownerMerits[bytes32("KM7HRQydNZ")] = 0;
        ownerMerits[bytes32("eipbLjnyeG")] = 0;
        ownerMerits[bytes32("gyGE5kaecT")] = 0;
        ownerMerits[bytes32("76VfzkXOtG")] = 0;
        ownerMerits[bytes32("N6SrxMNX8w")] = 0;
        ownerMerits[bytes32("JFktwjtSka")] = 0;
        ownerMerits[bytes32("DXM951ZMtd")] = 0;
        ownerMerits[bytes32("sf6Qd9Vk2Y")] = 0;
    }

    // Function to calculate and assign merits based on votes
    function calculateMerit(bytes32[] calldata imageIds) external {
        
        ownerMerits[bytes32("De0vYJ7k7D")] = 10; // 1st
        ownerMerits[bytes32("qkGzdCRY9e")] = 5;  // 2nd
        ownerMerits[bytes32("KM7HRQydNZ")] = 2;  // ...
        ownerMerits[bytes32("eipbLjnyeG")] = 1;
        ownerMerits[bytes32("gyGE5kaecT")] = 1;
    }

    /**
     * @dev Convert votes to merits.
     * @param votes The number of votes to convert.
     * @return merits The corresponding merits based on the votes.
     */
    function votesToMerits(uint256 votes) public pure returns (uint256 merits) {
        // Define your conversion logic here. For simplicity, this example assumes 1 vote = 1 merit.
        merits = votes; 
        return merits;
    }

    ITeleporterMessenger public immutable teleporterMessenger = ITeleporterMessenger(0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf);
    
        // string memory firstId = "De0vYJ7k7D";
        // string memory secondId = "qkGzdCRY9e";
        // string memory thirdId = "KM7HRQydNZ";
        // string memory fourthId = "eipbLjnyeG";
        // string memory fifthId = "gyGE5kaecT";

        // uint256 firstMerit = 10;
        // uint256 secondMerit = 5;
        // uint256 thirdMerit = 2;
        // uint256 fourthMerit = 1;
        // uint256 fifthMerit = 1;

        // bytes message = abi.encode(            
        //     firstId,
        //     firstMerit,
        //     secondId,
        //     secondMerit,
        //     thirdId,
        //     thirdMerit,
        //     fourthId,
        //     fourthMerit,
        //     fifthId,
        //     fifthMerit
        // );



    function sendMessage(
        address destinationAddress,
        uint merit
    ) external {
        merit = 10;
        teleporterMessenger.sendCrossChainMessage(
            TeleporterMessageInput({
                destinationBlockchainID: 0x9f3be606497285d0ffbb5ac9ba24aa60346a9b1812479ed66cb329f394a4b1c7,
                destinationAddress: destinationAddress,
                feeInfo: TeleporterFeeInfo({
                    feeTokenAddress: address(0),
                    amount: 0
                }),
                requiredGasLimit: 100000,
                allowedRelayerAddresses: new address[](0),
                message: abi.encode(merit)
            })
        );
    }
}