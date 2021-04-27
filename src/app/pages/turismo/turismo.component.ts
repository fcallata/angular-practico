import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  DatePipe } from "@angular/common";

import { TurismoService } from 'src/app/service/turismo.service';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css'],
  providers: [DatePipe]
})
export class TurismoComponent implements OnInit {

  formularioVenta: FormGroup;
  page: number;
  pageSize: number;
  collectionSize: number;
  ventas: Object[];  
  precioTotal: number;
  show: boolean;
  categorias: string[];

  precioTotalj:number;
  precioTotalm:number;
  precioTotala:number;
  cantidadTotalj:number;
  cantidadTotalm:number;
  cantidadTotala:number;

  totalVentas: number;
  total: number;

  constructor(private turismoService: TurismoService){

    this.formularioVenta = new FormGroup({
      dni: new FormControl(),
      precio: new FormControl(),
      categoria: new FormControl(),
      fecha: new FormControl(),

    })
    
    this.page = 1;
    this.pageSize = 10
    this.ventas = [];
    this.collectionSize = this.ventas.length;
    this.show = false;
    this.refreshCountries();
    this.categorias = ['m', 'j', 'a'];
    this.precioTotal = 0;
    this.precioTotalj = 0;
    this.precioTotalm = 0;
    this.precioTotala = 0;
    this.cantidadTotalj = 0;
    this.cantidadTotalm = 0;
    this.cantidadTotala = 0;

    this.totalVentas = 0;
    this.total = 0;
  }

  ngOnInit(): void {
    this.onChanges();
    this.ventas = this.turismoService.getAll();
  }

  refreshCountries() {
    this.ventas.map((venta, i) => ({id: i + 1, ...venta}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  onSubmit(){    
    this.turismoService.save({dni:this.formularioVenta.value.dni,
      precio: this.precioTotal,
      categoria: this.formularioVenta.value.categoria,
      fecha: this.formularioVenta.value.fecha});
      
      this.obtenerTotales(this.formularioVenta.value.categoria);

  }

  onChanges(): void{
    let precio = 0;
    let categoria = '';

    this.formularioVenta.get('precio').valueChanges.subscribe(val => {
      precio = val;
      this.percentOf(precio, categoria);
      this.show = (precio != null) && (categoria != '' ) ;
    })
    
    this.formularioVenta.get('categoria').valueChanges.subscribe(val => {
      categoria = val;
      this.percentOf(precio, categoria);      
      this.show = (precio != null) && (categoria != '' ) ;
    })
    
  }

  private percentOf(p: number, c: string){    
    switch (c) {
      case 'a':
        this.precioTotal = p * 1;
        break;
      case 'm':
        this.precioTotal = p - (25 * p / 100) ;
        break;
      case 'j':
        this.precioTotal = p - (50 * p / 100);
        break;        
    }
  }

  private obtenerTotales(c){

    switch (c) {
      case 'a':
        this.cantidadTotala = this.ventasPorCategoria(c);
        this.precioTotala = this.precioPorCategoria(c);
        break;
      case 'm':
        this.cantidadTotalm = this.ventasPorCategoria(c);
        this.precioTotalm = this.precioPorCategoria(c);
        break;
      case 'j':
        this.cantidadTotalj = this.ventasPorCategoria(c);
        this.precioTotalj = this.precioPorCategoria(c);
        break;        
    }
    this.totalVentas = this.turismoService.ventasTotal();
    this.total = this.turismoService.precioTotal();
  }

  private precioPorCategoria(cat){
    return this.turismoService.precioPorCategoria(cat);
  }

  private ventasPorCategoria(cat){
    return this.turismoService.ventasPorCategoria(cat);
  }

}
