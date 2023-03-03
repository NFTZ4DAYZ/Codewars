function filterLongWords(sentence, n) {
    sentence = sentence.split(' ');
    return sentence.filter(el=> el.length > n)
  }