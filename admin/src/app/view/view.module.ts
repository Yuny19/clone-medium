import { NgModule } from '@angular/core';
import { DataTableModule } from '../component/data-table/data-table.module';
import { MediyunSharedModule } from '../shared/mediyun-shared.module';
import { ViewRoutingModule } from './view-routing.module';

@NgModule({
    declarations: [
        
    ],
    imports: [
        MediyunSharedModule,
        ViewRoutingModule,
        DataTableModule
        
    ]
})
export class ViewModule { }