import { HttpClient } from '@angular/common/http';
import { Content } from '../model';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AppModule } from '../app.module';
import { constant } from '../../environments/constant';
import { ToastrService } from 'ngx-toastr';


@Injectable({ providedIn: AppModule })
export class ContentService {

    constructor(private http: HttpClient,
        private toastrService: ToastrService) { }

    getContent(): Observable<Array<Content>> {
        return this.http.get<Array<Content>>(
            `${constant.contentUrl}/`);
    }

    getDetail(id: string): Observable<Content> {
        return this.http.get<Content>(
            `${constant.contentUrl}/detail/${id}`);
    }

    getMyStory(): Observable<Array<Content>> {
        return this.http.get<Array<Content>>(
            `${constant.contentUrl}/myStory`);
    }

    add(newData: any): Observable<Content> {
        return this.http.post<Content>(`${constant.contentUrl}/`, newData);
    }

    update(id: string, updateData: any): Observable<Content> {
        return this.http.put<Content>(`${constant.contentUrl}/${id}`, updateData);
    }

    delete(id: string): Observable<Content>{
        return this.http.delete<Content>(`${constant.contentUrl}/${id}`);
    }
} 