import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeaturedComponent } from './product-featured.component';

describe('ProductFeaturedComponent', () => {
  let component: ProductFeaturedComponent;
  let fixture: ComponentFixture<ProductFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
