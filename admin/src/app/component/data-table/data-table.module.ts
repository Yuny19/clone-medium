import { NgModule } from "@angular/core";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableComponent } from './data-table.component';

@NgModule({
    declarations:[
        DataTableComponent
    ],
    imports:[
        NgxDatatableModule,
    ],
    exports:[
        DataTableComponent
    ]
})

export class DataTableModule{}