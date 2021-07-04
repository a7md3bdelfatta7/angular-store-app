/* This is implementation for balanced tree */

class Node<T> {
    element: T;
    left: Node<T>;
    right: Node<T>;
    constructor(element: T) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}

export class Tree<T> {
    head: Node<T>;

    constructor() {
        this.head = null;
    }

    add(element: T) {
        let node = new Node<T>(element);
        if (this.head) {
            this.addNode(this.head, node);
        } else {
            this.head = node;
        }
    }

    addNode(parent: Node<T>, element: Node<T>) {
        if (this.numberOfChilds(parent.left) > this.numberOfChilds(parent.right)) {
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

    numberOfChilds(parent: Node<T>): number {
        if (parent && (parent.left || parent.right)) {
            return 1 + this.numberOfChilds(parent.left) + this.numberOfChilds(parent.right);
        } else if (parent) {
            return 1;
        } else {
            return 0;
        }
    }


    traverse() {
        if (this.head) {
            this.traverseTree(this.head);
        }
    }

    traverseTree(parent: Node<T>) {
        console.log(parent.element);
        if (parent.left) {
            this.traverseTree(parent.left)
        }

        if (parent.right) {
            this.traverseTree(parent.right);
        }
    }
}