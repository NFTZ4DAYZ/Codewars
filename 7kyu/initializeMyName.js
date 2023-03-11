function initializeNames(name){
    name = name.split(' ')
     let result = ''
     for(let i = 0;i< name.length;i++) {
       if(i == 0) {
         result+= name[i] + ' '
       }else if(i == name.length - 1) {
         result+= name[i] + ' '
       }else {
   result += name[i][0] + '.' + ' '}
     }
     return result.trim()
   }