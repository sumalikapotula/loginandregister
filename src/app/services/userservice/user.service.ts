import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  login(data: any) {
    data = {
      email: "sumalika.potula@quixy.com",
      password: "suma@1234"
    }
    return data;
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
