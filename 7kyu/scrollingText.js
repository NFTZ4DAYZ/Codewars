function scrollingText(text){
    let result = [];
       for(let i = 0;i< text.length;i++) {
         result.push(text.slice(i,text.length) + text.slice(0,i))
       }
     return result.map(el=> el.toUpperCase())
   }