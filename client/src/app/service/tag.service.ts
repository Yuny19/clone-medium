import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AppModule } from '../app.module';
import { Tag } from '../model';

@Injectable({ providedIn: AppModule })
export class TagService {
    constructor(private http: HttpClient) {

    }

    getTag(): Observable<Array<Tag>> {
        return this.http.get<Array<Tag>>(
            `http://localhost:3000/tag/`);

    }
}