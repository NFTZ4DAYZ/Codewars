function findChildren(s) {
	s = s.toLowerCase().split('')
  let ans = ''
  let setS = [...new Set(s)].sort()
  for(let i = 0; i < setS.length; i++) {
    for(let j = 0; j< s.length; j++) {
      if(setS[i] == s[j]) ans += s[j];
    }
  }
  return ans.split('').map( (el,i) => el != ans[i - 1] ? el.toUpperCase() : el).join('')
}