import { NgModule } from "@angular/core";
import { FormStoryModule } from 'src/app/component/form-story/form-story.modul';
import { ListContentModule } from 'src/app/component/list-content/list-content.module';
import { MediyunSharedModule } from '../../shared/mediyun-shared.module';
import { DetailContentModule } from '../detail-content/detail-content.module';
import { MyStoryRoutingModule } from './my-story-routing.module';
import { MyStoryComponent } from './my-story.component';


@NgModule({
    declarations:[
        MyStoryComponent
    ],
    exports:[
        MyStoryComponent
    ],
    imports:[ 
        MediyunSharedModule,
        ListContentModule,
        MyStoryRoutingModule,
        DetailContentModule,
        FormStoryModule
    ]
})

export class MyStoryModule{}