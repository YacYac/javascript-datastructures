function LinkedList() {
  var Node = function (element) { //{1}
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    var node = new Node(element), //{1}
        current; //{2}

    if (head === null) { //first node on the list //{3}
      head = node;
    } else {
      current = head; //{4}

      //loop the list until find last item
      while (current.next){
        current = current.next;
      }

      //get last item and assign next to node to make the link
      current.next = node; //{5}
    }

    length++; //update size of the list //{6}
  };
  this.insert = function (position, element) {
    //check for out-of-bounds values
    if (position > -1 && position < length) { //{1}
      var node = new Node(element),
          current = head,
          previous,
          index = 0;

      if (position === 0) { //add on first position
        node.next = current; //{2}
        head = node;
      } else {
        while (index++ < position) { //{3}
          previous = current;
          current = current.next;
        }
        node.next = current; //{4}
        previous.next = node; //{5}
      }

      length++; //update size of list
      return true;
    } else {
      return false; //{6}
    }
  };
  this.removeAt = function (position) {
    //check for out-of-bounds values
    if (position > -1 && position < length) { //{1}
      var current = head, //{2}
          previous, //{3}
          index = 0; //{4}

      //removing first item
      if (position === 0) { //{5}
        head = current.next;
      } else {
        while (index++ < position){ //{6}
          previous = current; //{7}
          current = current.next; //{8}
        }

        //link previous with current's next: skip it to remove
        previous.next = current.next;
      }

      length--; //{10}\
      return current.element;
    } else {
      return null; //{11}
    }
  };
  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.indexOf = function (element) {
    var current = head, //{1}
        index = -1;

    while (current) { //{2}
      if (element === current.element) {
        return index; //{3}
      }
      index++; //{4}
      current = current.next; //{5}
    }

    return -1;
  };
  this.isEmpty = function () {
    return length === 0;
  };
  this.size = function () {
    return length;
  };
  this.toString = function () {
    var current = head, //{1}
        string = '';    //{2}

    while (current) { //{3}
      string = current.element; //{4}
      current = current.next;   //{5}
    }
    return string;              //{6}
  };
  this.print = function () {
    console.log(this.toString());
  }
  this.getHead = function () {
    return head;
  };
}

var list = new LinkedList();
list.append(15);
list.append(10);
console.log(list);
