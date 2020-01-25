import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const rutas: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: '',redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'detalles/:id', component: DetalleComponent },
];

export const app_rutas = RouterModule.forRoot(rutas);