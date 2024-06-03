import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';
import { FilmDto } from './DTOs/film.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('sw-films')
  async getFilms(): Promise<FilmDto[]> {
    try {
      return await firstValueFrom(this.appService.getStarWarsFilms());
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException(error.getResponse(), error.getStatus());
      }
      throw new HttpException(
        'Something went wrong.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
