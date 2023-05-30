var ownedCatAndDog = function(catYears, dogYears) {
    const cat = catYears < 15 ? 0 :  catYears === 15 || catYears < 24 ? 1 : (catYears - 24)/4 + 2;
       const dog = dogYears < 15 ? 0 : dogYears === 15 || dogYears <  24 ? 1 : (dogYears - 24)/5 + 2;
         return [Math.floor(cat), Math.floor(dog)]
            }
  