import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personajes } from '../../interfaces/interfaces';
import { RespuestaBD } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../componentes/detalle/detalle.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
personajesRecientes: Personajes[]=[];
opcionesSlide={
  slidesPerView:1.1,
  freeMode:true
  }
constructor(private servicioPersonajes: PersonajesService,private modalCtrl:ModalController) { }
async verDetalle(id: number){
 
  const modal= await this.modalCtrl.create({
  component:DetalleComponent,
  componentProps:{id}
  });
  modal.present();
  }

  ngOnInit() {
    this.servicioPersonajes.getDatos()
    .subscribe((resp: RespuestaBD)=>{
    console.log('Personajes', resp)
    this.personajesRecientes=resp.results;
    })
  }

}
