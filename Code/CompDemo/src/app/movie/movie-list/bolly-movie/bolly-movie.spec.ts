import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollyMovie } from './bolly-movie';

describe('BollyMovie', () => {
  let component: BollyMovie;
  let fixture: ComponentFixture<BollyMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BollyMovie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BollyMovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
