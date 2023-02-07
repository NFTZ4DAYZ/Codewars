// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.0;

contract GiftCoin {
  mapping (address => uint) coins;
	address public owner; 

  constructor() {
    owner = msg.sender;
  }
  event GiftSent(
      address from,
      address to,
      uint amount
  );
  function sendGift(address receiver, uint amount) public {
    // TODO: We need to take coins from the account that sent this and gift them to the reciever address
    // only if the account that sent this has sufficient funds
    // If successful we'll broadcast the GiftSent event
    if (coins[msg.sender] > amount) {
      coins[msg.sender] -= amount;
      coins[receiver] += amount;
      emit GiftSent(msg.sender, receiver, amount);
    }
  }
  function mintCoins(address target, uint256 mintedAmount) onlyOwner public {
		coins[target] += mintedAmount;
	}
	modifier onlyOwner { 
		require(msg.sender == owner); 
    _;
	}

  function balanceOf(address addr) public view returns(uint) {
    return coins[addr];
  }
}