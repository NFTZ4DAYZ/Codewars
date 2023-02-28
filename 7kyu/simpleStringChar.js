function solve(s){
    let upp = 0
    let down = 0
    let spec = 0
    let num = 0
    s = s.split('').forEach(x=> {
     if(/[A-Z]/.test(x)) {
       upp++;
     }else if(/[a-z]/.test(x)) {
       down++
     }else if(/[0-9]/.test(x)) {
       num++
     }else {
       spec++
     }
    })
                          return [upp,down,num,spec]
   }