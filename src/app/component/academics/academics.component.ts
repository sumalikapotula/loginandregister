import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  programme: any;
  ApprovedIntake: any;
  ApprovedFee: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {programme:'B.Tech (Civil Engineering)', ApprovedIntake: '120',ApprovedFee: 'Rs. 72,800/- per anum'},
  {programme:'B.Tech (Electrical & Electronics Engineering)', ApprovedIntake: '120',ApprovedFee: 'Rs. 72,800/- per anum'},
  {programme:'B.Tech (Mechanical Engineering)', ApprovedIntake: '240',ApprovedFee: 'Rs. 72,800/- per anum'},
  {programme:'B.Tech (Electronics & Communication Engineering)', ApprovedIntake: '240',ApprovedFee: 'Rs. 72,800/- per anum'},
  {programme:'B.Tech (Computer Science & Engineering)', ApprovedIntake: '120',ApprovedFee: 'Rs. 72,800/- per anum'},
  {programme:'B.Tech (Information Technology)', ApprovedIntake: '60',ApprovedFee: 'Rs. 72,800/- per anum'},
];
const ELEMENT_DATA_1: PeriodicElement[] = [
  {programme:'M.Tech (Power Electronics & Electric Drives)', ApprovedIntake: '18',ApprovedFee: 'Rs. 60,000/- per anum'},
  {programme:'M.Tech (CAD/CAM)', ApprovedIntake: '18',ApprovedFee: 'Rs. 60,000/- per anum'},
  {programme:'M.Tech (VLSI System Design)', ApprovedIntake: '18',ApprovedFee: 'Rs. 60,000/- per anum'},
  {programme:'M.Tech (Embedded Systems)', ApprovedIntake: '18',ApprovedFee: 'Rs. 60,000/- per anum'},
  {programme:'M.Tech (Computer Science & Engineering)', ApprovedIntake: '18',ApprovedFee: 'Rs. 60,000/- per anum'},
  {programme:'M.Tech (Computer Science)', ApprovedIntake: '18',ApprovedFee: 'Rs. 60,000/- per anum'},
];
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent implements OnInit {
  displayedColumns: string[] = ['programme', 'ApprovedIntake', 'ApprovedFee'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA_1;
  constructor() { }
  ngOnInit(): void {
  }
}
