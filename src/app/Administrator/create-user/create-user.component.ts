import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private _router: Router, private _service: ServiceService,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(value :NgForm) {
    console.log(value);
    this._service.saveUser(value).subscribe((data) => {
      console.log(data);
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
