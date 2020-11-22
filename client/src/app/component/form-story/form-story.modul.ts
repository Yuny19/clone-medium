import { NgModule } from "@angular/core";
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from 'ng2-ckeditor';
import { MediyunSharedModule } from 'src/app/shared/mediyun-shared.module';
import { FormStoryComponent } from './form-story.component';


@NgModule({
    declarations:[
        FormStoryComponent
    ],
    exports:[
        FormStoryComponent
    ],
    imports:[
        MediyunSharedModule,
        CKEditorModule,
        NgSelectModule
    ]
})

export class FormStoryModule{}