function remove (string) {

    return string.split(' ').map(el=> el.replace(/!+$/gi, '')).join(' ')
  }