// Compare strings by sum of chars 



// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function compare(a, b) {
  if (!a || /[^a-z]/i.test(a)) a = "";
  if (!b || /[^a-z]/i.test(b)) b = "";
  [a, b] = [a.toUpperCase(), b.toUpperCase()];
  return a.split("").reduce((s, c) => s + c.charCodeAt(), 0) === b.split("").reduce((s, c) => s + c.charCodeAt(), 0);
}


