function swap (string) {
    string = string.split('')
    let ans = ''
    if(string.length == 0) {
      return ''
    }else if(string.length > 0) { 
    for(let i = 0; i < string.length; i++) {
      if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
        ans += string[i].toUpperCase();
      }else {
        ans += string[i]
      }
    }}
    return ans
  }