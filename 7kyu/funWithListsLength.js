function length(head) {
    if(head == null) return 0;
      let count = 0;
         while(head.next) {
            count++;
             head = head.next;
               }
               return count+ 1;
                }