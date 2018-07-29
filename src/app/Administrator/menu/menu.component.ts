import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  status: String = localStorage.getItem('status');
  value: String;
  style;
  student: boolean;
  status1: String;
  user: boolean;
  email: String = localStorage.getItem('email');
  fullName:String;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    
    this._service.user(this.email).subscribe((data) => {
      this.fullName=data.firstName+" "+data.lastName;
      console.log(data);
    },
      (error) => {
        console.log(error._body);
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
