function lastSurvivor(letters, coords) {

    for(let letter of coords) {
     letters = letters.slice(0,letter) + letters.slice(letter+1)
    }
      return letters
    }