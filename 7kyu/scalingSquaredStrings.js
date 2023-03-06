function scale(strng, k, n) {
    return (strng + '\n').replace(/([a-z])/gi,'$1'.repeat(k) ).replace(/([a-z]+\n)/gi, '$1'.repeat(n)).trim() 
    }
    
    