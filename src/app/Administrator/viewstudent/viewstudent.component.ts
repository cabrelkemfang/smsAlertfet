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
      //console.log(data);
      this.ELEMENT_DATA = data;
      this.show=false;
    },
      (error) => {
        this.openSnackBar(error._body);
       // console.log(error)
      })
  }

  disable(element){
    
    this._service.desactive(element.matriculeNumber).subscribe((data) => {
      //console.log(data);
      this._service.registerStudent().subscribe((data) => {
      // console.log(data);
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
  displayedColumns = ['id', 'first_name','last_name','matricule', 'email', 'phone'];
}
