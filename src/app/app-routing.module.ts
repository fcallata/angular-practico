import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoComponent } from './pages/juego/juego.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { TurismoComponent } from './pages/turismo/turismo.component';


const routes: Routes = [
  { path: '' , component: NoticiasComponent },
  { path: 'juego', component: JuegoComponent},
  { path: 'turismo', component: TurismoComponent},
  { path: '**', component: NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
