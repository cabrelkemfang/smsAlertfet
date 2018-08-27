import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {
  show: boolean;
  groupList;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }


  ngOnInit() {
    this.show = true;
    this._service.getGroupList().subscribe(event => {
      this.groupList = event;
      this.show = false;
    });
  }
  onSubmit(value){
    console.log(value)
  }
}
