import { Content } from '../../model';
import { Component, Input, OnInit } from "@angular/core";
import { ContentService } from 'src/app/service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'list-content',
    styleUrls: ['./list-content.component.scss'],
    templateUrl: './list-content.component.html'
})

export class ListContentComponent implements OnInit {

    contents: Content[];
    content: String;

    @Input('contents')
    set _arrayToGet(data: Content[]) {
        this.contents = data;
    }

    @Input() isShowButton: boolean = false;

    constructor(private contentService: ContentService,
        private toastrService: ToastrService,
        private location: Location) { }

    ngOnInit() {
    }

    deleteContent(id: string) {
        this.contentService.delete(id).subscribe(() => {
            this.toastrService.error('content have been deleted');
            location.reload();
        });
    }

}