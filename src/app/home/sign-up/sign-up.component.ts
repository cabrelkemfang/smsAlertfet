import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  stu: Boolean;
  adm: Boolean;
  show: Boolean;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.stu = true;
  }
  student() {
    this.stu = false;
    this.adm = true;
  }
  admin() {
    this.stu = true;
    this.adm = false;
  }
  onSubmit(value) {
    //console.log(value)
    
    if (value.login == "administrator") {
      this.show = true;
      this._service.loginuser(value.email, value.password).subscribe((data) => {
       // console.log(data);
        this.show = false;
        if (!data.present) {
          this.openSnackBar("The User Name or the Password are not correct Please try again");
        } else {
          localStorage.setItem('email', value.email);
          this._router.navigate(['/menu']);
        }
      },
        (error) => {
          //this.openSnackBar(error._body);
          console.log(error)
        })
    } else {
      if (value.login == "student") {
        this.show = true;
        this._service.login(value.matriculeNumber, value.password).subscribe((data) => {
          //console.log(data);
          this.show = false;
          if (data == null) {
            this.openSnackBar("The User Name or the Password are not correct Please try again");
          } else {
            if (data != null) {
              localStorage.setItem('matricule', value.matriculeNumber);
              // let token = btoa(value.matriculeNumber + ":" + value.password);
              // localStorage.setItem('token', token);
              //let status = data.status
              // console.log(status)
              //localStorage.setItem('status1', status);

              this._router.navigate(['menuStudent']);
            }
          }
        },
          (error) => {
            //this.openSnackBar(error._body);
            console.log(error)
          })
      }
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }

  sign_up() {
    this._router.navigate(['register']);
  }

}
