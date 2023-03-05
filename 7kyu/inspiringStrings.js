function longestWord(stringOfWords){
let str = Math.max(...stringOfWords.split(' ').map(el=>el.length) ) 
stringOfWords = stringOfWords.split(' ')
let char = stringOfWords.filter(e=> e.length == str) 
return char[char.length-1]
}