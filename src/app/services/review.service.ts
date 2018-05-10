import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { review } from '../review';

@Injectable()
export class ReviewService {
  httpOptions;

  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type':'application/json'
      })
    }
  }

  getReview():Observable<Object>{
      return this.http.get("http://139.59.9.236:8898/rest-api/reviews");
  }

  saveReview(obj):Observable<object>{
    return this.http.post("http://139.59.9.236:8898/rest-api/reviews", obj, this.httpOptions);
  }

}
