import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService);
    if (req.url === `${environment.baseUrl}/user/login/admin`) {
      return next.handle(req);
    } 
    else {
      let tokenizedReq = req.clone(
        {
          headers: req.headers.set('token', authService.getToken())
        }
      )
      return next.handle(tokenizedReq)

    }

  }

}