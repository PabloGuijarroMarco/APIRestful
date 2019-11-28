import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikidataService {

  constructor(private http: Http) { }
  newWikidata(): Observable<any> {
    let headers;
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://apirestful.test/wikidata/create', headers);
  }

  getWikidatas(): Observable<any> {
    let headers;
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://apirestful.test/wikidata', headers);
  }
}
