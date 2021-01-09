import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  public canvas: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public toggleOffcanvasNavigation() {
    const state = !this.canvas.getValue();
    this.canvas.next(state);
  }

  public openOffcanvasNavigation() {
    this.canvas.next(true);
  }

  public closeOffcanvasNavigation() {
    this.canvas.next(false);
  }
}
