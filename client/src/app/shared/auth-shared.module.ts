import { NgModule } from '@angular/core';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';

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
  declarations:[
  ],
  imports: [
    SocialLoginModule

  ],
  exports: [
    SocialLoginModule

  ],
  providers:[
      {
          provide: AuthServiceConfig,
          useFactory: provideConfig 
      },
  ]
})
export class AuthSharedModule {}
