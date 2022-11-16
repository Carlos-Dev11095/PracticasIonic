import { Component, Input, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  Detallereciente:Cubo={}
  Cuboreciente:Cubos[]=[];
  constructor(private servicioCubos: CubosService) { }

  @Input()id:number
  ngOnInit() {
    this.servicioCubos.getCubos(this.id).subscribe((resp:Cubos)=>{
      console.log('Cubos',resp)
      this.Detallereciente=resp.results;
    })
  }
  constructor() { }

  ngOnInit() {}

}
