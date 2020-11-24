import { NgModule } from '@angular/core';
import { MediyunSharedModule } from '../shared/mediyun-shared.module';
import { ViewRoutingModule } from './view-routing.module';
import { ContentModule } from '../component/content/content.module';

@NgModule({
    declarations: [
    ],
    imports: [
        MediyunSharedModule,
        ViewRoutingModule,
        ContentModule

    ],
    providers: [
        
    ]
})
export class ViewModule { }