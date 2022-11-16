import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }
  // getDatos(){
  //   return this.http.get('https://reqres.in/api/users');
  //   }
  //   getPersonaje(id:number){
  //     return this.http.get('. https://reqres.in/api/users/'+id);
  //     }
  getDatos(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
  getPersonaje(id:number){
    return this.http.get('https://rickandmortyapi.com/api/character/'+id)
  }
  
}
