import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() email: any;
  @Input() password: any;
  hide = true;
  form: any;
  constructor(private formBuilder: FormBuilder,private router: Router, private snackbar: MatSnackBar,private userService: UserService) { }
  loginMessage() {
    this.snackbar.open('logged In', 'successfully', {
      duration: 1500
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
