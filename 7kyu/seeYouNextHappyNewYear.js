function nextHappyYear(year){
    const nextYear = year + 1;
      const isHNY = new Set(`${nextYear}`).size == `${year}`.length
    
       if(!isHNY) {
        return nextHappyYear(nextYear)
      }
       return nextYear
    }