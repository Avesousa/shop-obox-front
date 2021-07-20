import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../../model/category.interface';

@Component({
    selector: 'category-model',
    templateUrl: './category.main.component.html',
    styleUrls: ['../../category.style.scss']
})
export class CategoryModelComponent implements OnInit {

    @Input()
    public isCreation: boolean = false;
    @Input()
    public isUpdate: boolean = false;
    @Input()
    public category: Category = this.getDefaultCategory();

    @Output() private toGetAllEvent: EventEmitter<any> = new EventEmitter<any>();

    public viewForm: boolean = false;
    
    constructor(public categoryService: CategoryService) { }

    ngOnInit(): void { }

    add(){
        this.viewForm = true;
    }

    update(){
        this.isUpdate = true;
    }

    toEventBack(_event: any){
        this.toBack();
    }

    toBack(){
        this.viewForm = false;
        this.isUpdate = false;
    }

    toRefresh(){
        this.toGetAllEvent.emit(null);
    }

    toUpdate(event: Category){
        this.categoryService.update(event).subscribe((result) => {
            this.toBack();
            this.toRefresh();
        });
    }

    toCreate(event:Category){
        this.categoryService.create(event).subscribe((result) =>{
            this.toBack();
            this.toRefresh();
            this.category = this.getDefaultCategory();
        });
    }

    getDefaultCategory(){
        return {
            name: '',
            description: '',
            ext: '',
            exticon: '',
            icon: '',
            id: null,
            imagen: ''
        };
    }
}
