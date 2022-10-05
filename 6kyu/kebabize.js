// Kebabize 


// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

const kebabize = str => {
    str = str.replace(/[0-9]/g, '')
     return str.split('').map((letter, idx) => {
       return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
     }).join('');
  }