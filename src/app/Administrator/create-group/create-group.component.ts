import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { saveAs } from 'file-saver/FileSaver';
import { Group } from '../../class/group';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  show: Boolean;
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'email', 'phone'];
  ELEMENT_DATA;
  groupName1: String;
  selectedFiles: File = null;
  fileSize: number;
  value;
  group1: Group = new Group();

  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  selectFile(event) {
    this.selectedFiles = <File>event.target.files[0];
  }

  onSubmit(value: NgForm) {
    this.show = true;
    this._service.saveUser(value).subscribe((data) => {
      this.show = false;
      this.openSnackBar("The have been created successfully");
    },
      (error) => {
        console.log(error)
      })
  }

  template() {
    /* var reader = new FileReader();
     this._service.userTemplate().subscribe(blob => {
       saveAs(blob,"Template"+".xls");
       console.log(blob)
     }, (error) => {
       console.log(error);
     })*/
    window.location.href = "http://localhost:8087/groupSheet";
  }

  upload() {
    if (this.fileSize == 0) {
      return;
    } else {
      this._service.postUpload(this.selectedFiles).subscribe(event => {
        this.ELEMENT_DATA = event;
      });
    }
  }

  delete(value) {
    this.ELEMENT_DATA.splice(this.ELEMENT_DATA.indexOf(value), 1);
    console.log(this.ELEMENT_DATA);
  }
  save() {
    this.show = true;
    this._service.findgroup(this.groupName1).subscribe((data) => {
      console.log(data);
      this.show = false;
      if (data) {
        if (this.groupName1 == undefined && this.ELEMENT_DATA == undefined) {

        } else {
          this.show = true;
          this._service.postgroup(this.ELEMENT_DATA, this.groupName1).subscribe(event => {
            this.show = false;
            this._router.navigate(['/menu/available_group']);
          });

        }
      } else {
        this.openSnackBar("The Group :"+ this.groupName1+" Already exist");
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
