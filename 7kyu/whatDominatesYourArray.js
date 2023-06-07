function dominator(numbers) {
    const occurrences   = {};
      const threshold     = numbers.length / 2;
  
      for (let number of numbers) {
          if (!Number.isInteger(number)) {
              throw new TypeError("Expected first argument to be an array of integers.");
          }
  
          if (occurrences[number]) {
              occurrences[number]++;
          } else {
              occurrences[number] = 1;
          }
  
          if (occurrences[number] > threshold) {
              return number;
          }
      }
  
      return -1;
  }