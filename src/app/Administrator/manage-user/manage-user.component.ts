import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  ELEMENT_DATA;
  matricule: String = localStorage.getItem('matricule');
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    let matricule: String = localStorage.getItem('matricule');
    this._service.manageUser(matricule).subscribe((data) => {
      console.log(data);
      this.ELEMENT_DATA = data;
    },
      (error) => {
        //this.openSnackBar(error._body);
        console.log(error)
      })
  }

  disable(element){
    this._service.desactive(element.matriculeNumber).subscribe((data) => {
      console.log(data);
      this._service.registerStudent().subscribe((data) => {
        console.log(data);
        this.ELEMENT_DATA = data;
      },
        (error) => {
          this.openSnackBar(error._body);
          console.log(error)
        })
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
  displayedColumns = ['id', 'full_name','matricule', 'email', 'phone','activated','disable'];

}

