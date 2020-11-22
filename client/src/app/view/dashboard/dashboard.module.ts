import { NgModule } from "@angular/core";
import { ListContentModule } from 'src/app/component/list-content/list-content.module';
import { MediyunSharedModule } from '../../shared/mediyun-shared.module';
import { DetailContentModule } from '../detail-content/detail-content.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    declarations:[
        DashboardComponent
    ],
    exports:[
        DashboardComponent
    ],
    imports:[ 
        MediyunSharedModule,
        DashboardRoutingModule,
        ListContentModule,
        DetailContentModule
    ]
})

export class DashboardModule{}