import { TestBed } from '@angular/core/testing';

import { FedUnApiService } from './fed-un-api.service';

describe('FedUnApiService', () => {
  let service: FedUnApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FedUnApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
