// Sum of numbers from 0 to N  

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

var SequenceSum = (function() {
    function SequenceSum() {}
    SequenceSum.showSequence = function(count) {
       let result = [];
        for(let i = 0; i <= count; i++) {result.push(i)}; 
      let a = result.reduce( (a,b) => a + b, 0);
      let b = result.join('+');
    if(count<0) return `${count}<0`;
     if(count==0) return `${count}=0`;
     return `${b} = ${a}`
     
    };
    return SequenceSum;
  
  })();