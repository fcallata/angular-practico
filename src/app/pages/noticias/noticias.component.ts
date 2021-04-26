import { Component, OnInit, ViewChild } from '@angular/core';
//import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

export interface Noticia {
  titulo: string;
  noticia: string,
  image: string

}

const noticias: Noticia[] = [
  { titulo: 'Dictaron la conciliación obligatoria y se levantó el paro de colectivos', 
    noticia:'El servicio de colectivos en todo el país será normal el próximo lunes: el Ministerio de Trabajo declarará este mediodía la conciliación obligatoria en el conflicto de la Unión Tranviarios Automotor (UTA) y por eso se levantará el paro de 24 horas que se había dispuesto en reclamo de mejoras salariales y de que incluyan cuanto antes a los choferes en el plan nacional de vacunación.',
    image: 'assets/images/colectivos.jpg'},
  { titulo: 'Confirmaron 74 nuevos casos y 3 muertes por coronavirus en Jujuy ',
    noticia:'La Subdirección de Epidemiología informa en su Reporte diario que hoy se confirmaron 74 nuevos casos de COVID-19 en Jujuy y recibieron el alta médica 127 pacientes.', image: 'assets/images/coronavirus.jpg'},
  { titulo: 'Buscan intensamente en San Pedro a una joven de 16 años que está desaparecida desde el viernes',
    noticia:'Mujer se ausentó de su hogar y no hay datos sobre su paradero. La Policía desplegó rastrillajes en la ciudad y en zonas rurales.',
    image: 'assets/images/policia.jpg'}
]


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NoticiasComponent implements OnInit {

  misNoticias: Noticia [];
  
  ngOnInit(){}

  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/1200/500`);
  
  constructor(config: NgbCarouselConfig) {
    this.misNoticias = noticias;
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

}
