function flyBy(lamps, drone){
    let dr = drone.indexOf('T')
    let str = ''
    
  for(let i = 0; i < lamps.length;i++) {
    if(lamps[i] == 'x' && i <= dr) {
      str+= 'o' 
    }else {
      str += lamps[i]
    }
    
  }
    return str
  }