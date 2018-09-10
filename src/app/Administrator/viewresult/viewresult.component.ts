import { Component, OnInit, ViewChild } from '@angular/core';
//import { Result } from '../class/Result';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar, MatPaginator, MatTableDataSource } from '@angular/material';
import { Result } from '../../class/result';

@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.css']
})
export class ViewresultComponent implements OnInit {
  displayedColumns: string[] = ['id', 'student_name', 'matricule_number', 'status', 'course_code', 'credit_value', 'c_a', 'exam', 'total', 'grades'];
  ELEMENT_DATA: Result[] = [];
  show:Boolean;
  selectedFiles: File = null;
  fileSize: number;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Result>(this.ELEMENT_DATA);
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator; 
    this._service.result().subscribe((data) => {
      this.ELEMENT_DATA = data;
      console.log(data)
      console.log(this.ELEMENT_DATA)
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

 send(){
  this.show=true;
  this._service.sensResult(this.ELEMENT_DATA).subscribe((data) => {
    this.openSnackBar("The Result have been send ");
    this.show=false;
  },
    (error) => {
      console.log(error)
    })
 }

 selectFile(event) {
  this.selectedFiles = <File>event.target.files[0];
}
 template() {
  /* var reader = new FileReader();
   this._service.userTemplate().subscribe(blob => {
     saveAs(blob,"Template"+".xls");
     console.log(blob)
   }, (error) => {
     console.log(error);
   })*/
  window.location.href = "http://localhost:8087/resultSheet";
}

upload() {
  if (this.fileSize == 0) {
    return;
  } else {
    this._service.resultUpload(this.selectedFiles).subscribe(event => {
      this.ELEMENT_DATA = event;
      console.log(this.ELEMENT_DATA);
      console.log(event);
    });
  }
}

unclick(value1,value2){

}


}
