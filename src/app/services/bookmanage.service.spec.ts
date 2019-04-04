import { TestBed, inject } from '@angular/core/testing';

import { BookmanageService } from './bookmanage.service';

describe('BookmanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmanageService]
    });
  });

  it('should be created', inject([BookmanageService], (service: BookmanageService) => {
    expect(service).toBeTruthy();
  }));
});
