import { TestBed } from '@angular/core/testing';

import { RappelServiceService } from './rappel-service.service';

describe('RappelServiceService', () => {
  let service: RappelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RappelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
