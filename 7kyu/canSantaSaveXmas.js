function determineTime (durations) {
    if(!durations.length) return true;
     let mins = 0;
     let hourss = 0;
     let secs = 0;
     for(let i = 0;i<durations.length;i++) {
       let hours = durations[i].slice(0,2)
       let min = durations[i].slice(3,5)
       let sec = durations[i].slice(7,9)
        mins+= +min
       secs+= +sec
       hourss+= +hours
     }
     return hourss + mins/60 + secs/3600 <= 24;   
   }