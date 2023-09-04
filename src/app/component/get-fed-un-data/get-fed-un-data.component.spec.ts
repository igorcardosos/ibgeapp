import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetFedUnDataComponent } from './get-fed-un-data.component';

describe('GetFedUnDataComponent', () => {
  let component: GetFedUnDataComponent;
  let fixture: ComponentFixture<GetFedUnDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetFedUnDataComponent]
    });
    fixture = TestBed.createComponent(GetFedUnDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
