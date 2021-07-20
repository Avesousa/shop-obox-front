import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit {
    
    icons = {
        bar: faBars
    };
    
    constructor(private router: Router) { }

    ngOnInit(): void { }

    goToDashboard(): void {
        this.router.navigate(['/dashboard']);
    }
}
