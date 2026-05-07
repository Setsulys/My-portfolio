import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formations } from './formations';

describe('Formations', () => {
  let component: Formations;
  let fixture: ComponentFixture<Formations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formations],
    }).compileComponents();

    fixture = TestBed.createComponent(Formations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
