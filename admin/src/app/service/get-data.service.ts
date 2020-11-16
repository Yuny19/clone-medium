import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AppModule } from '../app.module';
import { Page, PagedData, User } from '../model';

@Injectable({ providedIn: AppModule })
export class GetDataService {
   
    constructor(private http: HttpClient){

    }

    
}