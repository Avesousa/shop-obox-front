import { Component, Input, OnInit } from '@angular/core';
import { productState } from '../../model/productState.enum';
import { State } from './state.model';
import { StyleState } from './styleState.model';

@Component({
    selector: 'state',
    templateUrl: './state.component.html',
    styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
    @Input() public state: number = 0;
    @Input() public size: 'xl' | 'md' = 'md';
    @Input() public states: State[] = [];
    public styleState: any = StyleState;
    
    constructor() { }
    ngOnInit(): void { }
}
