import { Component, OnInit } from '@angular/core';
import { LinkedList } from './ds/linked-list';
import { Gender, Student } from './student.model';
import { Tree } from './ds/tree';
import { BST } from './ds/binary-search-tree';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var ll = new LinkedList<Student>();
    console.log(ll.isEmpty());

    let s1: Student = {
      id: 1,
      name: "Ahmed Abdelfattah 1",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }

    let s2: Student = {
      id: 2,
      name: "Ahmed Abdelfattah 2",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }

    let s3: Student = {
      id: 3,
      name: "Ahmed Abdelfattah 3",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }

    let s4: Student = {
      id: 4,
      name: "Ahmed Abdelfattah 4",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }


    let s5: Student = {
      id: 5,
      name: "Ahmed Abdelfattah 5",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }

    let s6: Student = {
      id: 6,
      name: "Ahmed Abdelfattah 6",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }

    let s7: Student = {
      id: 7,
      name: "Ahmed Abdelfattah 7",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }

    let s8: Student = {
      id: 8,
      name: "Ahmed Abdelfattah 8",
      gender: Gender.male,
      birhdate: "20/9/1993"
    }

    let s9: Student = {
      id: 9,
      name: "Ahmed Abdelfattah 9",
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

    var tree = new StudentBST();
    /* 
    Let us create following BST

              5
          /       \
         3         8
       /   \     /   \
      2     4   7    9
     /         /
    1         6
    
    */

    tree.add(s5);
    tree.add(s3);
    tree.add(s4);
    tree.add(s2);
    tree.add(s1);
    tree.add(s8);
    tree.add(s7);
    tree.add(s6);
    tree.add(s9);






    tree.traverse();


  }



}


class StudentBST extends BST<Student>{

  isGreater(ele1: Student, ele2: Student): boolean {
    return ele2.id > ele1.id;
  }

}