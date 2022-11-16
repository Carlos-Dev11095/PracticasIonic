import { Component, OnInit } from '@angular/core';
import { Cubo, Cubos } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  DetalleCubo:Cubo={}
  Cuboreciente:Cubos[]=[]
  constructor() { }

  ngOnInit() {}

}
