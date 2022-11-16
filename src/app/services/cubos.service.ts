import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CubosService {

  constructor(private http:HttpClient) { }
  getCubos(){
    return this.http.get('https://proyecto-36245-default-rtdb.firebaseio.com/.json');
    }
}
