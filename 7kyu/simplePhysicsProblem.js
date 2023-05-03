function solveIt(vi, vf, t){
    let a = (vf - vi)/t
     return vi>vf ? [] : [+a.toFixed(2), +(vi*t + .5*a*t**2).toFixed(2)]
  }