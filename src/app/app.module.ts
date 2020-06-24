import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { NinoComponent } from './Components/nino/nino.component';
import { MujerComponent } from './Components/mujer/mujer.component';
import { HeaderComponent } from './Components/header/header.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { HombreComponent } from './Components/hombre/hombre.component';
import { CarritoDeCompraComponent } from './Components/carrito-de-compra/carrito-de-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    NinoComponent,
    MujerComponent,
    HeaderComponent,
    UsuarioComponent,
    HombreComponent,
    CarritoDeCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
