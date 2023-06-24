const sumSquareEvenRootOdd = ns => {
    return +ns.map(el=> el%2 == 0 ? el**2 : Math.sqrt(el)).reduce( (acc,c)=> acc + +c).toFixed(2)
  };