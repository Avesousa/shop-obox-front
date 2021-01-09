import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyFooterComponent } from './copy-footer.component';

describe('CopyFooterComponent', () => {
  let component: CopyFooterComponent;
  let fixture: ComponentFixture<CopyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
