var flatten = function (array){
    return array.reduce( (acc,c) => acc.concat(c), [])
    }