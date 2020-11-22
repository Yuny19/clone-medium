import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../service';
import { Content } from '../../model';

@Component({
    selector: 'dashboard',
    styleUrls:['./dashboard.component.css'],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{

    contents: Content[];
    constructor(private contentService: ContentService){}

    ngOnInit(){
        this.contentService.getContent().subscribe((data: Content[])=>{
            this.contents= data;
        });
    }
}