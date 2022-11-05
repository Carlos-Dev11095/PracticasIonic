import { Component, OnInit } from '@angular/core';

// interface Elemento{
//   icono: string;
//   nombre:string;
//   ruta:string;
//   }

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

// elementos: Elemento[]=[
// { //Primer elemento de la lista
// icono: 'newspaper-outline',
// nombre:'Noticias',
// ruta:'/noticias'
// },
// { //segundo elemento de la lista
//   icono: 'people-outline',
//   nombre:'Nosotros',
//   ruta:'/nosotros'
//   },
//   { //tercer elemento de la lista
//     icono: 'person-outline',
//     nombre:'Componentes',
//     ruta:'/componentes'
//   },
// ];

  constructor() { }

  ngOnInit() {
  }

}
