import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  login(loginData: any) {
    loginData = {
      email: "sumalika.potula@quixy.com",
      password: "suma@1234"
    }
    return loginData;
  }
  registration(data: any) {
    data = {
      firstName: String,
      lastName: String,
      gender: String,
      email: String,
      password: String,
      phoneNumber: String,
      date: String,
    }
    return data;
  }
}
