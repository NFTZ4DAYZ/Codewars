function noRepeat(str) {  
    let result = ''
    str = str.split("")
    for(let i = 0;i<str.length;i++) {
      if(str.indexOf(str[i]) == str.lastIndexOf(str[i])) result+= str[i];
    }
      return result[0];
    }