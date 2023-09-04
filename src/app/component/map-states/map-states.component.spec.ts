import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStatesComponent } from './map-states.component';

describe('MapStatesComponent', () => {
  let component: MapStatesComponent;
  let fixture: ComponentFixture<MapStatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapStatesComponent]
    });
    fixture = TestBed.createComponent(MapStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
