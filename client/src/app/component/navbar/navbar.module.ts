import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AuthSharedModule } from 'src/app/shared/auth-shared.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations:[
        NavbarComponent
    ],
    exports:[
        NavbarComponent
    ],
    imports:[
        AuthSharedModule,
        RouterModule
    ]
})

export class NavbarModule{} 