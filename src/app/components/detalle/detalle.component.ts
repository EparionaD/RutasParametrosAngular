import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';


@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

    detalle:any={};

    constructor(private _detallesRuta:ActivatedRoute, private _datos:DatosService) {
        this._detallesRuta.params.subscribe(
            params=>{
                //console.log(params.id);
                this.detalle = _datos.getDetalle(params.id);
            }
        );
    }

    ngOnInit() {
    }

}
