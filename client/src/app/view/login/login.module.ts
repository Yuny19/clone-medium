import { NgModule } from "@angular/core";
import { AuthSharedModule } from '../../shared/auth-shared.module';
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
        MediyunSharedModule,
        AuthSharedModule
    ]
})

export class LoginModule{}