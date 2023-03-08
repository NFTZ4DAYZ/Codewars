var makeBackronym = function(string){
    return string.split('').map(el=>dict[el.toUpperCase()]).join(' ')
  };