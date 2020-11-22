import { HttpClient } from '@angular/common/http';
import { Content } from '../model';
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

    getDetail(id: string): Observable<Content> {
        return this.http.get<Content>(
            `http://localhost:3000/content/detail/${id}`);
    }

    getMyStory(): Observable<Array<Content>> {
        return this.http.get<Array<Content>>(
            `http://localhost:3000/content/myStory`);
    }

    add(newData: any): Observable<Content> {
        return this.http.post<Content>(`http://localhost:3000/content/`, newData);
    }

    update(id: string, updateData: any): Observable<Content> {
        return this.http.put<Content>(`http://localhost:3000/content/${id}`, updateData);
    }

    delete(id: string): Observable<Content>{
        return this.http.delete<Content>(`http://localhost:3000/content/${id}`);
    }
} 