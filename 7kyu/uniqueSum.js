function uniqueSum(lst){
    return lst.length ? Array.from(new Set(lst)).reduce( (acc,c)=> acc + +c) : null;
  }