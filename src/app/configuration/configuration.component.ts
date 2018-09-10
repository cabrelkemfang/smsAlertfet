import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { MatSnackBar } from '@angular/material';
import { Config } from '../class/config';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  show: boolean;
  configList: Config[] = [];
  disa: Boolean;
  disa1: Boolean;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }


  ngOnInit() {

    this.show = true;
    this._service.getConfig1().subscribe((data) => {
      this.configList = data;
      console.log(this.configList)
      this.show = false;
    },
      (error) => {
        console.log(error)
      })


    this.disa = true;
    this.disa1 = true;

  }

  Update() {
    this.disa = false;
    this.disa1 = false;
  }

  onSubmit(value) {
    value.id = 1;
    console.log(value);

    this._service.updateConfig(value).subscribe((data) => {
      console.log(data);
      this.openSnackBar("The configuration have been Updated");
      this.disa = true;
      this.disa1 = true;
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
}

