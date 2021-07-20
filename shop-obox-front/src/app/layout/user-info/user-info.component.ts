import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import { faBackspace, faBackward, faCheck, faTools, faUserAlt, faUserLock, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/model/user.model';
import { Zone } from 'src/app/model/zone.model';
import { UserService } from 'src/app/services/user.service';
import { AllUserComponent } from './all-user/all-user.component';
import { LoginUserComponent } from './login-user/login-user.component';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @ViewChild(LoginUserComponent) loginUser: LoginUserComponent;
  @ViewChild(AllUserComponent) allUser: AllUserComponent;
  @Output() eventZone = new EventEmitter<Zone>();
  @Output() eventUser = new EventEmitter<User>();
  @Input() zone: Zone;


  public user: User;
  public isLogueado: boolean = false;
  public isLogin: boolean = false;
  public isRegister: boolean = false;
  public isOpcion: boolean = true;
  public toUpdate: boolean = false;

  icons = {
    update: faTools,
    login: faUserAlt,
    register: faUserPlus,
    back: faBackward,
    logout: faUserLock,
    ok: faCheck
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.verify().subscribe( (result:any) => {
      this.isLogueado = result.data.response;
      if(this.isLogueado){
        this.user = result.data;
        this.zone = this.user.zone;
        this.isOpcion = false;
        this.isLogin = false;
        this.isRegister = false;
        this.toUpdate = false;
        this.emitZone(this.zone);
      }else{
        this.user = new User();
        this.user.id = null;
        this.zone = null;
        this.isLogin = false;
        this.isRegister = false;
        this.isOpcion = true;
        this.toUpdate = false;
        this.emitZone(null);
      }
      this.eventUser.emit(this.user);
    });
  }

  goToRegister(){
    this.isRegister = true;
    this.isOpcion = false;
  }

  goToLogin(){
    this.isLogin = true;
    this.isOpcion = false;
  }

  emitZone(zone: Zone){
    this.zone = zone;
    this.eventZone.emit(this.zone);
  }
  
  emitUser(event: any){
    this.getUser();
  }

  goToUpdate(){
    this.isLogueado = false;
    this.toUpdate = true;
  }

  getAction(){
    if(this.isLogin){
      this.loginUser.login();
    }else if(this.isRegister){
      this.allUser.register();
    }else if(this.toUpdate){
      this.allUser.update();
    }
  }

  logOut(){
    this.userService.logOut();
    this.getUser();
  }

}
