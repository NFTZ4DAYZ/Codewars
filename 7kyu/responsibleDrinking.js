function hydrate(s) {
    let gls = s.match(/[1-9]/g).map(el=>+el).reduce( (acc,c) => acc + c) 
    return gls == 1 ? "1 glass of water" :`${gls} glasses of water`
  }