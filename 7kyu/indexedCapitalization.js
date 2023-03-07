function capitalize(s,arr){
  return s.split('').map( (el,idx) => arr.includes(idx) ? el.toUpperCase() : el).join('')
};