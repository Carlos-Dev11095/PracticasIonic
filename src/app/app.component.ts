import { Component, OnInit } from '@angular/core';

interface Elemento{
  icono: string;
  nombre:string;
  ruta:string;
  }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  elementos: Elemento[]=[
    { //Primer elemento de la lista
    icono: 'newspaper-outline',
    nombre:'Noticias',
    ruta:'/noticias'
    },
    { //segundo elemento de la lista
      icono: 'people-outline',
      nombre:'Nosotros',
      ruta:'/nosotros'
      },
      { //tercer elemento de la lista
        icono: 'logo-web-component',
        nombre:'Componentes',
        ruta:'/componentes'
      },
    ];
  constructor() {}
}
