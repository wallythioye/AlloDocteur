import { TestBed } from '@angular/core/testing';

import { DossierMedicalServiceService } from './dossier-medical-service.service';

describe('DossierMedicalServiceService', () => {
  let service: DossierMedicalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossierMedicalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
