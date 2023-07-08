function ballCollector(d) {
    return {weight: +d.filter(el=> el == '58').map(Number).reduce( (acc,c) => acc + +c,0)}
  }