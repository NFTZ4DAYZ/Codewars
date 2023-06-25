sortme = function( names ){
    return names.sort(function(first, second) {
      return first.toLowerCase().localeCompare(second.toLowerCase())
    })
  }