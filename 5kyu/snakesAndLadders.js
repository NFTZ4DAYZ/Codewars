function SnakesLadders() {
    this.snakes = {16:6,46:25,49:11,62:19,64:60,74:53,89:68,92:88,95:75,99:80};
    this.ladders = {2:38,7:14,8:31,15:26,21:42,28:84,36:44,51:67,71:91,78:98,87:94};
    this.playerPlaces = {1:0,2:0};
    this.currentPlayer = 1;
    this.gameOver = false;
  };
  
  SnakesLadders.prototype.play = function(die1, die2) {
   
    if (this.gameOver) return "Game over!";
    
    this.playerPlaces[this.currentPlayer] += die1+die2;
    
    
    if (this.playerPlaces[this.currentPlayer] == 100) {
      this.gameOver = true;
      return "Player "+ this.currentPlayer +" Wins!";
    } else if (this.playerPlaces[this.currentPlayer] > 100) 
     
      this.playerPlaces[this.currentPlayer] = 100 - (this.playerPlaces[this.currentPlayer] - 100);
    
   
    if (this.snakes[this.playerPlaces[this.currentPlayer]]) this.playerPlaces[this.currentPlayer] = this.snakes[this.playerPlaces[this.currentPlayer]];
    
    if (this.ladders[this.playerPlaces[this.currentPlayer]]) this.playerPlaces[this.currentPlayer] = this.ladders[this.playerPlaces[this.currentPlayer]];
  
      let result = "Player "+ this.currentPlayer+ " is on square "+this.playerPlaces[this.currentPlayer]
      if (die1 !== die2) this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
    return result
  }
  