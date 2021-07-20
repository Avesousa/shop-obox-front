import { Component, Input, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Zone } from 'src/app/model/zone.model';
import { UserService } from 'src/app/services/user.service';
import { ZoneService } from 'src/app/services/zone.service';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent implements OnInit {

  public zones: Zone[];
  public zone: Zone;
  @ViewChild('alertSubscription') alert: AlertComponent;
  @Input() public user: User;
  @Input() public isUpdate: boolean;
  @Output() public eventZone = new EventEmitter<Zone>();
  @Output() public eventUser = new EventEmitter<User>();

  constructor(public zoneService: ZoneService, private userService: UserService){ }

  ngOnInit() {

    this.getZones();
    if(!this.isUpdate){
      this.user = new User();
    }

  }

  getZones(){
    this.zoneService.getZone().subscribe( (response: any) => {
      this.zones = response.data;
      this.zone = <Zone>this.user.zone || null;
      this.changeZone();
    });
  }

  register(){
    this.user.zone = this.zone;
    this.userService.register(this.user).subscribe( result => {
      this.alert.show("Usuario e inicio de sesión correcto", AlertComponent.SUCCESS);
      this.userService.setToken(result.data.key);
      this.changeAction();
    }, (error: any) => {
      this.getError(error.error.message);
    });
  }

  update(){
    this.user.zone = this.zone;
    this.userService.update(this.user).subscribe( result => {
      console.log(result);
      this.alert.show("Se ha actualizado correctamente el usuario", AlertComponent.SUCCESS);
      this.userService.setToken(result.data.key);
      this.changeAction();
    }, (error: any) => {
      this.getError(error.error.message);
    })
  }

  getError(message) {
    this.alert.show(message, AlertComponent.DANGER);
    this.user.password = null;
  }

  changeAction(){
    this.changeUser();
    this.changeZone();
  }

  changeUser(){
    this.eventUser.emit(this.user);
  }

  changeZone(){
    this.eventZone.emit(this.zone);
  }

  compare(zoneA:Zone, zoneB:Zone){
    if(zoneA == null || zoneB == null){
      return false;
    }else{
      return true;
    }
  }

}
