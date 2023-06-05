function wallpaper(l, w, h) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
       return l && w && h ? numbers[Math.ceil((2*h*(l+w)/5.2)*1.15)] : numbers[0];
   }