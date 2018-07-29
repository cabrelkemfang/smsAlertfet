import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {

  show:Boolean
  constructor() { }

  show1() {
    this.show= true;
  }
  hide() {
    this.show= false;
  }
}
