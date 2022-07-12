import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousConferencesComponent } from './previous-conferences.component';

describe('PreviousConferencesComponent', () => {
  let component: PreviousConferencesComponent;
  let fixture: ComponentFixture<PreviousConferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousConferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
