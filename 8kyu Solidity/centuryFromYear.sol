// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function century(int year) public pure returns (int) {
    int div = year/100;

    if(year %100 == 0) {
      return div;
    }else {
      return div + 1;
    }
    }
  }


  // SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function century(int year) public pure returns (int) {
    return (year + 99) / 100;
  }
}