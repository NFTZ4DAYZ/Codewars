function searchNames( logins ){
    return logins.filter( (el)=> el[0].endsWith('_') || el[1].endsWith('_'))
                }