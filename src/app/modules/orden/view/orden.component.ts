import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/services/orden.service';
import { Orden } from '../model/orden.interface';

@Component({
    selector: 'orden',
    templateUrl: './orden.component.html',
})
export class OrdenComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}
}
