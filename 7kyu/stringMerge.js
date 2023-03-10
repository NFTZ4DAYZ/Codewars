function stringMerge(string1, string2, letter){
    let str = string1.substr(0,string1.indexOf(letter) + 1)
    let str2 = string2.substr(string2.indexOf(letter) + 1)
    return str + str2
   
  }