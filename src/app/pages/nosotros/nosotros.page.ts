import { Component, OnInit } from '@angular/core';
import { Cubo, RespuestaDB } from 'src/app/interfaces/interfaces';
import { CubosService } from '../../services/cubos.service';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  CubosRecientes: Cubo[] = [] 
  constructor(private servicioCubos:CubosService) { }

  ngOnInit() {
    this.servicioCubos.getCubos()
    .subscribe((resp:RespuestaDB)=>{//1
    console.log('Cubos',resp)
    this.CubosRecientes=resp.Cubos;
  })

}}
