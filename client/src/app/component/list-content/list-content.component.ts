import { Component, OnInit } from "@angular/core";
import { ContentService } from 'src/app/service/content.service';

@Component({
    selector: 'list-content',
    styleUrls: ['./list-content.component.scss'],
    templateUrl: './list-content.component.html'
})

export class ListContentComponent implements OnInit {

    contents: any[];
    constructor(private contentService: ContentService) { }

    ngOnInit() {
        this.contentService.getContent().subscribe((content) => {
            this.contents = content;
        })
    }

}