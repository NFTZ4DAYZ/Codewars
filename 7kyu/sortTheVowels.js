function sortVowels(s){
    let vowel = 'aeiou'
    let ans = ''
    console.log(s)
    if(s== undefined) return ''
    for(let i = 0;i<s.length;i++) {
      if(vowel.includes(s[i].toLowerCase())) {
        ans+= '|' + s[i] + '\n'
      }else {
        ans+= s[i] +'|' + '\n'
      }
    }
    return ans.trim()
    }