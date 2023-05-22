function pendulum(values) {
    let result= []
      values = values.sort((a,b) => a- b)
         for(let i = 0;i<values.length;i++) {
          if(i%2==0) {
            result.unshift(values[i])
              }else{
                 result.push(values[i])
      }
  }
    return result
  }