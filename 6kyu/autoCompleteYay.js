function autocomplete(input, dict){
    let array = [];
    let regex = /[A-Z]/gi;
    
    input = input.match(regex).join('');
    
    dict.forEach((el)=> {
      if(el.slice(0, input.length).toLowerCase() === input) {
        if(array.length <= 4) {
          array.push(el)
        }
      }
    })
  return array
    }