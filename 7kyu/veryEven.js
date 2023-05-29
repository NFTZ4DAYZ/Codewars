function isVeryEvenNumber(n) {
    while(n.toString().length > 1) {
      n = n.toString().split('').reduce((acc,c)=> acc + +c,0)  
       }
         return n%2 == 0 ? true : false;
           } 