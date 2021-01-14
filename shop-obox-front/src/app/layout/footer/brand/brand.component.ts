import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'brand-footer',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  public responsiveOptions;
  public brands;

  constructor(private primeConfig: PrimeNGConfig) {
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
    this.brands = [
      {
        name:'brahma',
        image:'brahma.png'
      },
      {
        name:'heineken',
        image:'heineken.png'
      },
      {
        name:'Corona',
        image:'corona.png'
      },
      {
        name:'walker',
        image:'walker.png'
      },
      {
        name:'salentein',
        image:'salentein.png'
      }

    ]
  }

}
