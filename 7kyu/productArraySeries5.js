function productArray(numbers){
    return numbers.map (el => numbers.reduce( (acc,c)=> acc*c)/el)
   }