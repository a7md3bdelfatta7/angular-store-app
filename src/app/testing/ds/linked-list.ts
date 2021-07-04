
class Node<T> {
     element: T;
     next: Node<T>;
     constructor(element: T) {
          this.element = element;
          this.next = null
     }
}


export class LinkedList<T> {

     head: Node<T>;
     size: number;
     constructor() {
          this.head = null;
          this.size = 0;
     }

     add(element: T) {
          var node = new Node(element);
          if (this.head == null) {
               this.head = node;
          } else {
               var lastElementRef = this.head;
               while (lastElementRef.next != null) {
                    lastElementRef = lastElementRef.next;
               }
               lastElementRef.next = node;
          }
          this.size++;
     }

     removeElement(element: T) {
          var current = this.head;
          var prev = null;
          let tempCurrent = null;
          while (current) {
               if (current.element == element) {
                    if (prev) {
                         prev.next = current.next;
                    } else {
                         this.head = current.next;
                    }
                    this.size--;
                    return current.element;
               }
               prev = current;
               current = current.next;
          }
          return -1;
     }

     insertAt(element, index) {
          var node = new Node(element);
          if (index >= 0 && index < this.size) {
               if (index == 0) {
                    node.next = this.head;
                    this.head = node;
               } else {
                    var current = this.head;
                    for (var i = 0; i < index - 1; i++) {
                         current = current.next;
                    }
                    node.next = current.next;
                    current.next = node;
               }

               this.size++;
          } else {
               return "out of list range";
          }
     }

     isEmpty() {
          return this.size == 0;
     }

     printList() {
          var current = this.head;
          while (current) {
               console.log(current.element);
               current = current.next;
          }
     }

     // functions to be implemented
     // add(element)
     // insertAt(element, location)
     // removeFrom(location)
     // removeElement(element)

     // Helper Methods
     // isEmpty
     // size_Of_List
     // PrintList

}