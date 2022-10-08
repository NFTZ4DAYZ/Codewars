// longest palindrome 


// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0




longestPalindrome=function(s){
    let shlong = ''
    for(let i = 0; i < s.length; i++) {
      
      checkLeftAndRight(i,i);
      checkLeftAndRight(i, i+1)
    }
    function checkLeftAndRight(left,right) {
      while(left >= 0 && right < s.length && s[left] === s[right]) {
        if(right - left + 1 > shlong.length) {
          shlong = s.slice(left,right + 1);
        }
        left--;
        right++
      }
    }
    return shlong.length
  }