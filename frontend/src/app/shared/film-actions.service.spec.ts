import { TestBed } from '@angular/core/testing';

import { FilmActionsService } from './film-actions.service';

describe('FilmActionsService', () => {
  let service: FilmActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
