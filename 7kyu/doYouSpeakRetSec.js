function reverseByCenter(s){ 
    let len = s.length;
    if(len%2==0) {
      return s.slice(len/2) + s.slice(0,len/2)
    }else {
      return s.slice(Math.ceil(len/2)) + s[Math.floor(len/2)] + s.slice(0,Math.floor(len/2))
    }
  }