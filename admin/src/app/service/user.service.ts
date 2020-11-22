import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AppModule } from '../app.module';
import { User } from '../model';
import { PageRequest } from '../model/page-request.model';
import { PagedApiResponse } from '../model/paged-api-response.model';

@Injectable({ providedIn: AppModule })
export class UserService {

    constructor(private http: HttpClient) { }

    getUser(page: PageRequest): Observable<PagedApiResponse<User>> {
        return this.http.get<PagedApiResponse<User>>(
            `http://localhost:3000/user`,
            {
                params: page.requestParam
            }
        );
    }

}