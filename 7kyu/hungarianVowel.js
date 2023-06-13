function dative(word) {
    const eCase = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
    const aCase = ['a', 'á', 'o', 'ó', 'u', 'ú'];
    
    let vowel = '';
    for (let i=word.length-1; i>=0; i--) {
      vowel = word[i];
      
      if (eCase.includes(vowel)) {
        return word + 'nek'
      } else if (aCase.includes(vowel)) {
        return word + 'nak'    
      }    
    }
      
    return word;
  }