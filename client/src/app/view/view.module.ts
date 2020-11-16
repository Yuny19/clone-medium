import { NgModule } from '@angular/core';
import { NavbarModule } from '../component/navbar/navbar.module';
import { MediyunSharedModule } from '../shared/mediyun-shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ViewRoutingModule } from './view-routing.module';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ListMyStoryModule } from '../component/list-my-story/list-my-story.module';
import { ListContentModule } from '../component/list-content/list-content.module';
import { MyStoryComponent } from './my-story/my-story.component';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { ContentModule } from '../component/content/content.module';
import { NewStoryComponent } from './new-story/new-story.component';


let config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("699081588767-gbkfsbfug2292rtfp619vv6l0cig3scb.apps.googleusercontent.com")
    }
]);

export function provideConfig() {
    return config;
}

@NgModule({
    declarations: [
        DashboardComponent,
        LoginComponent,
        MyStoryComponent,
        DetailContentComponent,
        NewStoryComponent
    ],
    imports: [
        MediyunSharedModule,
        ViewRoutingModule,
        NavbarModule,
        SocialLoginModule,
        ListContentModule,
        ListMyStoryModule,
        ContentModule

    ],
    providers: [
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        }
    ]
})
export class ViewModule { }