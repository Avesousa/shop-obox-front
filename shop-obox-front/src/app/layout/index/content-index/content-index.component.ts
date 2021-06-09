import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'index-content',
  templateUrl: './content-index.component.html',
  styleUrls: ['./content-index.component.css']
})
export class ContentIndexComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  viewProductList(){
    this.router.navigateByUrl('/product-list');
  }

}
