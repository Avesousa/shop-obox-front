import { Component, OnInit, ViewChild } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  @ViewChild('alertSubscription') alert : AlertComponent;
  public mail: string = '';
  public icons = {
    mail: faEnvelope
  };
  constructor(private service: SubscriptionService) { }

  ngOnInit(): void {
  }

  sendSubscription(){
    this.service.saveSubscription(this.mail).subscribe((data)=>{
      this.alert.show(data.message,AlertComponent.SUCCESS);
    },(error)=>{
      this.alert.show(error.error.message,AlertComponent.DANGER);
    })
  }

}
