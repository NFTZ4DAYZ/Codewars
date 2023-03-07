const gcd = (a,b) => b ? gcd(b, a%b) : a;
const lcd = (a,b) => a*b/gcd(a,b);

function convertFrac(lst){ 
  const x = lst.reduce( (a, [_, d]) => lcd(d,a), 1);
  return lst.map( ([n,d]) => `(${n*x/d},${x})`).join('')
 
}