import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { User } from '../../class/User';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  show :Boolean;
  user:User[]=[];
  constructor(private _router: Router, private _service: ServiceService,public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('data'));
  }

  onSubmit(value ) {
    //console.log(value);
    this.show = true;
    this._service.UpdateUser(value).subscribe((data) => {
      //console.log(data);
      this.show = false;
      this.openSnackBar("The have been created successfully");
     // value.resetForm();
     // 
    },
      (error) => {
        
        this.openSnackBar(error._body);
        console.log(error) })
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}

