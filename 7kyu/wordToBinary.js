
function wordToBin(str){ 
    return str.split('').map(el=> '0' + el.charCodeAt().toString(2))    
  }
  