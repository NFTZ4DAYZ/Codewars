function task(w, n, c) {
    let arr = ['James','John',"Robert", "Michael", "William"]
    let arr2 = ['Monday', 'Tuesday', "Wednesday", 'Thursday', 'Friday'].indexOf(w)
   return `It is ${w} today, ${arr[arr2]}, you have to work, you must spray ${n} trees and you need ${c*n} dollars to buy liquid`
  }