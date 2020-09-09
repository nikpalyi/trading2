import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TradeService {

  constructor(private http:HttpClient) { }

  getTrades() {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/trades',
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  getTrade(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/trades/' + id,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  createTradeRegistration(trade) {
    let body = JSON.stringify(trade);
    return this.http.post('/server/trades', body, httpOptions);
  }

}
