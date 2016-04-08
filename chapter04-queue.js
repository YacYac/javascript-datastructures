function Queue() {
  //properties and methods go here
  var items = [];

  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items.toString());
  };
}

var queue = new Queue();
console.log(queue.isEmpty()); //outputs true

queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");

queue.print();
console.log(queue.size()); //outputs 3
console.log(queue.isEmpty()); //outputs false
queue.dequeue();
queue.dequeue();
queue.print();
