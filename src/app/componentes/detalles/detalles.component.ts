import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {  } from 'src/app/interfaces/interfaces';
import { CubosService } from '../../services/cubos.service';
import { Cubo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  @Input()id:number=0;
  DetalleCubo:Cubo={}

  constructor(private servicioCubos:CubosService,private modalCtrl:ModalController) { }
  regresar(){this.modalCtrl.dismiss();}

  ngOnInit() {
    this.servicioCubos.getCubos(this.id)
    .subscribe((resp:Cubo)=>{
      console.log('CuboDetalle',resp);
      this.DetalleCubo=(resp);
    })
  }

}
