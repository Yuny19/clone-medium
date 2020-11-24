import { NgModule } from "@angular/core";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MediyunSharedModule } from 'src/app/shared/mediyun-shared.module';
import { DataTableComponent } from './data-table/data-table.component';
import { ManageUserRoutingModule } from './manage-user-routing.module';

@NgModule({
    declarations:[
        DataTableComponent
    ],
    exports:[
        DataTableComponent
    ],
    imports:[
        MediyunSharedModule,
        NgxDatatableModule,
        ManageUserRoutingModule
    ] 
})

export class ManageUserModule{}