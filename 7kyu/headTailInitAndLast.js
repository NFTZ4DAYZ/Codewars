function head(el) {
    return el[0]
  }
  function tail(el) {
    return el.length > 1 ? el.slice(1) : [];
  }
  function init(el) {
    return el.slice(0,el.length - 1)
  }
  function last(el) {
  return el[el.length - 1]}