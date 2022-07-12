import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DntpopupComponent } from './dntpopup.component';

describe('DntpopupComponent', () => {
  let component: DntpopupComponent;
  let fixture: ComponentFixture<DntpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DntpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DntpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
