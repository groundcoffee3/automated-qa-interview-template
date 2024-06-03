import { Film } from '../app.interfaces';

export class FilmDto {
  episode_id: number;
  title: string;
  director: string;
  producer: string;
  opening_crawl: string;
  release_date: string;

  constructor(film: Film) {
    this.episode_id = film.episode_id;
    this.title = film.title;
    this.director = film.director;
    this.producer = film.producer;
    this.release_date = formatDate(film.release_date);
    this.opening_crawl = film.opening_crawl;
  }
}

function formatDate(date: string): string {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + (d.getDate() + 1);
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [month, day, year].join('/');
}
