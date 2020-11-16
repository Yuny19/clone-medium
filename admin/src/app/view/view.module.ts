import { NgModule } from '@angular/core';
import { NavbarModule } from '../component/navbar/navbar.module';
import { MediyunSharedModule } from '../shared/mediyun-shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ViewRoutingModule } from './view-routing.module';

@NgModule({
    declarations: [
        DashboardComponent,
        LoginComponent
    ],
    imports: [
        MediyunSharedModule,
        ViewRoutingModule,
        NavbarModule
        
    ]
})
export class ViewModule { }