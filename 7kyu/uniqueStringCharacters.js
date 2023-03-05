function solve(a,b){
    let setA = new Set(a);
    let setB = new Set(b);
      return [...(a+b)].filter(c=> setA.has(c) ^ setB.has(c)).join('')
    }