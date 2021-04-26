import { Injectable } from '@angular/core';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class TurismoService {

  ventas: Venta[];

  constructor() { 
    this.ventas = [];
  }

  getAll(){
    return this.ventas;
  }

  save(venta){
    this.ventas.push(venta);
  }

  
  precioPorCategoria(cat): number{
    console.log('precioPorCategoria: ' + cat);
    return this.ventas.filter( el => el.categoria == cat).map(c => c.precio).reduce((a, b) => {return a + b });
  }

  ventasPorCategoria(cat){
    console.log('ventasPorCategoria: ' + cat);
    return this.ventas.filter( el => el.categoria == cat).length;
  }
}
