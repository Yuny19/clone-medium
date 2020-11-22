import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/service';

@Component({
    selector: 'detail-content',
    styleUrls:['./detail-content.component.scss'],
    templateUrl: './detail-content.component.html'
})
export class DetailContentComponent implements OnInit{

    isi: any;
    tags: any[];
    id: string = "";
    editable: boolean;
    isShowButton: boolean;
    
    constructor(private contentService: ContentService,
        private activatedRoute: ActivatedRoute){}

    ngOnInit(){
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.editable = this.activatedRoute.snapshot.data.editable;

        if(this.editable){
            this.isShowButton=this.editable
        }

        this.contentService.getDetail(this.id).subscribe((content) => {
            this.isi = content;
            this.tags = content.tag;
        })
    }
}