function solution(n){
    let x = Math.round(n)
    let y = 1/2
    let z = n-x
    if(n-x <0) {
      z = (n-x)*-1
    }
    if(z<=.25) return x;
    if(z> .25 && n<x) return x - y
    if(z >.25 && n>x) return x + y
  }