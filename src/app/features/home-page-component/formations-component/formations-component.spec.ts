import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsComponent } from './formations-component';

describe('FormationsComponent', () => {
  let component: Formations;
  let fixture: ComponentFixture<FormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormationsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
