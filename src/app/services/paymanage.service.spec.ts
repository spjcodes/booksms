import { TestBed, inject } from '@angular/core/testing';

import { PaymanageService } from './paymanage.service';

describe('PaymanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymanageService]
    });
  });

  it('should be created', inject([PaymanageService], (service: PaymanageService) => {
    expect(service).toBeTruthy();
  }));
});
