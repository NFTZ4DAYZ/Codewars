function remove (string) {
    string = string.split('').reverse();
      let result = ''
        for(let i = 0;i<string.length;i++) {
          if(string[i] == '!') result+= '!'
             else {break}
             }
               string = string.reverse().join('').replace(/!/g, '')
                  return string.concat(result)
              } 