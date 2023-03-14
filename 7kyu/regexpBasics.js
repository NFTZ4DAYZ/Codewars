String.prototype.vowel = function() {
    if(this.length <= 1) {
      return  this.match(/[AEIOU]/gi,) ? true : false;     
    }else return false;
  }