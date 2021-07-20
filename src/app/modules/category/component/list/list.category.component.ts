import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SearchComponent } from 'src/app/modules/commons/search/search.component';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../../model/category.interface';

@Component({
    selector: 'category-list',
    templateUrl: './list.category.component.html',
    styleUrls: ['../../category.style.scss']
})
export class CategoryListComponent implements OnInit {
    
    public list: Category[] = [];
    public listForView: Category[] = [];
    public find: string[] = ["name", "description", "id"];

    @ViewChild("searchCategory") searchCategory: SearchComponent;

    constructor(
        private categoryService: CategoryService
    ) { }

    ngOnInit(): void { 
        this.categoryService.getCategories().subscribe( (result: any) => {
            this.list = result.data;
            this.searchCategory.setList(this.list);
        } )
    }

    toGetAll(_event:any){
        this.ngOnInit();
    }

    toPutListCategories(event: any[]){
        this.listForView = event;
    }
}
