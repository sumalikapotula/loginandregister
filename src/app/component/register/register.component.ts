import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  hide = true;
  form: any;

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }
    return '';
  }
  info: any = [];
  constructor(private formBuilder: FormBuilder, private display: MatSnackBar, private router: Router, private userService: UserService, private httpClient: HttpClient) { }
  registerMessage() {
    if (this.form.valid) {
      this.display.open('Registered', 'succesfully', {
        duration: 2500,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
    else {
      this.display.open('hello!','please enter details' ,{
        duration: 2500,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
    this.httpClient.get("../../../assets/json/data.json").subscribe(data => {
      console.log(data);
      this.info = data;
    })
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
  register(formValues: any) {
    let data = {
      firstName: formValues.firstname,
      lastName: formValues.lastname,
      gender: formValues.gender,
      email: formValues.email,
      password: formValues.password,
      phoneNumber: formValues.phonenumber,
      date: formValues.date,
    }
    if (this.form.valid) {
      this.userService.registration(data);
      this.router.navigate(['/homepage']);
    }
  }
}
