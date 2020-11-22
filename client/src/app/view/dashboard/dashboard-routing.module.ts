import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DetailContentComponent } from '../detail-content/detail-content.component';

const routes: Routes = [

    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: DetailContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class DashboardRoutingModule { }