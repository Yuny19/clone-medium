import { NgModule } from "@angular/core";
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { CardModule } from 'src/app/component/card/card.module';
import { MediyunSharedModule } from '../../shared/mediyun-shared.module';
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
        CardModule
    ]
})

export class DashboardModule{}