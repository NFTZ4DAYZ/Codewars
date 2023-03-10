function divisibleByThree(str){
    return str.split('').map(el=> +el).reduce( (acc,c) => acc + +c) % 3 == 0
    }