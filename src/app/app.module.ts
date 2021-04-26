import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {} from '@ng-';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { JuegoComponent } from './pages/juego/juego.component';
import { TurismoComponent } from './pages/turismo/turismo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    JuegoComponent,
    TurismoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
