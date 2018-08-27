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
  show: Boolean;

  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  signup() {
    this._router.navigate(['home']);
  }

  onSubmit(value) {
    this.show = true;
    this._service.student1(value.matricule).subscribe((data) => {
      console.log(data)
      if (data.present==false) {
        this._service.signup(value).subscribe((data) => {
          this.openSnackBar("You account have been created successfully");
          this.show = false;
          this._router.navigate(['home']);
        },
          (error) => {
            console.log(error)
          })
      } else {
        this.show = false;
        this.openSnackBar("The matricule number : " + value.matricule + " Already exist");
      }
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
