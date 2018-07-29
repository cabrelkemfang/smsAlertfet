import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderServiceService } from '../loader-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  show :Boolean =true;
  
  constructor(private loaderService: LoaderServiceService) { }

  ngOnInit() {  
   //this.loaderService.show1();
   this.show = this.loaderService.show;
}


}
