import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Input() public placeholder: string = "Search";
    @Input() public findString: string[] = [];
    
    public view: boolean = true;
    
    @Output() private toPutListElement = new EventEmitter<any[]>();
    
    
    public listSearched: any[] = [];
    public searching: string = "";
    public list: any[] = [];
    
    constructor() { }

    ngOnInit(): void {}

    setList(list: any[]){
        this.list = list;
        this.search();
    }

    hide(){
        this.view = false;
    }

    search(){
        if(this.searching != ""){
            this.listSearched = [];
            const regExSearching = new RegExp(this.searching,'gi');
            this.list.map( (item: any) => {
                try {
                    if(this.findString.some(
                        (find) => item[find].match(regExSearching))){
                            this.listSearched.push(item);
                        } 
                } catch (error) {}
            });
        }else{
            this.listSearched = this.list;
        }
        this.toPutListElement.emit(this.listSearched);
    }
}
