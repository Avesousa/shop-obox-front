import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-main',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    
    public viewOption: boolean = true;
    constructor() { }

    ngOnInit(): void {
    }
}
