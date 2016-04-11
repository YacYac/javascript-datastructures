function DoublyLinkedList() {
  var Node = function (element) {
    this.element;
    this.next;
    this.prev; //NEW
  };

  var length = 0;
  var head = null;
  var tail = null; //NEW

  //methods here
  this.insert = function (position, element) {
    //check for out-of-bounds values
    if (position >= 0 && position <= length) {
      var node = new Node(element),
          current = head,
          previous,
          index = 0;

      if (position === 0) { //add on first position
        if (!head){ //NEW {1}
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node; //NEW {2}
          head = node;
        }
      } else if (position === length) { //last item //NEW
        current = tail; //{3}
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) { //{4}
          previous = current;
          current = current.next
        }
        node.next = current // {5}
        previous.next = node;

        current.prev = node; //NEW
        node.prev = previous; //NEW
      }

      length++; //update size of list
      return true;
    } else {
      return false;
    }
  }  
}
