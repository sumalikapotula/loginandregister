import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  form:any;

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }
    return '';
  }
  info: any = [];
  constructor(private formBuilder: FormBuilder,private snackbar:MatSnackBar,private router: Router,private userService: UserService,private httpClient: HttpClient ) { }
  registerMessage(){
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
      password: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
    this.httpClient.get("../../../assets/json/data.json").subscribe(data =>{
      console.log(data);
      this.info = data;
    })
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
  register(formValues: any) {
    let data = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      gender: formValues.gender,
      email: formValues.email,
      password: formValues.password,
      phonenumber: formValues.phonenumber,
      date: formValues.date,
    }
    if (this.form.valid) {
      console.log(data);
      this.userService.registration(data);
      console.log("data registered successfully");
      this.router.navigate(['register']);
    }
  }
}
