import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { User } from '../../class/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  show: Boolean;
  user: User[] = [];
  password:String;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loginUser'));
  
  }

  onSubmit(value) {
    this.show = true;
    console.log(value)
    value.password=JSON.parse(localStorage.getItem('loginUser')).password;
    this._service.UpdateUser(value).subscribe((data) => {
      this.show = false;
      console.log(data)
      this.openSnackBar("The have been Update successfully");
    },
      (error) => {
        console.log(error)
      })
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}

