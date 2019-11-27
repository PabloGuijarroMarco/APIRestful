import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  constructor(private http: Http) { }
  newInteraction(): Observable<any> {
    let headers;
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://apirestful.test/interactions/create', headers);
  }
}
