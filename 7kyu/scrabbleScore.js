function scrabbleScore(str){
    let ans = 0;
    str = str.toUpperCase()
    for(let i = 0;i<str.length;i++) {
      if($dict[str[i]]) ans += $dict[str[i]]
    } 
    return ans;
  }