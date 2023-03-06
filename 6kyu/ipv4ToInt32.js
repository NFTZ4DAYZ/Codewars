function ipToInt32(ip){
    return ip.split('.').reduce( (acc,c) => acc*256 + +c,0)
  }