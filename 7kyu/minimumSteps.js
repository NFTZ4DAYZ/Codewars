function minimumSteps(numbers, value){
    let result = 0;
    let flag = 0;
     numbers = numbers.sort((a,b)=> a- b)
     
     for(let i = 0;i< numbers.length;i++){
       if(flag < value) {
         result++;
         flag+=numbers[i]
   
       }
     }
     return result - 1;
   }