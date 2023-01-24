// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract ThirdAngle {
  function otherAngle(int angle1, int angle2) public pure returns (int) {
   
    int a1 = angle1;
    int a2 = angle2;
    return 180 - a1 - a2;
  }
}
