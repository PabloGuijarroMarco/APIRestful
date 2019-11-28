import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedasautorService {

  constructor(private http: Http) { }
  newBusquedaAutor(): Observable<any> {
    let headers;
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://apirestful.test/busquedasautor/create', headers);
  }

  getBusquedasAutor(): Observable<any> {
    let headers;
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://apirestful.test/busquedasautor', headers);
  }
}
