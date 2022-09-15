// Hex to decimal 

// Complete the function which converts hex number (given as a string) to a decimal number.
function hexToDec(hexString){
    return  parseInt(hexString, 16);
   }

// function hexToDec(hexString){
//     // Check for a negative sign and remove it.
//     var isPositive = true;
//     if (hexString.startsWith("-")){
//       isPositive = false;
//       hexString = hexString.substring(1, hexString.length);
//     }
//     // Take the rest of the array and reduce it to a single number as follows:
//     // 1. Split the string into an array where each character is a separate element in the array.
//     // 2. Using the reduce method, calculate the value for each position of the array and add it to an accumulating result. 
//     //    The initial value of the accumulator is 0.
//     //    Each position is calculated using a map of the character to the numeric value (hexMap), and a power of 16 for the position in the original number.
//     //    For example:
//     //      2AD = 2 * 16^2 + 10 * 16^1 + 13 * 16^0 = 685 which is correct.  
//     var hexMap = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
//     var value = hexString.split("").reduce(function(result, currentValue, currentIndex){
//         return result + Math.pow(16, hexString.length - currentIndex - 1) * hexMap[currentValue];
//     }, 0);
//     // Make the number negative if needed.
//     if (!isPositive){
//       value *= -1;
//     }
//     // Return the result.
//     return value;
//   }