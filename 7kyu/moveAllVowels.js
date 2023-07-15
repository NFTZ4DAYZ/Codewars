function moveVowel(input) {
    let vowel = 'aeiou'
    let ans = ''
    for(let i = 0;i<input.length;i++) {
  if(vowel.includes(input[i].toLowerCase())) {
    ans+= input[i]
  }}
  let less = input.replace(/[aeiou]/gi, '')
  return less + ans
  }