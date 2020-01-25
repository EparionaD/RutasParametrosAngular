import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

    datos:any[]=[];

    constructor(private _datosUsuarios:DatosService, private _ruta:Router) {
        this.datos = _datosUsuarios.getDatos();
    }

    ngOnInit() {
    }

    verUsuario(i:number){
        this._ruta.navigate(['detalles',i]);
    }

}
