import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  designation: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Dr. Surapaneni Sambhu Prasad', designation: 'Professor & Principal'},
  {position: 2, name: 'Dr. Boda surya venkata Ramarao', designation: 'Professor & HOD'},
  {position: 3, name: 'Dr. L.Chaitanya maddila', designation: 'Professor'},
  {position: 4, name: 'Dr. Satish Geeri', designation: 'Associate Professor'},
  {position: 5, name: 'Mr. Avinash Gudimetla	', designation: 'Associate Professor'},
  {position: 6, name: 'Mr. Ganna Nagarjuna varma', designation: 'Associate Professor'},
  {position: 7, name: 'Mrs. S.Swetha Radha', designation: 'Associate Professor'},
  {position: 8, name: 'Mr. Sunil Raj musinada', designation: 'Associate Professor'},
  {position: 9, name: 'Mr. Srimanthula Srikanth', designation: 'Associate Professor'},
  {position: 10, name: 'Mrs. Pasikanti Gayathri', designation: 'Associate Professor'},
  {position: 11, name: 'Mrs. Deep Rani katta', designation: 'Associate Professor'},
  {position: 12, name: 'Mrs. K. Sri Lakshmi', designation: 'Associate Professor'},
  {position: 13, name: 'Ms. R Vijaya lakshmi', designation: 'Associate Professor'},
];
@Component({
  selector: 'app-mechanical',
  templateUrl: './mechanical.component.html',
  styleUrls: ['./mechanical.component.scss']
})
export class MechanicalComponent implements OnInit {
displayedColumns: string[] = ['position', 'name', 'designation'];
dataSource = ELEMENT_DATA;
about = false;
mission = false;
teacher = false;
  constructor() { }

  ngOnInit(): void {
  }
  continue(){
    this.about = true;
  }
  vision(){
    this.mission = true;
    this.about = false;
  }
  staff(){
    this.teacher = true;
    this.mission = false;
    this.about = false;
  }
}
