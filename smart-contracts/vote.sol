// (c) 2023, Ava Labs, Inc. All rights reserved.
// See the file LICENSE for licensing terms.

// SPDX-License-Identifier: Ecosystem

// from Avalanche Academy

pragma solidity 0.8.18;

import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol";

contract Vote {

    ITeleporterMessenger public immutable teleporterMessenger = ITeleporterMessenger(0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf);

    function sendMessage(
        address destinationAddress
    ) external {
        
        bytes memory message = abi.encode(
            0xF0f06058ca7B6e46E2B238F6d34A604DB1E2612f,
            10,
            0x8C12Aab5FFbE1F95B890f60832002F3Bbc6FA4CF,
            5
        );

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
                message: message
            })
        );
    }
}


// pragma solidity 0.8.18;

// import "https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol";

// contract Vote {

//     // // Mapping of imageId to votes received
//     // mapping(bytes32 => uint256) public userVotes;

//     // // Mapping of imageId to the publicId of the photographer (imgOwner)
//     // mapping(bytes32 => bytes32) public imageOwners;

//     // // Mapping of imgOwner to their total merits
//     // mapping(bytes32 => uint256) public ownerMerits;

//     // constructor() {
//     //     // Initialize userVotes mapping within the constructor
//     //     userVotes[bytes32("Image1")] = 91;
//     //     userVotes[bytes32("Image2")] = 72;
//     //     userVotes[bytes32("Image3")] = 77;
//     //     userVotes[bytes32("Image4")] = 59;
//     //     userVotes[bytes32("Image5")] = 36;
        

//     //     // Initialize imageOwners mapping
//     //     imageOwners[bytes32("Image1")] = bytes32("De0vYJ7k7D");
//     //     imageOwners[bytes32("Image2")] = bytes32("qkGzdCRY9e");
//     //     imageOwners[bytes32("Image3")] = bytes32("KM7HRQydNZ");
//     //     imageOwners[bytes32("Image4")] = bytes32("eipbLjnyeG");
//     //     imageOwners[bytes32("Image5")] = bytes32("gyGE5kaecT");


//     //     // Initialize ownerMerits mapping
//     //     ownerMerits[bytes32("De0vYJ7k7D")] = 10;
//     //     ownerMerits[bytes32("qkGzdCRY9e")] = 5;
//     //     ownerMerits[bytes32("KM7HRQydNZ")] = 3;
//     //     ownerMerits[bytes32("eipbLjnyeG")] = 1;
//     //     ownerMerits[bytes32("gyGE5kaecT")] = 1;
//     // }

//     ITeleporterMessenger public immutable teleporterMessenger = ITeleporterMessenger(0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf);
//     function sendMessage(
//         address destinationAddress
//     ) external {
//         address awardee1 = 0x128b51D4b6CaCF2D2825B1a5772D619b44300feb;
//         uint voteAward1 = 10;
//         address awardee2 = 0x8C12Aab5FFbE1F95B890f60832002F3Bbc6FA4CF;
//         uint voteAward2 = 5;
//         address awardee3 = 0x45a31B15d3CE9a6fb4dbF83A5FB7b7B8078c8888;
//         uint voteAward3 = 3;
//         address awardee4 = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
//         uint voteAward4 = 1;
//         address awardee5 = 0x3EAb47F3e113BF2F6bc84A6080A7cC7c2c2B2C75;
//         uint voteAward5 = 1;
//         bytes memory message = abi.encode(
//             awardee1,
//             voteAward1,
//             awardee2,
//             voteAward2,
//             awardee3,
//             voteAward3,
//             awardee4,
//             voteAward4,
//             awardee5,
//             voteAward5
//         );
//         teleporterMessenger.sendCrossChainMessage(
//             TeleporterMessageInput({
//                 destinationBlockchainID: 0x9f3be606497285d0ffbb5ac9ba24aa60346a9b1812479ed66cb329f394a4b1c7,
//                 destinationAddress: destinationAddress,
//                 feeInfo: TeleporterFeeInfo({
//                     feeTokenAddress: address(0),
//                     amount: 0
//                 }),
//                 requiredGasLimit: 100000,
//                 allowedRelayerAddresses: new address[](0),
//                 message: message
//             })
//         );
//     }
// }
