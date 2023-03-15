function tripleX(str){
    str = str.split('')
     let ex = str.indexOf('x')
     return str[ex + 1] == 'x' && str[ex + 2] == 'x'
   }
   
   