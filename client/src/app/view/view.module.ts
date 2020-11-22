import { NgModule } from '@angular/core';
import { NavbarModule } from '../component/navbar/navbar.module';
import { MediyunSharedModule } from '../shared/mediyun-shared.module';
import { ViewRoutingModule } from './view-routing.module';
import { ContentModule } from '../component/content/content.module';
import { NewStoryComponent } from './new-story/new-story.component';
import { FormStoryModule } from '../component/form-story/form-story.modul';

@NgModule({
    declarations: [
        NewStoryComponent
    ],
    imports: [
        MediyunSharedModule,
        ViewRoutingModule,
        NavbarModule,
        ContentModule,
        FormStoryModule

    ],
    providers: [
        
    ]
})
export class ViewModule { }