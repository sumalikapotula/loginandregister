import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }
  login(data:any) {
     data = {
      email: "sumalika.potula@quixy.com",
      password: "suma@1234"
    }
    return data;
  }
  registration(data: any) {
    data = {
      firstname:String,
      lastname: String,
      gender: String,
      email: String,
      password: String,
      phonenumber: String,
      date: String,
    }
    return data;
  }

}