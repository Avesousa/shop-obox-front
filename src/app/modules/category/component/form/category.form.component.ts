import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../../model/category.interface';

@Component({
  selector: 'category-form',
  templateUrl: './category.form.component.html',
  styleUrls: ['../../category.style.scss'],
})
export class CategoryFormComponent implements OnInit {
  constructor(public categoryService: CategoryService) {}

  public files: Array<File> = [];
  
  //Inputs
  @Input() 
  public isCreation: boolean = false;
  @Input()
  public labelAction?: string;
  @Input() 
  public category: Category = this.getDefaultCategory();

  //Output
  @Output()
  public toBackEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public toActionEvent: EventEmitter<Category> = new EventEmitter<Category>();

  ngOnInit(): void {
  }


  setFiles(e: any):void {
    this.files.push(e.target.files);
  }

  send():void {
    console.log('enviado');
  }

  toBack(){
    this.toBackEvent.emit(null);
  }

  toAction(){
    this.toActionEvent.emit(this.category);
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
