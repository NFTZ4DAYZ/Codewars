// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;


pragma solidity ^0.8.16;
contract Kata {
  function rowSumOddNumbers(int n) public pure returns (int) {

  return n **3;
  }
}



//times out now along w/ other older solutions
contract Kata {
  function rowSumOddNumbers(int n) public pure returns (int) {
    int firstDigit = (n * n) - (n - 1);
    int ans = 0;
    int count = 0; 
    while(count < n) {
      if(firstDigit % 2 != 0) {
        ans += firstDigit;
        count++;
      }
     firstDigit++;  
    }
    return ans;   
     }
  }