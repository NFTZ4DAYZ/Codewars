function anyArrows(arrows){
  
    return arrows.some(el => el.range && el.damaged !== true || arrows.damaged == false  );
  }