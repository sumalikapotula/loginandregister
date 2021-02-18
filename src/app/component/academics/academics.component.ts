import { Component, OnInit } from '@angular/core';
import pg from "../../../assets/json/academic.json";
export interface periodicElement {
  programme: any;
  approvedIntake: any;
  approvedFee: any;
}
const elementData: periodicElement[] = [
  {programme:'B.Tech (Civil Engineering)', approvedIntake: '120',approvedFee: 'Rs. 72,800/- per anum'},
  {programme:'B.Tech (Electrical & Electronics Engineering)', approvedIntake: '120',approvedFee: 'Rs. 72,800/- per anum'},
  {programme:'B.Tech (Mechanical Engineering)', approvedIntake: '240',approvedFee: 'Rs. 72,800/- per anum'},
  {programme:'B.Tech (Electronics & Communication Engineering)', approvedIntake: '240',approvedFee: 'Rs. 72,800/- per anum'},
  {programme:'B.Tech (Computer Science & Engineering)', approvedIntake: '120',approvedFee: 'Rs. 72,800/- per anum'},
  {programme:'B.Tech (Information Technology)', approvedIntake: '60',approvedFee: 'Rs. 72,800/- per anum'},
];
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent implements OnInit {
  displayedColumns: string[] = ['programme', 'approvedIntake', 'approvedFee'];
  dataSource = elementData;
  dataSource1:periodicElement[] = pg;
  constructor() { }
  ngOnInit(): void {
  }
}
