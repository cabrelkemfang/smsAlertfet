import { Component, OnInit } from '@angular/core';
import { Student } from '../../class/student';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-changenumber',
  templateUrl: './changenumber.component.html',
  styleUrls: ['./changenumber.component.css']
})
export class ChangenumberComponent implements OnInit {
  active: boolean;
  student: Student[] = [];
  phone: number;
  matricule: String = localStorage.getItem('matricule');
  code: String;
  newPhone:number;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.active = true;
    this._service.student(this.matricule).subscribe((data) => {
      this.phone = data.phoneNumber;
      //console.log(data);
      //console.log(this.phone);
    },
      (error) => {
        console.log(error)
      })
  }

  change(value) {
    //console.log(value)
    if (value.oldphoneNumber == this.phone) {
      this.newPhone=value.newphoneNumber;
    //  console.log(this.newPhone);
      this.active = false;
      this._service.code1(this.newPhone).subscribe((data) => {
        this.code = data;
     //  console.log(this.code );
      },
        (error) => {
          console.log(error)
        })
    } else {
      this.openSnackBar("The Old phone Number you enter is not maching \n Please try again");
    }
  }
  onSubmit(value){
   // console.log(value);
    //console.log(this.newPhone);
    if (value.code == this.code) {
    this._service.updatePhone(this.newPhone,this.matricule).subscribe((data) => {
      this.openSnackBar("You Phone Number have been updated");
      this.code = data;
     // console.log(this.code );
     
    },
      (error) => {
        console.log(error)
      })
    }else{
      this.openSnackBar("The Confimation code you enter is not valid \n Please try again");
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}
