import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/service/content.service';

@Component({
    selector: 'content',
    styleUrls: ['./content.component.scss'],
    templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {

    isi: any;
    id: string = "";
    constructor(private contentService: ContentService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');

        this.contentService.getDetail(this.id).subscribe((content) => {
            this.isi = content;
        })
    }

}