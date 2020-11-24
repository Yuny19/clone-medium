import { NgModule } from "@angular/core";
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from 'ng2-ckeditor';
import { ListContentModule } from 'src/app/component/list-content/list-content.module';
import { MediyunSharedModule } from '../../shared/mediyun-shared.module';
import { DetailContentModule } from '../detail-content/detail-content.module';
import { FormStoryComponent } from './form-story/form-story.component';
import { ListStoryComponent } from './list-story/list-story.component';
import { MyStoryRoutingModule } from './my-story-routing.module';


@NgModule({
    declarations:[
        ListStoryComponent,
        FormStoryComponent
    ],
    exports:[
        ListStoryComponent,
        FormStoryComponent
    ],
    imports:[ 
        MediyunSharedModule,
        CKEditorModule,
        NgSelectModule,
        ListContentModule,
        MyStoryRoutingModule,
        DetailContentModule
    ]
})

export class MyStoryModule{} 