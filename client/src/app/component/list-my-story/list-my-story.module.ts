import { NgModule } from "@angular/core";
import { MediyunSharedModule } from 'src/app/shared/mediyun-shared.module';
import { ListMyStoryComponent } from './list-my-story.component';

@NgModule({
    declarations:[
        ListMyStoryComponent
    ],
    exports:[
        ListMyStoryComponent
    ],
    imports:[
        MediyunSharedModule
    ]
})

export class ListMyStoryModule{}