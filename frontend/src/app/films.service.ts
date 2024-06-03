import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilmsService {
    private baseUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    getStarWarsFilms(): Observable<any> {
        return this.http.get<string>(`${this.baseUrl}/sw-films`);
    }

    getFilmById(filmId: string): Observable<any> {
        return this.http.get<string>(`${this.baseUrl}/sw-films/${filmId}`);
    }
}

