import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'page-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class PageProductsComponent implements OnInit {
  value: any;
  type: string;
  title: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get('type');
      this.value = params.get('value');
      this.title = params.get('title');
    })
  }

}
