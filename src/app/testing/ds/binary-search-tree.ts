class Node<T>{
     element: T;
     left: Node<T>;
     right: Node<T>;
     constructor(element: T) {
          this.element = element;
          this.left = null;
          this.right = null;
     }
}

export abstract class BST<T> {
     head: Node<T>;

     constructor() {
          this.head = null;
     }

     add(element: T) {
          let node = new Node(element);
          if (this.head) {
               this.addNode(this.head, node);
          } else {
               this.head = node;
          }
     }

     addNode(parent: Node<T>, element: Node<T>) {

          if (this.isGreater(parent.element, element.element)) {
               if (parent.right) {
                    this.addNode(parent.right, element);
               } else {
                    parent.right = element;
               }
          } else {
               if (parent.left) {
                    this.addNode(parent.left, element);
               } else {
                    parent.left = element;
               }
          }
     }



     traverse() {
          if (this.head) {
               this.traverseTree(this.head);
          }
     }

     traverseTree(parent: Node<T>) {
          if (parent.left) {
               this.traverseTree(parent.left)
          }

          console.log(parent.element);
          
          if (parent.right) {
               this.traverseTree(parent.right);
          }

     }

     /* 
          @describe
          return true if ele2 value is greater than ele1
     */
     abstract isGreater(ele1: T, ele2: T): boolean;

}