import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennaPopupComponent } from './antenna-popup.component';

describe('AntennaPopupComponent', () => {
  let component: AntennaPopupComponent;
  let fixture: ComponentFixture<AntennaPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntennaPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntennaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
