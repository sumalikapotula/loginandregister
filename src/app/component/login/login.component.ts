import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  form: any;
  constructor(private formBuilder: FormBuilder,private snackbar:MatSnackBar) { }
  openSnackBar(){
    this.snackbar.open('logged In','succesfully',{
      duration:1500
    });
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
  login(formValues: any) {
    // let data = {
    //   email: formValues.email,
    //   password: formValues.password
    // }
  }
}
