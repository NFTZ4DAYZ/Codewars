function filterHomogenous(myArrays) {
    const isHomogenous = (array) =>
      array.every((el, i, arr) => typeof el === typeof arr[0]);
    return myArrays.filter((array) => array.length && isHomogenous(array));
  }