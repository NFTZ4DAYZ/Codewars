function solve(arr){
    let result = []
      arr = arr.sort((a,b)=> b - a)
        while(arr.length > 0) {
          result.push(arr[0])
            arr.shift()
              if (arr.length !== 0) {
                 result.push(arr[arr.length - 1])
                  arr.pop()
                    }}
                      return result
                        }