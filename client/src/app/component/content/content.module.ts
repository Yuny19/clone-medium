import { NgModule } from "@angular/core";
import { MediyunSharedModule } from 'src/app/shared/mediyun-shared.module';
import { ContentComponent } from './content.component';

@NgModule({
    declarations:[
        ContentComponent
    ],
    exports:[
        ContentComponent
    ],
    imports:[
        MediyunSharedModule
    ]
})

export class ContentModule{}