function checkThreeAndTwo(array) {
    let a = 0;
     let b = 0;
     let c = 0;
     for(let i = 0;i<array.length;i++){
       if(array[i] == 'a') {
   a++}else if(array[i] == 'b') {
     b++
   }else {
     c++
   }
     }
     if(a == 2 && b == 3 || b == 2 && a == 3|| c == 2 && b == 3 || c == 3 && b == 2 || c == 3 && a == 2 || c == 2 && a == 3) {
       return true
     }else {
       return false
     }
     
   }