function borrow(s){
    let ans = ''
    let alph = 'abcedefghijklmnopqrstuvwxyz'
    s = s.toLowerCase('')
    for(let i = 0;i< s.length;i++) {
      if(alph.includes(s[i])) ans+=s[i]
    }
    return ans;
  }