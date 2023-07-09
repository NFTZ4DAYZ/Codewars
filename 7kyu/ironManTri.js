function iTri(s){
    let c = 112 + 2.4 + 26.2
    let l = (c - s).toFixed(2)
    if(s>c) return  `You're done! Stop running!`
    if(s == 0) return 'Starting Line... Good Luck!'
    if(s < 2.4) return {Swim: `${l} to go!`}
    if(s <=114.4) return {Bike: `${l} to go!`}
    if(s<= c - 10) return {Run: `${l} to go!`}
    if(s<= c) return {Run:'Nearly there!'}
  }