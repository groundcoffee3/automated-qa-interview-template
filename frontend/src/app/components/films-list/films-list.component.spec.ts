import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FilmsListComponent } from './films-list.component';

describe('FilmsListComponent', () => {
  let component: FilmsListComponent;
  let fixture: ComponentFixture<FilmsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FilmsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display films container when not loading', () => {
    component.filmsLoading = false;
    fixture.detectChanges();
    const filmsContainer = fixture.debugElement.query(By.css('.films-container'));
    expect(filmsContainer).toBeTruthy();
  });

  it('should not display skeleton container when not loading', () => {
    component.filmsLoading = false;
    fixture.detectChanges();
    const skeletonContainer = fixture.debugElement.query(By.css('.skeleton-container'));
    expect(skeletonContainer).toBeNull();
  });

  it('should display skeleton container when loading', () => {
    component.filmsLoading = true;
    fixture.detectChanges();
    const skeletonContainer = fixture.debugElement.query(By.css('.skeleton-container'));
    expect(skeletonContainer).toBeTruthy();
  });

  it('should not display films container when loading', () => {
    component.filmsLoading = true;
    fixture.detectChanges();
    const filmsContainer = fixture.debugElement.query(By.css('.films-container'));
    expect(filmsContainer).toBeNull();
  });
});