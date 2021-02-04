import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  hide = true;
  hides = true;
  reset = true;
  form:any;
  resetfalse() {
    this.reset = false;
  }
  continue(){
    this.hides = false;
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }
    return '';
  }
  constructor(private formBuilder: FormBuilder,private snackbar:MatSnackBar) { }
  openSnackBar(){
    this.snackbar.open('Registered','succesfully',{
        duration:1500
    });
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
      state: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      date: ['', [Validators.required]],
      fathername: ['', [Validators.required]],
      mothername: ['', [Validators.required]],
      address: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      Graduation: ['', [Validators.required]],
      Specilization: ['', [Validators.required]],
      CollegeName : ['', [Validators.required]],
      Percentage: ['', [Validators.required]],
      SchoolName: ['' , [Validators.required]],
      CompanyName: ['',[Validators.required]],
      Location: ['', [Validators.required]]
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
  register(formValues: any) {
  }
}

