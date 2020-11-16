import { NgModule } from "@angular/core";
import { MediyunSharedModule } from 'src/app/shared/mediyun-shared.module';
import { ListContentComponent } from './list-content.component';

@NgModule({
    declarations:[
        ListContentComponent
    ],
    exports:[
        ListContentComponent
    ],
    imports:[
        MediyunSharedModule
    ]
})

export class ListContentModule{}