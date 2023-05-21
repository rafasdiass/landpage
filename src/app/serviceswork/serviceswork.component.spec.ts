import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesworkComponent } from './serviceswork.component';

describe('ServicesworkComponent', () => {
  let component: ServicesworkComponent;
  let fixture: ComponentFixture<ServicesworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesworkComponent]
    });
    fixture = TestBed.createComponent(ServicesworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
