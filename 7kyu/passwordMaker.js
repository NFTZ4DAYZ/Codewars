function makePassword(phrase) {
    let ans = '';
      phrase = phrase.split(' ').map(el=> el[0]).join('')
       .replace(/[iI]/gi, '1')
         .replace(/[0O]/gi, '0')
            .replace(/[sS]/gi, '5')
               return phrase;
  }