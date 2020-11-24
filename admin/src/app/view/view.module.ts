import { NgModule } from '@angular/core';
import { MediyunSharedModule } from '../shared/mediyun-shared.module';
import { ManageUserModule } from './manage-user/manage-user.module';
import { ViewRoutingModule } from './view-routing.module';

@NgModule({
    declarations: [
        
    ],
    imports: [
        MediyunSharedModule,
        ViewRoutingModule,
        ManageUserModule
        
    ]
})
export class ViewModule { }