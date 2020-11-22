import { NgModule } from "@angular/core";
import { MediyunSharedModule } from '../../shared/mediyun-shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
    declarations:[
        LoginComponent
    ],
    exports:[
        LoginComponent
    ],
    imports:[
        LoginRoutingModule,
        MediyunSharedModule
    ]
})

export class LoginModule{}