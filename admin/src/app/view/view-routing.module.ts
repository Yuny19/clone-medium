import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
            },
            {
                path:'manage-user',
                loadChildren:() => import('./../component/data-table/data-table.module').then(mod => mod.DataTableModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ViewRoutingModule { }