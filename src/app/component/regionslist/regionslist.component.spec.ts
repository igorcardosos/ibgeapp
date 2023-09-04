import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionslistComponent } from './regionslist.component';

describe('RegionslistComponent', () => {
  let component: RegionslistComponent;
  let fixture: ComponentFixture<RegionslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionslistComponent]
    });
    fixture = TestBed.createComponent(RegionslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
