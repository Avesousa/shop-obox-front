import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [ 
        BrowserModule,
        CommonModule,
        FormsModule 
    ],
    exports: [SearchComponent],
    providers: [],
})
export class SearchModule {}