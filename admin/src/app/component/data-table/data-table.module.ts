import { NgModule } from "@angular/core";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MediyunSharedModule } from 'src/app/shared/mediyun-shared.module';
import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';

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
        DataTableRoutingModule
    ] 
})

export class DataTableModule{}