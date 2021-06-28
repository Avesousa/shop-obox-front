import { Component, Input, OnInit, Output, ViewChild, EventEmitter, OnChanges } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  @ViewChild('alertSubscription') alert: AlertComponent;
  @Output() public eventUser = new EventEmitter<User>();
  @Input() public user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user).subscribe((result: any) => {
      if (result.data.login) {
        this.alert.show("Inicio sesión correctamente", AlertComponent.SUCCESS);
        this.userService.setToken(result.data.key);
        this.changeUser();
      } else {
        this.getError(result.message)
      }
    }, (error: any) => {
      this.getError(error.error.message);
    })
  }

  getError(message) {
    this.alert.show(message, AlertComponent.DANGER);
    this.user.password = null;
  }

  changeUser() {
    this.eventUser.emit(this.user);
  }

}
