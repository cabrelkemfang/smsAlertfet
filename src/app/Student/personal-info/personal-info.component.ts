import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { Student } from '../../class/Student';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  student: Student[] = [];
  level:String;
  phone:number;
  activate:number;
  password:String;
  matricule:String;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
   let  matricule: String = localStorage.getItem('matricule');
    this._service.student(matricule).subscribe((data) => {
      this.student=data;
      this.phone=data.phoneNumber;
      this.level=data.level;
      this.activate=data.activate;
      this.password=data.password;
      this.matricule=data.matricule;

     // console.log(this.student);
    },
      (error) => {
        console.log(error)
      })
  }

  onSubmit(value) {
   // console.log(value);
   value.phoneNumber=this.phone;
   value.level=this.level;
   value.activate=this.activate;
   value.password=this.password;
   value.matricule=this.matricule;
 //  console.log("student"+this.level+this.phone);
  // console.log(value);
    this._service.updateStudent(value).subscribe((data) => {
      console.log(data);
      this.openSnackBar("You account have been Updated");
    },
      (error) => {

        this.openSnackBar(error._body);
        console.log(error)
      })
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}
