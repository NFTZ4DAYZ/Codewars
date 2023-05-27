function fizzBuzzCuckooClock(time) {
    let num = +time.slice(3,time.length)
     let rep = +time.slice(0,2)
        if(num %3 == 0 && num%5 == 0 && num == 00)return 'Cuckoo '.repeat(rep > 12 ? rep - 12 : 12).trim()
          else if(num %3 == 0 && num%5 == 0 && num == 30)return 'Cuckoo'
             else if(num %3 == 0 && num%5 == 0)return 'Fizz Buzz'
                else if(num%5 == 0) return 'Buzz'
                  else if(num%3 == 0) return 'Fizz'
                    else return 'tick'
  }
  