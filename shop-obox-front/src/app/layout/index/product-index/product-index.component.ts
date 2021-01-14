import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'index-product',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  viewProductList(){
    this.router.navigateByUrl('/product-list');
  }

}
