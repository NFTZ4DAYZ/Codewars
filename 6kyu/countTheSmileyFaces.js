// Count the smiley faces 


// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array).

// Order of the face (eyes, nose, mouth)

// elements will always be the same.



function countSmileys(arr) { 
    const validSmileys = {
      ":)": true, ";)": true, ":D": true,
      ";D": true, ":-D": true, ":~D": true,
      ":-)": true, ":~)": true, ";~D": true,
      ";~)": true, ";-D": true, ";-)": true
    };
    return arr.filter(chars => validSmileys[chars]).length;  
  }

//   function countSmileys(arr) {
//     var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
//     var count = 0;
    
//     for (var i=0; i<arr.length; i++){
//       for (var j=0; j<smileys.length; j++){
//         if (arr[i]===smileys[j]){
//           count++;
//         }
//       }
//       }
//     return count;
//     }