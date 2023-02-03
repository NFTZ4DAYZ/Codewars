pragma solidity ^0.8.16;

contract Kata {
  function angle(int n) public pure returns (int) {
    int angle = (n - 2) * 180;
    return angle;
  }
}