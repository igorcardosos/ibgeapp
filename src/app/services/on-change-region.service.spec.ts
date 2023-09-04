import { TestBed } from '@angular/core/testing';

import { OnChangeRegionService } from './on-change-region.service';

describe('OnChangeRegionService', () => {
  let service: OnChangeRegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnChangeRegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
