import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Zone } from 'src/app/model/zone.model';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent implements OnInit {

  public zones: Zone[];
  public zone: Zone = null;
  @Input() public user: User;
  @Input() public isUpdate: boolean;
  @Output() public eventZone = new EventEmitter<Zone>();

  constructor(public zoneService: ZoneService) { }

  ngOnInit() {

    this.getZones();
    if(!this.isUpdate){
      this.user = new User();
    }

  }

  getZones(){
    this.zoneService.getZone().subscribe( (response: any) => {
      this.zones = response.data;
    });
  }

  changeZone(){
    this.eventZone.emit(this.zone);
  }

}
