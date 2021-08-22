import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OrdenService } from 'src/app/services/orden.service';
import { Orden } from '../../model/orden.interface';
import { OrdenModel } from '../../model/orden.model';
import { ordenState } from '../../model/ordenState.enum';
import { productState } from '../../model/productState.enum';
import { User } from '../../model/user.interface';
import { UserModel } from '../../model/user.model';
import { ModalComponent } from '../modal/modal.component';
import { State } from '../state/state.model';
import { StyleState } from '../state/styleState.model';

@Component({
  selector: 'orden-single',
  templateUrl: './ordenSingle.component.html',
  styleUrls: ['../../orden.style.scss'],
})
export class OrdenSingleComponent implements OnInit {
  constructor(private ordenService: OrdenService) {}
  public viewInfo: boolean = false;
  public ordenState: any = ordenState;
  @ViewChild('modalOrden') modalOrden: ModalComponent;
  ngOnInit(): void {}

  @Input()
  public orden: Orden = this.getDefault();

  @Input()
  public user: User = this.getDefaultUser();

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

  toViewInfo() {
    this.modalOrden.toShow();
  }

  getDefault(): Orden {
    return new OrdenModel();
  }

  getDefaultUser(): User {
    return new UserModel();
  }

  reject() {
    if (confirm('¿Deseas rechazar el pedido?')) {
      this.ordenService.updateState(this.orden.id, ordenState.reject).subscribe(
        () => {
          this.orden.state = ordenState.reject;
        },
        (error) => {
          console.error('Ha ocurrido un error :: [REJECT/ORDEN-SINGLE]', error);
        }
      );
    }
  }

  approve() {
    let countProduct = 0;
    this.orden.products.map(
      (product) =>
        (countProduct += product.state != productState.unaggregated ? 1 : 0)
    );
    let state =
      countProduct == this.orden.products.length
        ? ordenState.process
        : ordenState.newState;
    this.ordenService.updateState(this.orden.id, state).subscribe(
      () => {
        this.orden.state = state;
      },
      (error) => {
        console.error('Ha ocurrido un error :: [APPROVE/ORDEN-SINGLE]', error);
      }
    );
  }

  send() {
    this.ordenService.updateState(this.orden.id, ordenState.send).subscribe(
      () => {
        this.orden.state = ordenState.send;
      },
      (error) => {
        console.error('Ha ocurrido un error :: [SEND/ORDEN-SINGLE]', error);
      }
    );
  }
}
