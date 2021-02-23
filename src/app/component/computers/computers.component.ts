import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  designation: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Dr.Jayababu Yasarapu', designation: 'Professor' },
  { position: 2, name: 'Dr.Radhika Mani Madireddy', designation: 'Professor & HOD' },
  { position: 3, name: 'Dr.Y. Venkata Ram Kumar', designation: 'Professor' },
  { position: 4, name: 'Dr.S Rao Chintalapudi', designation: 'Associate Professor' },
  { position: 5, name: 'Mr. Rajesh M V	', designation: 'Associate Professor' },
  { position: 6, name: 'Mr.Raja Kumar Medapati', designation: 'Associate Professor' },
  { position: 7, name: 'Mrs.Sreepada Sarada', designation: 'Associate Professor' },
  { position: 8, name: 'Mrs.Kumari Gorle', designation: 'Associate Professor' },
  { position: 9, name: 'Mr.CH SATISH', designation: 'Associate Professor' },
  { position: 10, name: 'Mr.CH.LAKSHMINARAYANA', designation: 'Associate Professor' },
  { position: 11, name: 'Ms.Allampilli Harini', designation: 'Associate Professor' },
  { position: 12, name: 'Mrs.K DEEPTHI', designation: 'Associate Professor' },
  { position: 13, name: 'Mrs.Darapu Uma', designation: 'Associate Professor' },
];
@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'designation'];
  dataSource = ELEMENT_DATA;
  about = false;
  mission = false;
  teacher = false;
  constructor() { }

  ngOnInit(): void {
  }
  continue() {
    this.about = true;
  }
  vision() {
    this.mission = true;
    this.about = false;
  }
  staff() {
    this.teacher = true;
    this.mission = false;
    this.about = false;
  }

}
