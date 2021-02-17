import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { UserService } from '../../services/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  @Input() email: any;
  @Input() password: any;
  hide = true;
  form: any;
  constructor(private formBuilder: FormBuilder,private router: Router, private snackbar: MatSnackBar,private userService: UserService) { }
  loginMessage() {
    this.snackbar.open('logged In', 'successfully', {
      duration: 2500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
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
    let data = {
      email: formValues.email,
      password: formValues.password
    }
    if (this.form.valid) {
      console.log(data);
      this.userService.login(data);
      this.router.navigate(['homepage'])
    }
  }
}
