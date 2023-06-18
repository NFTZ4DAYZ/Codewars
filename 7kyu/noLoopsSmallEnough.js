function smallEnough(a, limit){
    return a.filter(el=> el<= limit).length == a.length;
    }