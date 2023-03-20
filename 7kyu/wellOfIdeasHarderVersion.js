function well(x){
    let t = (x.join('').match(/good/gi) || []) .length
    return t <= 0 ? 'Fail!' : t <= 2 ? 'Publish!' : 'I smell a series!'
    }