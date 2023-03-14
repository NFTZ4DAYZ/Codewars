function numberJoy(n) {
    let dig = +n.toString().split('').map(el=>+el).reduce( (acc,c) => acc + c)
      let rev = dig.toString().split('').reverse().map(el=> +el).join('')
        return dig*rev == n ? true : false;
}