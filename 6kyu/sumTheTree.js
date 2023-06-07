function sumTheTreeValues(root){
    let ans = root.value;
      if(root.left) {
       ans+= sumTheTreeValues(root.left);
         }
    if(root.right) {
      ans+= sumTheTreeValues(root.right);
       }
         return ans;
        }