import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-menu-student',
  templateUrl: './menu-student.component.html',
  styleUrls: ['./menu-student.component.css']
})
export class MenuStudentComponent implements OnInit {
  status: String = localStorage.getItem('status');
  value: String;
  style;
  student: boolean;
  status1: String;
  user: boolean;
  matricule: String = localStorage.getItem('matricule');
  fullName:String;
  email:String;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this._service.student(this.matricule).subscribe((data) => {
      this.fullName=data.firstName+" "+data.lastName;
      this.email=data.email;
      //console.log(this.fullName);
    },
      (error) => {
        console.log(error)
      })
  

    this._service.status(this.matricule).subscribe((data) => {
     // console.log(data);
     // console.log(typeof(data))
      if (data) {
        this.value = "Activated";
        this.style = 'green'
      } else {
        this.value = "Not yet Activeted"
        this.style = 'red'
      }
    },
      (error) => {
        console.log(error)
      })

  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("matricule");
    localStorage.removeItem("status1");
    localStorage.removeItem("status");
    localStorage.clear();
    this._router.navigate(['/home']);
  }



}
