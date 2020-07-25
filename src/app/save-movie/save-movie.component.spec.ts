import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMovieComponent } from './save-movie.component';

describe('SaveMovieComponent', () => {
  let component: SaveMovieComponent;
  let fixture: ComponentFixture<SaveMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
