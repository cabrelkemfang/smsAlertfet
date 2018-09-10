import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../../class/user';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  user: User[] = [];
  show: boolean;
  groupName: String;
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('participant'));
    console.log(this.user);
  }


  onSubmit(value) {
    console.log(this.user)
    this.show = true;
    this._service.editParticipant(this.user).subscribe(event => {
      this.show = false;
      console.log(event);
      this._router.navigate(['menu/available_group']);
    });
  }
}
