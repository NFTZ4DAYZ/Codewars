function getMissingElement(sup){
    let arr = [0,1,2,3,4,5,6,7,8,9]
   return arr.reduce( (acc,c) => acc + c,0) - sup.reduce( (acc,c) => acc + c,0)
    }