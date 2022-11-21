// All star coding challenge 3


// This Kata is intended as a small challenge for my students

// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""


var removeVowels = function(str){
    let vowel = 'aeiou'.split('')
    str = str.split('')
    let result = ''
    for(let i = 0; i < str.length; i++) {
      if(!vowel.includes(str[i]) ) {
        result += str[i]
      }   
    } 
    return result
  }