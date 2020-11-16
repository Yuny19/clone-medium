import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AppModule } from '../app.module';
import { User } from '../model';


@Injectable({ providedIn: AppModule })
export class LoginService {

    constructor(private http: HttpClient) { }

    login(data: any): Observable<User> {
        return this.http.post<User>(
            'http://localhost:3000/user/login/google', data); 
    }
} 