import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences-component';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
