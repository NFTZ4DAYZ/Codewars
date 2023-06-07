function Node(data) {
    this.data = data;
     this.next = null;
  }
  
  function push(head, data) {
    let node = new Node(data);
      node.next = head;
       return node;
  }
  
  function buildOneTwoThree() {
    let node = push(null,3)
     node = push(node,2);
       node = push(node,1);
    
       return node;
        }