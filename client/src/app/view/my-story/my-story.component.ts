import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/model';
import { ContentService } from 'src/app/service';

@Component({
    selector: 'my-story',
    styleUrls:['./my-story.component.scss'],
    templateUrl: './my-story.component.html'
})
export class MyStoryComponent implements OnInit{

    contents: Content[];
    constructor(private contentService: ContentService){}

    ngOnInit(){
        this.contentService.getMyStory().subscribe((data: Content[])=>{
            this.contents= data;
        });
    }
}