function remove (string) {
    string = string.split(' ')
    let result = []
    for(let i = 0;i<string.length;i++){
      if(!string[i].includes('!')) {
        result.push(string[i])
      }
      else if(string[i].indexOf('!') == string[i].lastIndexOf('!')) {
        continue;
      }else result.push(string[i])
    }
    return result.join(' ')
  }