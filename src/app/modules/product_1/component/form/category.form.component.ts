import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category-form',
  templateUrl: './category.form.component.html',
})
export class ProductFormComponent implements OnInit {
  constructor() {}

  public files: Array<File> = [];

  ngOnInit(): void {}

  setFiles(e: any):void {
    this.files.push(e.target.files);
  }

  send():void {
    console.log('enviado');
  }
}
