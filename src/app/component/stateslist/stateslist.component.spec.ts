import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateslistComponent } from './stateslist.component';

describe('StateslistComponent', () => {
  let component: StateslistComponent;
  let fixture: ComponentFixture<StateslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateslistComponent]
    });
    fixture = TestBed.createComponent(StateslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
