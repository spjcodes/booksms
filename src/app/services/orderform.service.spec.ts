import { TestBed, inject } from '@angular/core/testing';

import { OrderformService } from './orderform.service';

describe('OrderformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderformService]
    });
  });

  it('should be created', inject([OrderformService], (service: OrderformService) => {
    expect(service).toBeTruthy();
  }));
});
