import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  designation: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Dr.RAGHURAM GUDE', designation: 'Professor' },
  { position: 2, name: 'Dr.B V N S M NAGESH DEEVI', designation: 'Professor & HOD' },
  { position: 3, name: 'Dr.SAILAJA VEMURI', designation: 'Professor' },
  { position: 4, name: 'Dr. AKULA SRINIVAS', designation: 'Associate Professor' },
  { position: 5, name: 'Dr. U SATHEESHWARAN	', designation: 'Associate Professor' },
  { position: 6, name: 'Mr.V PRASANTH', designation: 'Associate Professor' },
  { position: 7, name: 'Mrs.P SUNITHA', designation: 'Associate Professor' },
  { position: 8, name: 'Mr.G S SIVA KUMAR', designation: 'Associate Professor' },
  { position: 9, name: 'Mr.CH SATISH', designation: 'Associate Professor' },
  { position: 10, name: 'Mr.CH.LAKSHMINARAYANA', designation: 'Associate Professor' },
  { position: 11, name: 'Ms.B PRAKRUTHI', designation: 'Associate Professor' },
  { position: 12, name: 'Mrs.K DEEPTHI', designation: 'Associate Professor' },
  { position: 13, name: 'Mrs.P ANURADHA', designation: 'Associate Professor' },
];
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {
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
