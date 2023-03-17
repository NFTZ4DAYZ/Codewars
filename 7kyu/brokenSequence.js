function findMissingNumber(sequence){
    if(sequence=="") return 0
   if (!/[0-9]/gi.test(sequence)) return 1;
  sequence=sequence.split(" ").map(Number)
    for(var i=1;i<=sequence.length;i++){
    if(i!==sequence[i-1]) return i
    }
  return 0
}