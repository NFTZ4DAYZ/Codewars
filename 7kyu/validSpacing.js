function validSpacing(s) {
    return s=='' ? true : s.split(' ').find(el=> el=='') >= 0 ? false : true
  }