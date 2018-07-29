import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router, private _service: ServiceService,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  signup() {
    this._router.navigate(['home']);
  }

  onSubmit(value) {
    console.log(value);
    this._service.signup(value).subscribe((data) => {
      console.log(data);
      this.openSnackBar("You account have been created successfully");
      this._router.navigate(['home']);
    },
      (error) => {
        
        //this.openSnackBar(error._body);
        console.log(error) })
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}
