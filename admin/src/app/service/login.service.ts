import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppModule } from '../app.module';
import { User } from '../model/user.model';


@Injectable({ providedIn: AppModule })
export class LoginService {

    constructor(private http: HttpClient) { }

    login(data: any): Observable<User> {
        return this.http.post<User>(
            `${environment.baseUrl}/user/login/admin`, data); 
    }
} 