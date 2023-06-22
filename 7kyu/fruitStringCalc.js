function calculate(string) {
    string = string.split(' ');
      return string[5] == 'loses' ? +string[2] - +string[6] : +string[2] + +string[6];
    }