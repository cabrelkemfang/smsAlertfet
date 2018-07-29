import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, ResponseContentType, Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  token = localStorage.getItem('token');

  constructor(private _http: Http) { }

  signup(student) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:8087/student', JSON.stringify(student), options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }
//save user
  saveUser(user) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:8087/user', JSON.stringify(user), options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  user(email) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.get('http://localhost:8087/secure/user/'+email, options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }


  updateStudent(student) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });

    return this._http.put('http://localhost:8087/secure/student', JSON.stringify(student), options)
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
    return this._http.get('http://localhost:8087/secure/login/' + matricule + '/' + password, options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  loginuser(email, password) {
    // let token = btoa(matricule + ":" + password)
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //  headers.append('Authorization', 'Basic ' + token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/login/user/' + email + '/' + password, options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  result() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/result', options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  update() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.put('http://localhost:8087/result', options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  updatePhone(phone, matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.put('http://localhost:8087/secure/student/' + phone + '/' + matricule, options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  registerStudent() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/activated/student', options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  sensResult(result) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:8087/secure/send/result', JSON.stringify(result), options)
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

    return this._http.post('http://localhost:8087/send/email/'+subject+'/'+content+'/'+level, formData, options)
      .pipe(map(res => res.status)
      );
  }

  sendAnnonce(message, title, level) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:8087/secure/send/annoncement/' + message + '/' + title + '/' + level, options)
      .pipe(map(res => res.status)
      );
  }

  desactive(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/desactivate/' + matricule, options)
      .pipe(map(res => res.json())
      );
  }

  student(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/student/' + matricule, options)
      .pipe(map(res => res.json())
      );
  }

  manageUser(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/user/' + matricule, options)
      .pipe(map(res => res.json())
      );
  }

  code(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/verification/' + matricule, options)
      .pipe(map(res => res.text())
      );
  }

  code1(phone) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/verification/update/' + phone, options)
      .pipe(map(res => res.json())
      );
  }

  activate(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/activate/' + matricule, options)
      .pipe(map(res => res.text())
      );
  }


  status(matricule) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:8087/secure/status/' + matricule, options)
      .pipe(map(res => res.json())
      );
  }


}
