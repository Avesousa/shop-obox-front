import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Brand } from './shared/brand.model';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'brand-footer',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  public responsiveOptions;
  public brands: Brand[];

  constructor(private primeConfig: PrimeNGConfig, public brandService: BrandService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5,
          numScroll: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '560px',
          numVisible: 2,
          numScroll: 2
      }
  ];
   }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
    this.brandService.getBrands().subscribe((data: any) =>{
      this.brands = data.data;
    })
  }

}
