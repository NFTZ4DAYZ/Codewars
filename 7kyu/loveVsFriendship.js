// Love vs friendship  


// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

function wordsToMarks(string){
    return string.split('').map( (char) => char.charCodeAt() - 96).reduce( (acc,c) => acc + c,0)
  }