import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmItemComponent } from './film-item.component';

describe('FilmItemComponent', () => {
  let component: FilmItemComponent;
  let fixture: ComponentFixture<FilmItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FilmItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemComponent);
    component = fixture.componentInstance;
    component.film = {
      title: 'A New Hope',
      opening_crawl: 'It is a period of civil war...',
      producer: 'George Lucas',
      release_date: '1977-05-25'
      // other properties...
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display film title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-title h2').textContent).toContain('A New Hope');
  });

  it('should display film description', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-description p').textContent).toContain('It is a period of civil war...');
  });

  it('should display film producer', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-bottom .card-text').textContent).toContain('George Lucas');
  });

  it('should display film release date', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-bottom .card-text:nth-of-type(2)').textContent).toContain('1977-05-25');
  });
});