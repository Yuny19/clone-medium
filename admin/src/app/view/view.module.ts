import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediyunSharedModule } from '../shared/mediyun-shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewRoutingModule } from './view-routing.module';


@NgModule({
    declarations: [
        DashboardComponent,

    ],
    imports: [
        MediyunSharedModule,
        ViewRoutingModule
    ]
})
export class ViewModule { }