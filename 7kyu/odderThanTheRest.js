function oddOne(arr) {
    return arr.indexOf(+arr.filter(el=> el%2!=0).toString());
  }