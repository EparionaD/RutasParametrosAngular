import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importando Rutas
import { app_rutas } from './app.routes';

//Importando servicios
import { DatosService } from './services/datos.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DetalleComponent } from './components/detalle/detalle.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UsuariosComponent,
        DetalleComponent
    ],
    imports: [
        BrowserModule,
        app_rutas
    ],
    providers: [
        DatosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
