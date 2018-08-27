import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'email', 'phone', 'edit', 'delete'];
  ELEMENT_DATA: any[] = [];
  groupList;
  show: Boolean;
  value:Boolean;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }


  ngOnInit() {
    this.show = true;
    this._service.getGroupList().subscribe(event => {
      this.groupList = event;
      this.show = false;
    });
    this.value=true;
  }

  list(value) {
    this.show = true;
    this._service.getgroup(value).subscribe(event => {
      this.ELEMENT_DATA = event;
      this.show = false;
    });
  }

  delete(value,value2) {
    this.show = true;
    this._service.deleteParticipant(value).subscribe(event => {
      this.list(value2);
      this.show = false;
    });
  }

  deleGroup(value) {
    this.show = true;
    this._service.deletegroup(value).subscribe(event => {
      this.show = true;
      setTimeout(() => {
        this._service.getGroupList().subscribe(event => {
          this.groupList = event;
          this.show = false;
        });
      },
        3000);
    });
  }

  openDialog() {
    this.value=false;
  }

  edit(value1) {
    localStorage.setItem('participant', JSON.stringify(value1));
    this._router.navigate(['/menu/group_edition']);
  }

  onSubmit(value1,value2){
    this.show = true;
    this._service.editgroup(value2,value1.name).subscribe(event => {
      this.show = true;
      setTimeout(() => {
        this._service.getGroupList().subscribe(event => {
          this.groupList = event;
          this.value=true;
          this.show = false;
        });
      },
        3000);
    });
  }
}
