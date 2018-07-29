import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { LoaderServiceService } from '../../loader/loader-service.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  level: String[] = ["200", "300", "400", "500", "600"]
  mail: Boolean;
  show:Boolean;
  selectedFiles: File = null;
  fileSize: number;
  constructor(private _router: Router,
     private _service: ServiceService, 
     public snackBar: MatSnackBar,
     private loaderService: LoaderServiceService) { }
  @ViewChild('form') mytemplateForm: NgForm;
  ngOnInit() {
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
    console.log(value);
    if (value.sendAs == "sms") {
      this.show=true;
      this._service.sendAnnonce(value.subject, value.content ,value.level).subscribe((data) => {
        
        this.openSnackBar("The SmS have been  send successfully..");
        this.show=false;
        this.mytemplateForm.reset();
        console.log(data);
      },
        (error) => {
          console.log(error._body);
          console.log(error)
        })
    } else {
      if(value.sendAs=="email"){
       // if (this.fileSize == 0)
       this.show=true;
       
        this._service.sendEmail( value.subject,value.content,value.level,this.selectedFiles).subscribe((data) => {
         // this.show=true;
          this.openSnackBar("The Email have been send successfully..");
          this.show=false;
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

  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }

}
