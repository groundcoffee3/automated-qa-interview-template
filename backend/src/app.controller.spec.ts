import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmDto } from './DTOs/film.dto';
import { of } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getStarWarsFilms: jest.fn(),
          },
        },
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  describe('getFilms', () => {
    it('should return an array of films', async () => {
      const result: FilmDto[] = []; // Replace with sample data
      jest
        .spyOn(appService, 'getStarWarsFilms')
        .mockImplementation(() => of(result));

      expect(await appController.getFilms()).toBe(result);
    });

    it('should throw an HttpException when the service throws an error', async () => {
      jest.spyOn(appService, 'getStarWarsFilms').mockImplementation(() => {
        throw new HttpException(
          'Service error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });

      await expect(appController.getFilms()).rejects.toThrow(HttpException);
    });
  });
});
