export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Film[];
}

export interface Film {
  episode_id: number;
  title: string;
  director: string;
  producer: string;
  release_date: string;
  opening_crawl: string;
}
