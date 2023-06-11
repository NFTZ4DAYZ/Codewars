const binaryToString = binary =>  
     binary.replace(/.{8}/g, e => String.fromCharCode(parseInt(e,2)) )
