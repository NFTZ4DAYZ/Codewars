function counterEffect(hitCount) {
    let res = [];
     let arr1 = [];
     let arr2 = [];
     let arr3 = [];
     let arr4 = []
     
     let arr0 = hitCount.split('').map(Number)
       for(let i = 0;i<=arr0[0];i++) {
         arr1.push(i)
       }
     for(let j = 0;j<=arr0[1];j++) {
         arr2.push(j)
       }
     for(let k = 0;k<=arr0[2];k++) {
         arr3.push(k)
       }
     for(let l = 0;l<=arr0[3];l++) {
         arr4.push(l)
       }
     return [arr1,arr2,arr3,arr4]
    
   }