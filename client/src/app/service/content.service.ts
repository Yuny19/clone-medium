import { HttpClient } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AppModule } from '../app.module';


@Injectable({ providedIn: AppModule })
export class ContentService {

    constructor(private http: HttpClient) { }

    getContent(): Observable<Array<Content>> {
        return this.http.get<Array<Content>>(
            `http://localhost:3000/content/`);
    }

    getDetail(id: any): Observable<Array<Content>> {
        return this.http.get<Array<Content>>(
            `http://localhost:3000/content/detail/${id}`);
    }

    getMyStory(): Observable<Array<Content>> {
        return this.http.get<Array<Content>>(
            `http://localhost:3000/content/myStory`,{
                headers: {
                    token: window.localStorage.getItem('token')
                }
            });
    }
} 