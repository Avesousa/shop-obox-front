import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent{

  public alerts: any[] = [];
  public static SUCCESS: any = { classname: 'bg-success text-light', delay: 5000 };
  public static DANGER: any = { classname: 'bg-danger text-light', header: 'Alerta', delay: 9000 };

  isTemplate(alert) { return alert.textShow instanceof TemplateRef; }

  show(textShow: string | TemplateRef<any>, options: any = {}) {
    this.alerts.push({ textShow, ...options }); 
  }

  remove(alert) {
    this.alerts = this.alerts.filter(t => t !== alert);
  }

}
