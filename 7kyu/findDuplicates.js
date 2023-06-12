function duplicates(arr) {
    let map = new Map();
     let set = new Set();
       arr.forEach(el=> {
         map.has(el) ? set.add(el) : map.set(el, true)
       })
     return Array.from(set)
   }