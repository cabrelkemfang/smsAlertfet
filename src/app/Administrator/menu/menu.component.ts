import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../../class/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  student: boolean;
  status1: String;
  user: boolean;
  fullName: String;
  loginUser;
  email:String;
  password:String;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
    this.password = localStorage.getItem('password');

    this._service.loginuser1(this.email, this.password).subscribe((data) => {
     console.log(data)
     localStorage.setItem('loginUser', JSON.stringify(data));
     this.fullName=data.firstName+" "+data.lastName;
     
    },
      (error) => {
        console.log(error)
      })
    
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("status");
    localStorage.clear();
    this._router.navigate(['/home']);
  }



}
