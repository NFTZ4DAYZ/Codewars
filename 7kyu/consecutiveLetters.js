function solve(s){
    let char = [];
    let ans = true;
      let help =  s.split('')
    
    for(let i = 0;i<help.length;i++) {
      char.push(s.charCodeAt(i));
    }
    char = char.sort( (a,b) => a - b)
   
      for(let j = 0;j<char.length - 1;j++) {
        if(char[j+1] != char[j] + 1) {
          ans = false;
        }
      }
  return ans;
  }