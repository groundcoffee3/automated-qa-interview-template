import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';

describe('AppService', () => {
  let appService: AppService;
  let httpService: HttpService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    appService = app.get<AppService>(AppService);
    httpService = app.get<HttpService>(HttpService);
  });

  describe('getStarWarsFilms', () => {
    it('should return an array of films', (done) => {
      const result = {
        data: {
          results: [
            {
              title: 'A New Hope',
              opening_crawl: 'It is a period of civil war...',
            },
          ],
        },
      };
      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => of(result) as any);

      appService.getStarWarsFilms().subscribe((films) => {
        expect(films.length).toBeGreaterThan(0);
        expect(films[0].title).toEqual('A New Hope');
        done();
      });
    });
  });
});
