import { Component, OnInit } from '@angular/core';
import { Content } from '../../../model';
import { ContentService } from '../../../service';

@Component({
    selector: 'list-story',
    templateUrl: './list-story.component.html'
})
export class ListStoryComponent implements OnInit{

    contents: Content[];
    constructor(private contentService: ContentService){}

    ngOnInit(){
        this.contentService.getMyStory().subscribe((data: Content[])=>{
            this.contents= data;
        });
    }
}