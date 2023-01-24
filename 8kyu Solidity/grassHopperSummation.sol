// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function summation(int n) public pure returns (int) {
 
     int result = 0;
    for(int i = 1; i <= n; i++) {
       result += i;
      
    }
     return result;
  }
 
}

//Using Gauss Summation

// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function summation(int n) public pure returns (int) {
    // your code here
    return (n*(n + 1))/2;
  }
}