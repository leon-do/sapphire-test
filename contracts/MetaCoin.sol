// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract MetaCoin {
    uint256 public number = 10;
    event Increment(uint256 number);

    // 0x7cf5dab00000000000000000000000000000000000000000000000000000000000000001
    function increment(uint256 _num) public returns (uint256) {
        number = number + _num;
        emit Increment(_num);
        return number;
    }
}
