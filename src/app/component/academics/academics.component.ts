import { Component, OnInit } from '@angular/core';
import PG from "../../../assets/json/academic.json";
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
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent implements OnInit {
  displayedColumns: string[] = ['programme', 'ApprovedIntake', 'ApprovedFee'];
  dataSource = ELEMENT_DATA;
  dataSource1:PeriodicElement[] = PG;
  constructor() { }
  ngOnInit(): void {
  }
}
