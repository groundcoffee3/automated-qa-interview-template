import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a svg with class "logo"', () => {
    const logoElement = fixture.debugElement.query(By.css('svg.logo'));
    expect(logoElement).toBeTruthy();
  });

  it('should have a path element', () => {
    const pathElement = fixture.debugElement.query(By.css('path'));
    expect(pathElement).toBeTruthy();
  });
});