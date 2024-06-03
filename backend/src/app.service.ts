import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from './app.interfaces';
import { FilmDto } from './DTOs/film.dto';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getStarWarsFilms(): Observable<FilmDto[]> {
    return this.httpService
      .get<ApiResponse>('https://swapi.dev/api/films')
      .pipe(
        map((axiosResponse: any) =>
          axiosResponse.data.results.map((film) => {
            film.opening_crawl = this.trimCrawl(film.opening_crawl);
            return new FilmDto(film);
          }),
        ),
        catchError((error) => {
          console.error('Error fetching Star Wars films:', error);
          return throwError(
            () =>
              new HttpException(
                'Failed to fetch Star Wars films',
                HttpStatus.INTERNAL_SERVER_ERROR,
              ),
          );
        }),
      );
  }

  private trimCrawl(crawl: string): string {
    return crawl.split(' ').slice(0, 20).join(' ') + '...';
  }
}
