function wordSearch(query, seq){
    let result = []
    query = query.toLowerCase()
    let seqh = seq.join(',').toLowerCase().split(',')
    for(let i = 0; i < seq.length;i++) {
   if(seqh[i].includes(query)) {
     result.push(seq[i])
   }
    }
    return result.length ? result : ["Empty"]
  }