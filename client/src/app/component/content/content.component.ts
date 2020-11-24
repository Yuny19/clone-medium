import { Component, Input, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Content, Tag } from 'src/app/model';
import { ContentService } from '../../service';

@Component({
    selector: 'content',
    styleUrls: ['./content.component.scss'],
    templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {

    @Input() content: Content;
    @Input() tags: Tag;
    @Input() isShowButton: boolean = false;

    constructor(private contentService: ContentService,
        private router: Router) { }

    ngOnInit() {

    }

    deleteContent(id: string) {
        this.contentService.delete(id).subscribe(() => {
            this.router.navigateByUrl('my-story')
        });
    }

}