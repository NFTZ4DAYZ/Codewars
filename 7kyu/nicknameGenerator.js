function nicknameGenerator(name){
    let vow = 'aeiou'.split('')
      if(name.length <=3) return 'Error: Name too short'
        if(vow.includes(name[2])) {
          return name.slice(0,4)
             }else return name.slice(0,3)
               }