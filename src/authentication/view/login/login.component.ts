import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/authentication/model/user.interface';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['../../authentication.style.scss']
})
export class LoginComponent implements OnInit {

    public version: string = environment.version;

    public admin: UserI = {
        id: 1,
        name: '',
        mail: '',
        password: '',
        store: 74

    }

    constructor() { }

    ngOnInit(): void { }
}
