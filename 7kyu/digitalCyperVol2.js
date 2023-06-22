function decode  (code, n) {
    let alph = '0abcdefghijklmnopqrstuvwxyz'
    let ans = '';
   n = String(n).repeat(code.length).split('').map(Number)
  for(let i = 0;i<code.length;i++) {
    code[i] -= n[i]
  }
  for(let el of code) {
    ans += alph[el]
  }
  return ans;
}
