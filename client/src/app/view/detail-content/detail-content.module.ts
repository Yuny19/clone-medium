import { NgModule } from "@angular/core";
import { ContentModule } from 'src/app/component/content/content.module';
import { MediyunSharedModule } from 'src/app/shared/mediyun-shared.module';
import { DetailContentComponent } from './detail-content.component';

@NgModule({
    declarations:[
        DetailContentComponent
    ],
    exports:[
        DetailContentComponent
    ],
    imports:[
        MediyunSharedModule,
        ContentModule
    ]
})

export class DetailContentModule{} 