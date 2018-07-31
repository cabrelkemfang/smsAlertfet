import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  active: boolean;
  code: String;
  matricule: String = localStorage.getItem('matricule');
  status: boolean;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.active = true;
    this._service.status(this.matricule).subscribe((data) => {
      //console.log(data);
      this.status = data;
      localStorage.setItem('status', data);
    },
      (error) => {
        console.log(error)
      })
  }

  activate() {
    this.active = false;
    this._service.code(this.matricule).subscribe((data) => {
    //  console.log(data);
      this.code = data;
    },
      (error) => {
        console.log(error)
      })
  }

  onSubmit(value) {
    //console.log(value);
    if (value.code == this.code) {
      this._service.activate(this.matricule).subscribe((data) => {
       // console.log(data);
      },
        (error) => {
          console.log(error)
        })

      this.openSnackBar("You have activate the Sms Alert successfully");
      this.active = true;
      this._service.status(this.matricule).subscribe((data) => {
        //console.log(data);
        this.status = data;
        localStorage.setItem('status', data);
      },
        (error) => {
          console.log(error)
        })

    }
    else {
      this.openSnackBar("The Confimation code you enter is not valid \n Please try again");
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}
