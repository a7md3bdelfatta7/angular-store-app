enum Gender {
    male = 'male',
    female = 'female'
}


interface Student {
    name: string,
    birhdate: string,
    gender: Gender
}

class Node {
    element: Student;
    left: Node;
    right: Node;
    constructor(element: Student) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    head: Node;

    constructor() {
        this.head = null;
    }

    add(element: Student) {
        let node = new Node(element);
        if (this.head) {
            this.addNode(this.head, node);
        } else {
            this.head = node;
            console.log("insert head " + element.name);
        }

        // if (this.numberOfLeftSideNodes(this.head) > this.numberOfRightSideNodes(this.head)) {
        //     this.addNode(this.head.right, element);
        // } else {
        //     this.addNode(this.head.left, element);
        // }
    }

    addNode(parent: Node, element: Node) {
        if (this.numberOfChilds(parent.left) > this.numberOfChilds(parent.right)) {
            if (parent.right) {
                this.addNode(parent.right, element);
            } else {
                parent.right = element;
                console.log("insert right " + element.element.name);
            }
        } else {
            if (parent.left) {
                this.addNode(parent.left, element);
            } else {
                parent.left = element;
                console.log("insert left " + element.element.name);
            }
        }
    }

    numberOfChilds(parent: Node): number {
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

    traverseTree(parent: Node) {
        console.log(parent.element);
        if (parent.left) {
            this.traverseTree(parent.left)
        }

        if (parent.right) {
            this.traverseTree(parent.right);
        }
    }
}