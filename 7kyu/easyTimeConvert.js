function timeConvert(num) { 
    let hr = String(Math.floor(num/60)).padStart(2,'0')
     let mn = String(num%60).padStart(2,'0')
      return num > 0 ? `${hr}:${mn}`:'00:00'
    
    }