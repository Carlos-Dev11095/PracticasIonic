import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cubo, RespuestaDB } from 'src/app/interfaces/interfaces';
import { CubosService } from '../../services/cubos.service';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  CubosRecientes:Cubo[]=[] ;
  opcionesSlide={
    slidesPerView:1.1,
    freeMode:true
    }

  constructor(private servicioCubos:CubosService,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.servicioCubos.getCubos()
    .subscribe((resp:RespuestaDB)=>{//1
    console.log('Cubos',resp)
    this.CubosRecientes=resp.Cubos;
  })
}}
