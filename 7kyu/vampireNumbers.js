var vampire_test = function(a, b){
    let mult = (a*b).toString().split('').sort().join('')
      let star = (a.toString() + b.toString()).split('').sort().join('')
       return star == mult ? true : false;
  }