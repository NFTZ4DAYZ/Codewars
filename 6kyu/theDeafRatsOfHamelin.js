var countDeafRats = function(town) {
    const [left,right] = town
   .replace(/[^O~P]/g, '')
    .split('P')
    .map(el=> el.match(/.{2}/g) || []);
   return left.reduce( (acc,c) => acc+ (c == 'O~'),0) + right.reduce( (acc,c) => acc + (c == '~O'),0)
  }
  