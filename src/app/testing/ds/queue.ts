export class Queue {

     items;
     size = 10;
     constructor() {
          this.items = new Array(this.size);
     }

     enqueue(ele) {
          this.items.push(ele);
     }

     dequeue() {
          if (this.isEmpty) {
               return null;
          }
          return this.items.shift();
     }

     isEmpty() {
          return this.items.length == 0;
     }

     isFull() {
          return this.items.length == this.size;
     }

     peek() {
          return this.items.length > 0 ? this.items[this.items.length - 1] : null;
     }

}
