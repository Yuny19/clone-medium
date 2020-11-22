import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table.component';

const routes: Routes = [

    {
        path: '',
        component: DataTableComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class DataTableRoutingModule { }