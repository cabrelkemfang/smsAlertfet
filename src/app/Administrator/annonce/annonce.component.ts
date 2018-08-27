import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  mail: Boolean;
  show: Boolean;
  selectedFiles: File = null;
  fileSize: number;
  value1: boolean = false;
  groupList;
  constructor(private _router: Router,
    private _service: ServiceService,
    public snackBar: MatSnackBar) { }
  @ViewChild('form') mytemplateForm: NgForm;
  ngOnInit() {

    this._service.getGroupList().subscribe(event => {
      this.groupList = event;

    });
    this.mail = true;
  }

  email() {
    this.mail = false;
  }

  sms() {
    this.mail = true;
  }

  selectFile(event) {
    this.selectedFiles = <File>event.target.files[0];
    this.fileSize = event.target.files.length;
  }

  onSubmit(value) {

    if (value.sendAs == "sms") {
      this.show = true;
      this._service.sendAnnonce(value.content, value.subject, value.level).subscribe((data) => {
        console.log(data);
        this.openSnackBar("The SmS have been  send successfully..");
        this.show = false;
        this.mytemplateForm.reset();
      },
        (error) => {
          console.log(error)
        })
    } else if (value.sendAs == "email") {
      console.log(value)
      console.log(value.file)
      if (this.mail != true) {
        this.show = true;
        this._service.sendEmail(value.subject, value.content, value.level, this.selectedFiles).subscribe((data) => {
          this.openSnackBar("The Email have been send successfully..");
          this.show = false;
          this.mytemplateForm.reset();
          console.log(data);
        }, (error) => {
          console.log(error)
        })
      } else {
        this.show = true;
        this._service.sendSimpleEmail(value.subject, value.content, value.level).subscribe((data) => {
          this.openSnackBar("The Email have been send successfully..");
          this.show = false;
          this.mytemplateForm.reset();
          console.log(data);

        },
          (error) => {
            console.log(error._body);
            console.log(error)
          })
      }

    }
  }
  unclick(){
    this.mail = true;
  }

  allo() {
    this.value1 = !this.value1;
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
 
}
