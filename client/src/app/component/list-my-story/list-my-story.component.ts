import { Content } from '../../model';
import { Component, OnInit } from "@angular/core";
import { ContentService } from 'src/app/service/content.service';

@Component({
    selector: 'list-my-story',
    styleUrls: ['./list-my-story.component.scss'],
    templateUrl: './list-my-story.component.html'
})

export class ListMyStoryComponent implements OnInit {

    contents: any[];
    constructor(private contentService: ContentService) { }

    ngOnInit() {
        this.contentService.getMyStory().subscribe((content) => {
            this.contents = content;
        })
    }

}