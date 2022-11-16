import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personajes,Personaje } from '../../interfaces/interfaces';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  DetallePersonaje:Personaje={}
  Personajereciente:Personajes[]=[];
  constructor(private servicioPersonajes: PersonajesService,private modalCtrl:ModalController) { }
  regresar(){this.modalCtrl.dismiss();}
  @Input()id:number
  ngOnInit() {
    this.servicioPersonajes.getPersonaje(this.id).subscribe(console.log)
    this.servicioPersonajes.getPersonaje(this.id).subscribe((resp:Personaje)=>{
      console.log('Personaje',resp)
      this.DetallePersonaje=resp;
      
    })
  }

}