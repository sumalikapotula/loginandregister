import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  designation: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'RVS RAMAKRISHNA', designation: 'Professor & HOD' },
  { position: 2, name: 'M SRI LAKSHMI', designation: 'Associate Professor' },
  { position: 3, name: 'R RAJASEKHAR', designation: 'Associate Professor' },
  { position: 4, name: 'M SANDEEP', designation: 'Associate Professor' },
  { position: 5, name: 'S DURGA SHANKAR', designation: 'Associate Professor' },
  { position: 6, name: 'V MANIDEEP', designation: 'Associate Professor' },
  { position: 7, name: 'M SENTHIL RAMKUMAR', designation: 'Associate Professor' },
  { position: 8, name: 'M ARVIND', designation: 'Associate Professor' },
  { position: 9, name: 'A RAVITEJA', designation: 'Associate Professor' },
  { position: 10, name: 'CH VINAY CHANDRA SHEKAR', designation: 'Associate Professor' }
];
@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.scss']
})
export class CivilComponent implements OnInit {
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
