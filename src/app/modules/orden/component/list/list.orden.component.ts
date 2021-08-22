import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SearchComponent } from 'src/app/modules/commons/search/search.component';
import { OrdenService } from 'src/app/services/orden.service';
import { Orden } from '../../model/orden.interface';

@Component({
    selector: 'orden-list',
    templateUrl: './list.orden.component.html',
    styleUrls: ['../../orden.style.scss']
})
export class OrdenListComponent implements OnInit {
    
    public find: string[] = ["doc","description","id"];
    public list: Orden[] = [];
    public listForView: Orden[] = [];

    @ViewChild("searchOrden") searchOrden: SearchComponent;


    constructor(private ordenService: OrdenService) { }

    ngOnInit(): void {
        this.ordenService.getOrdens().subscribe((ordens: any) => {
            this.list = ordens.data;
            this.searchOrden.setList(this.list);
            this.searchOrden.hide();
        });
    }

    toGetAll(_event:any){
        this.ngOnInit();
    }

    toPutListOrden(event: any[]){
        this.listForView = event;
    }
}
