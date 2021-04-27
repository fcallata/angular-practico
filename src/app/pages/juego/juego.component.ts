import { Component, OnInit } from '@angular/core';

export class Juego{
  id: number;
  palabra: string;
  vocales: number;
  consonantes: number;
  tamanio:number;
}

export class Pregunta{
  id: number;
  parrafo: string;
}

const datos: Juego[] = [
  { id: 1, palabra:'hola', vocales: 2, consonantes: 2, tamanio: 4},
  { id: 2, palabra:'mundo', vocales: 2, consonantes: 3, tamanio: 5},
  { id: 3, palabra:'argentina', vocales: 4, consonantes: 5, tamanio: 9},
  { id: 4, palabra:'jujuy', vocales: 2, consonantes: 3, tamanio: 5},
  { id: 5, palabra:'gato', vocales: 2, consonantes: 2, tamanio: 4},
  { id: 6, palabra:'perro', vocales: 2, consonantes: 3, tamanio: 5},
  { id: 7, palabra:'sol', vocales: 1, consonantes: 2, tamanio: 3},
  { id: 8, palabra:'futbol', vocales: 2, consonantes: 4, tamanio: 6},
  { id: 9, palabra:'pelota', vocales: 3, consonantes: 3, tamanio: 6},
  { id: 10, palabra:'plaza', vocales: 2, consonantes: 3, tamanio: 5}
]

const preguntas: Pregunta[] = [
  { id: 1, parrafo: 'VOCALES'},
  { id: 2, parrafo: 'CONSONANTES'},
  { id: 3, parrafo: 'LETRAS'}
]

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  parraf: Pregunta;
  word: Juego;
  datos: Juego[];
  preguntas: Pregunta[];
  respuestas: number[];
  show: boolean;
  correct: boolean;

  constructor() {
    this.parraf = new Pregunta;
    this.word = new Juego();
    this.datos = datos;
    this.preguntas = preguntas;
    this.respuestas = [];
    this.show = false;
  }

  ngOnInit(): void {
    this.generarJuego();    
  }

  private generarJuego(){
    this.parraf = this.preguntas[Math.floor(Math.random() * this.preguntas.length)];
    this.word = this.datos[Math.floor(Math.random() * this.datos.length)];
    this.generarRespuestas();
  }

  private generarRespuestas(){
    this.show = false;
    let valor;

    switch (this.parraf.id) {
      case 1:
        valor = this.word.vocales
        break;
      case 2:
        valor = this.word.consonantes
        break;
      case 3:
        valor = this.word.tamanio
        break;
    }

    this.respuestas.push(valor);
    for (let index = 0; index < 3; index++) {
      this.respuestas.push(Math.floor(Math.random() * 5))
    }
    this.respuestas.sort(function(a,b) {return (Math.random()-0.5)})
  }

  onClick(item){    
    this.show = true;
    let valor;
    switch (this.parraf.id) {
      case 1:
        valor = this.word.vocales
        break;
      case 2:
        valor = this.word.consonantes
        break;
      case 3:
        valor = this.word.tamanio
        break;
    }

    this.correct = (item == valor);

    if(this.correct){
      this.respuestas = [];
      setTimeout(() => {
        this.generarJuego();
      }, 1500);
    }
  }

}
