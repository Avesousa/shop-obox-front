import { Component, Input, OnInit } from '@angular/core';
import { Orden } from '../../model/orden.interface';
import { OrdenModel } from '../../model/orden.model';
import { ordenState } from '../../model/ordenState.enum';
import { State } from '../state/state.model';
import { StyleState } from '../state/styleState.model';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss', '../../orden.style.scss'],
})
export class ModalComponent implements OnInit {
  @Input()
  public orden: Orden = this.getDefault();

  @Input()
  public title: string = '';

  public show: boolean = false;

  public states: State[] = [
    {
      label: 'Nuevo',
      state: ordenState.newState,
      style: StyleState.NEW,
    },
    {
      label: 'Finalizado',
      state: ordenState.finish,
      style: StyleState.OTHER,
    },
    {
      label: 'Enviado',
      state: ordenState.send,
      style: StyleState.FINISH,
    },
    {
      label: 'Proceso',
      state: ordenState.process,
      style: StyleState.PROCESS,
    },
    {
      label: 'Rechazado',
      state: ordenState.reject,
      style: StyleState.REJECT,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getDefault(): Orden {
    return new OrdenModel();
  }

  toShow() {
    this.show = true;
  }

  toHide() {
    this.show = false;
  }
}
