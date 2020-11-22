import { Component, Input, OnInit } from "@angular/core";
import { Content, Tag } from 'src/app/model';

@Component({
    selector: 'content',
    styleUrls: ['./content.component.scss'],
    templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {

    @Input() content: Content;
    @Input() tags: Tag;
    @Input() isShowButton: boolean = false;

    constructor() { }

    ngOnInit() {

    }

}