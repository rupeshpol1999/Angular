import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollyMovie } from './holly-movie';

describe('HollyMovie', () => {
  let component: HollyMovie;
  let fixture: ComponentFixture<HollyMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HollyMovie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HollyMovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
