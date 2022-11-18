import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CubosService {

  constructor(private http:HttpClient) { }

  getDatos(){
    return this.http.get('https://proyecto-a4b70-default-rtdb.firebaseio.com/.json')
  }
  getCubos(id:number){
    return this.http.get('https://proyecto-a4b70-default-rtdb.firebaseio.com/Cubos/'+id+'.json')
    }
}
