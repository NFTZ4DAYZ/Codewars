add & subtract


function calculate(str) {
    str = str.replace(/plus/g, ' ').replace(/minus/g, ' -').split(' ').reduce( (acc,c) => +acc + +c) + "";
      return str
     }