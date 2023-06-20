function isItANum(str) {
    str = str.match(/[0-9]/g)
      if(str == null) return "Not a phone number"
        return str.length == 11 && str[0] == 0 ? str.join("") : 'Not a phone number';
  }