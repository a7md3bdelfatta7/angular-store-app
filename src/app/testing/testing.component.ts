import { Component, OnInit } from '@angular/core';
import { Tree } from './tree';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var ll = new LinkedList();
    console.log(ll.isEmpty());

    let s1: Student = {
      name: "Ahmed Abdelfattah 1",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }

    let s2: Student = {
      name: "Ahmed Abdelfattah 2",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }

    let s3: Student = {
      name: "Ahmed Abdelfattah 3",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }



    // // adding element to the list
    // ll.add(s1);
    // ll.add(s2);
    // ll.add(s3);

    // ll.removeElement(s2)

    // ll.insertAt(1, s2);
    // // ll.removeElement(4);

    // ll.printList();

    var tree = new Tree();

    tree.add(s1);
    tree.add(s2);
    tree.add(s3);

    tree.add(s1);
    tree.add(s2);
    tree.add(s3);

    
    tree.add(s1);
    tree.add(s2);
    tree.add(s3);

    tree.traverse();

    
  }



}

class Queue {

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

enum Gender {
  male = 'male',
  female = 'female'
}

export interface Student {
  name: string,
  birhdate: string,
  gender: Gender
}

class Node {
  element: Student;
  next: Node;
  constructor(element: Student) {
    this.element = element;
    this.next = null
  }
}

class LinkedList {
  head: Node;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element: Student) {
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

  removeElement(element: Student) {
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





// function viewBinaryNumber(num) {
//     var item = ["1"];
//     for (var i = 0; i < Math.floor(num / 2); i++) {
//         item.push(item[i] + "0");
//         item.push(item[i] + "1");
//     }
//     return item.splice(0, num);
// }


// console.log(viewBinaryNumber(80));



