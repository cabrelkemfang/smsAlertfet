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
  show: Boolean;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(value: NgForm) {
    this.show = true;
    this._service.saveUser(value).subscribe((data) => {
      this.show = false;
      this.openSnackBar("The have been created successfully");
      this._router.navigate(['/menu/']);
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
