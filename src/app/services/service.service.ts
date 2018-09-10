import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, ResponseContentType, Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  token = localStorage.getItem('token');
   url:String="http://localhost:8087/";
   //"https://localhost:443/sms_notification_platform-0.0.1-SNAPSHOT/";
//"http://localhost:8087/";
  constructor(private _http: Http) { }

  signup(student) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.url+'student', JSON.stringify(student), options)
      .pipe(map(res => res.status) // or any other operator
      );
  }
//save user
  saveUser(user) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.url+'user', JSON.stringify(user), options)
      .pipe(map(res => res.status) // or any other operator
      );
  }

  //save user
  UpdateUser(user) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.put(this.url+'user', JSON.stringify(user), options)
      .pipe(map(res => res.status) // or any other operator
      );
  }

  user(email) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this.url+'secure/user/'+email, options)
      .pipe(map(res => res) // or any other operator
      );
  }


  updateStudent(student) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.put(this.url+'secure/student', JSON.stringify(student), options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  login(matricule, password) {
    // let token = btoa(matricule + ":" + password)
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/login/' + matricule + '/' + password, options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  loginuser(email, password) {
    // let token = btoa(matricule + ":" + password
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //  headers.append('Authorization', 'Basic ' + token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/login/user/' + email + '/' + password, options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  loginuser1(email, password) {
    // let token = btoa(matricule + ":" + password
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //  headers.append('Authorization', 'Basic ' + token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/login/user1/' + email + '/' + password, options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  result() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/result', options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  update() {
    let headers = new Headers();
    headers.append("Accept", 'applica editgroup(tion/json');
    headers.append('Content-Type', 'a editgroup(pplication/json');
    // headers.append('Authorization' editgroup(, 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url+'/result', options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  updatePhone(phone, matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url+'secure/student/' + phone + '/' + matricule, options)
      .pipe(map(res => res.text()) // or any other operator
      );
  }

  registerStudent() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/activated/student', options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  sensResult(result) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url+'secure/send/result', JSON.stringify(result), options)
      .pipe(map(res => res.status)
      );
  }

  postgroup(result,name) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
   // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url+'group/'+name, result, options)
      .pipe(map(res => res.status)
      );
  }


  postgroup1(result,name) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
   // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url+'group1/'+name, result, options)
      .pipe(map(res => res.status)
      );
  }
  

  findgroup(name) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
   // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'group/'+name, options)
      .pipe(map(res => res.json())
      );
  }

  sendEmail(subject,content,level,file:File ) {
    let headers = new Headers();
    //headers.append("Accept", 'application/json');
    //headers.append('Content-Type', 'application/json');
   // headers.append('Authorization', 'Basic ' + this.token);
    
    let options = new RequestOptions({ headers: headers });
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this._http.post(this.url+'send/email/'+subject+'/'+content+'/'+level, formData, options)
      .pipe(map(res => res.status)
      );
  }

  sendSimpleEmail(subject,content,level) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    
    return this._http.post(this.url+'send/simple/email/'+subject+'/'+content+'/'+level, options)
      .pipe(map(res => res.status)
      );
  }

  sendAnnonce(message, title, level) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url+'secure/send/annoncement/' + message + '/' + title + '/' + level, options)
      .pipe(map(res => res.status)
      );
  }

  desactive(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/desactivate/' + matricule, options)
      .pipe(map(res => res.status)
      );
  }

  student(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'student/' + matricule, options)
      .pipe(map(res => res.json())
      );
  }

  student1(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'student1/' + matricule, options)
      .pipe(map(res => res.json())
      );
  }

  manageUser(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/user/' + matricule, options)
      .pipe(map(res => res.json())
      );
  }

  code(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/verification/' + matricule, options)
      .pipe(map(res => res.text())
      );
  }

  code1(phone) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/verification/update/' + phone, options)
      .pipe(map(res => res.text())
      );
  }

  activate(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/activate/' + matricule, options)
      .pipe(map(res => res.text())
      );
  }


  status(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'secure/status/' + matricule, options)
      .pipe(map(res => res.json())
      );
  }

  userTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.ms-excel'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
  
    return this._http.get(this.url+'groupSheet', options)
      .pipe(map((response: Response) => new Blob([response], { type: 'application/vnd.ms-excel' }))
  
      );
  
  }

  postUpload(file: File): Observable<void> {
    let headers = new Headers({
      'Accept': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    const formdata = new FormData();
    formdata.append('file', file, file.name);
    return this._http.post(this.url+'upload', formdata, options)
      .pipe(map((res: Response) => res.json()));
    //.catch(this.errorHandler);
  }

  resultUpload(file: File): Observable<any> {
    let headers = new Headers({
      'Accept': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    const formdata = new FormData();
    formdata.append('file', file, file.name);
    return this._http.post(this.url+'uploadResult', formdata, options)
      .pipe(map((res: Response) => res.json()));
    //.catch(this.errorHandler);
  }

  getGroupList() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'groupList', options)
      .pipe(map(res => res.json())
      );
  }

  getgroup(name) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'group/'+name, options)
      .pipe(map(res => res.json())
      );
  }

  deleteParticipant(name) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
   // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.delete(this.url+'participant/'+name, options)
      .pipe(map(res => res.status)
      );
  }

  deletegroup(name) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
   // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.delete(this.url+'group/'+name, options)
      .pipe(map(res => res.json())
      );
  }

  editgroup(value2,value1) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url+'group/update/'+value2+'/'+value1, options)
      .pipe(map(res => res.status)
      );
  }

  editParticipant(value) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.put(this.url+'participant', JSON.stringify(value), options)
      .pipe(map(res => res.status) // or any other operator
      );
  }

  getConfig1() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url+'config', options)
      .pipe(map(res => res.json())
      );
  }

  updateConfig(value) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.put(this.url+'config', JSON.stringify(value), options)
      .pipe(map(res => res.status) // or any other operator
      );
  }

}
