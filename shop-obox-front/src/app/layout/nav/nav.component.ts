import { Component, HostListener, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Category } from 'src/app/category/shared/model/category.model';
import { CategoryService } from 'src/app/category/shared/service/category.service';

// import { User } from '../../../models/user.model';

@Component({
  selector: 'header-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy, OnChanges {
  // public user: User;
  @Input() doScroll: boolean;
  @Input() disabledCart: boolean;
  private authSubscription: Subscription;
  public isMenuCollapsed = true;
  public currentWindowWidth: number;
  public categories: Category[];

  @HostListener('window:scroll',['$event'])
  onWindowScroll(){

    if(this.doScroll){
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbarIn');
        element.classList.add('static');
        element.classList.remove('navbarOut');
      } else {
        element.classList.add('navbarOut');
        element.classList.remove('static');
        element.classList.remove('navbarIn');
      }
    }

  }

  constructor(public categoryService: CategoryService, private router: Router) {}

  ngOnInit() {
    this.categories = [];
    this.categoryService.getCategory().subscribe((response:any) => {
      this.categories = response.data;
      console.log(this.categories);
    })
    this.currentWindowWidth = window.innerWidth;
  }

  ngOnChanges(){
    this.currentWindowWidth = window.innerWidth;
  }

  goToCategory(categoryId, categoryName){
    this.router.navigateByUrl(`products/category/${categoryId}/${categoryName}`);
  }

  goToCatalogue(){
    this.router.navigateByUrl('products/list')
  }

  ngOnDestroy() {
    //this.authSubscription.unsubscribe();
  }
}
