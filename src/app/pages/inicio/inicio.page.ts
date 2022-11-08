import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personajes } from '../../interfaces/interfaces';
import { RespuestaBD } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../componentes/detalle/detalle.component';
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
personajesRecientes: Personajes[]=[];
opcionesSlide={
  //se mostrara 1 slide y una parte del otro
  slidesPerView:1.1,
  //Permite una navegación libre (mas rápida)
  freeMode:true
  }
constructor(private servicioPersonajes: PersonajesService,private modalCtrl:ModalController) { }
async verDetalle(id: number){
  /*Dado que es una petición (promesa) es un proceso
  asincrono espera la respuesta del componente modal
  al recibirla se vincula con la vista de detalle */
  const modal= await this.modalCtrl.create({
  component:DetalleComponent,
  componentProps:{id}
  });
  //Se visualisa el componente de detalle
  modal.present();
  }

  ngOnInit() {
    this.servicioPersonajes.getDatos()
    .subscribe((resp: RespuestaBD)=>{
    console.log('Personajes', resp)
    this.personajesRecientes=resp.data;
    })
  }

}
