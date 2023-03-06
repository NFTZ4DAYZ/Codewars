var filterString = function(value) {
    return +(value.split('').filter(el=> Number(el) == el).join(''))
   }