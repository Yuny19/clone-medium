import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from '../service/auth.service';

@Injectable({ providedIn: 'root' })
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService);
    if (req.url === 'http://localhost:3000/user/login/admin') {
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