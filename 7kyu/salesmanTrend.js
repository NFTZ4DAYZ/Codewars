function travel(r, zipcode) {
    let arr = r.split(',');
    let numArray;
    let letterArray = [];
    
    let regex = /\d{5}/;
      if (!arr.find(item => item.includes(zipcode)) || !regex.test(zipcode)) {
        return zipcode + ":/";
      }
    arr = arr.filter(el => el.includes(zipcode));
    arr = arr.map(el=>el.substring(0 ,el.indexOf(zipcode)));
    
      for (let i = 0; i < arr.length; i++) {
         if (arr[i].match(/[a-z.]+/gi) !== null) {
            letterArray.push(arr[i].match(/[a-z.]+/gi).join(" "));
          }
        }
         numArray = arr.map(item => item.match(/[0-9]+/g)); 
      
         return zipcode + ":" + letterArray.join(",") + "/" + numArray.join(",");   
  
    
  }
  
  