pragma solidity ^0.8.18;

interface IMeritToken {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract CameraBorrowingSystem {
    IMeritToken public meritToken;
    mapping(uint256 => address) public cameraBorrower; // Maps camera ID to borrower's address
    mapping(address => uint256) public userStakes; // Maps user to their staked merits

    constructor(address _meritTokenAddress) {
        meritToken = IMeritToken(_meritTokenAddress);
    }

    function borrowCamera(uint256 cameraId, uint256 stakeAmount) external {
        require(cameraBorrower[cameraId] == address(0), "Camera already borrowed");
        require(meritToken.transferFrom(msg.sender, address(this), stakeAmount), "Stake transfer failed");

        cameraBorrower[cameraId] = msg.sender;
        userStakes[msg.sender] += stakeAmount;
    }

    function returnCamera(uint256 cameraId, bool isDamaged) external {
        require(cameraBorrower[cameraId] == msg.sender, "Not the borrower");
        uint256 stakeAmount = userStakes[msg.sender];

        uint256 refundAmount = isDamaged ? 0 : stakeAmount * 90/100; // 10% is spent for camera renting
        require(meritToken.transfer(msg.sender, refundAmount), "Refund transfer failed");

        delete cameraBorrower[cameraId];
        userStakes[msg.sender] = 0;
    }
}
