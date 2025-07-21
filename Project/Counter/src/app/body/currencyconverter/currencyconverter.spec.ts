import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Currencyconverter } from './currencyconverter';

describe('Currencyconverter', () => {
  let component: Currencyconverter;
  let fixture: ComponentFixture<Currencyconverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Currencyconverter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Currencyconverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
