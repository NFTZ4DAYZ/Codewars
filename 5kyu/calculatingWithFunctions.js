function recur(n,x) {return (x) ? x.call(x, n) : n;}
function zero(x) {return recur(0,x);}
function one(x) {return recur(1,x);}
function two(x) {return recur(2,x);}
function three(x) {return recur(3,x);}
function four(x) {return recur(4,x);}
function five(x) {return recur(5,x);}
function six(x) {return recur(6,x);}
function seven(x) {return recur(7,x);}
function eight(x) {return recur(8,x);}
function nine(x) {return recur(9,x);}

function plus(num) {
return function(y) {
  return num + y
}}

function minus(num) {
  return function(y) {
    return y - num
  }}

function times(num) {
return function(y)  {
  return num*y
}}

 function dividedBy(num) {
   return function(y) {
     return Math.floor(y/num)
   }}