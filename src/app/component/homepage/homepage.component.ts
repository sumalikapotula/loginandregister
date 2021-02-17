import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  disableSelect = new FormControl(false);
  hide = true;
  personalDetails = true;
  fresherDetails = true;
  professionalDetails = true;
  education = true;
  form: any;
  private map = new Map<string, string[]>([
    ['B.tech',['ECE','MECH','CSE','CIVIL','IT']],
    ['Degree',['B.Sc','B.A']],
  ]);
  graduation:any;
  specilization:any;
  get graduate(): string[] {
    return Array.from(this.map.keys());
  }
  get  specilize(): string[] | undefined {
    return this.map.get(this.graduation);
  }
  private map1 = new Map<string, string[]>([
    ['Intermediate',['M.P.C','Bi.P.C','M.E.C','H.E.C']],
    ['Vocational',['M.L.T']],
    ['ITI',['Fitter','Electrician']],
  ]);
  intermediate:any;
  course:any;
  get inter(): string[] {
    return Array.from(this.map1.keys());
  }
  get courses(): string[] | undefined {
    return this.map1.get(this.intermediate);
  }
  languages = new FormControl();
  languagesList: string[] = ['ASP.Net', 'Angular', 'Java', 'C#', 'HTML', 'CSS'];
  resetFalse() {
    this.personalDetails = false;
  }
  continue() {
    this.education = false;
  }
  details() {
    this.professionalDetails = false;
  }
  detail(){
    this.fresherDetails = false;
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }
    return '';
  }
  constructor(private formBuilder: FormBuilder, private snackbar: MatSnackBar) { }
  openSnackBar() {
    this.snackbar.open('Details submitted', 'succesfully', {
      duration: 1500
    });
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
      state: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      date: ['', [Validators.required]],
      age: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      motherName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      graduation: ['', [Validators.required]],
      specilization: ['', [Validators.required]],
      collegeName: ['', [Validators.required]],
      percentage: ['', [Validators.required]],
      schoolName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      location: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      technology: ['', [Validators.required]],
      designation:['',[Validators.required]],
      package:['', [Validators.required]],
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
  register(formValues: any) {
  }
}

