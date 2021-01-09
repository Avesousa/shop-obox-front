import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCartComponent } from './toolbar-cart.component';

describe('ToolbarCartComponent', () => {
  let component: ToolbarCartComponent;
  let fixture: ComponentFixture<ToolbarCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
