import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cubo, Cubos } from 'src/app/interfaces/interfaces';
import { CubosService } from '../../services/cubos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  DetalleCubo:Cubo={}
  Cuboreciente:Cubos[]=[];
  constructor(private servicioCubos:CubosService,private modalCtrl:ModalController) { }
  regresar(){this.modalCtrl.dismiss();}
@Input()id:number
  ngOnInit() {
    this.servicioCubos.getCubos().subscribe((resp:Cubo) =>{
console.log('DetalleCubo',resp)
this.DetalleCubo=resp;
    })
  }

}
