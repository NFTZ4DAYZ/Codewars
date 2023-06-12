function diagonalSum(matrix){
    let ans = [];
     for(let i = 0;i<matrix.length;i++) {
       ans.push(matrix[i][i]);
     }
     return ans.reduce( (acc,c) => acc + +c)
   }