function mostFrequentItemCount(collection) {

    return collection.length ? Math.max(
    ...collection.map(
       el=> collection.filter(
         el2=> el2 == el).length
    )
   )
   : 0;
   
 }