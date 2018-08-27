import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
  ELEMENT_DATA;
  show: Boolean;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.show=true;
    this._service.registerStudent().subscribe((data) => {
      this.ELEMENT_DATA = data;
      this.show=false;
    },
      (error) => {
        console.log(error._body);
      })
  }

  disable(element){
    
    this._service.desactive(element.matriculeNumber).subscribe((data) => {
      this._service.registerStudent().subscribe((data) => {
        this.ELEMENT_DATA = data;
      },
        (error) => {
          console.log(error)
        })
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
  displayedColumns = ['id', 'first_name','last_name','matricule', 'email', 'phone'];
}
