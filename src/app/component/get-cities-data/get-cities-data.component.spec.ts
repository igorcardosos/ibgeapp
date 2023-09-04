import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCitiesDataComponent } from './get-cities-data.component';

describe('GetCitiesDataComponent', () => {
  let component: GetCitiesDataComponent;
  let fixture: ComponentFixture<GetCitiesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCitiesDataComponent]
    });
    fixture = TestBed.createComponent(GetCitiesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
