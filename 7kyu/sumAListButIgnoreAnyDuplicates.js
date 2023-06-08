function sumNoDuplicates(numList) {
    let ans = 0;
    for(let i = 0;i<numList.length;i++) {
      if(numList.indexOf(numList[i]) == numList.lastIndexOf(numList[i])) {
        ans += numList[i]
      }
    }
    return ans;
  }