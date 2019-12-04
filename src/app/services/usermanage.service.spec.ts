import { TestBed, inject } from '@angular/core/testing';

describe('UsermanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsermanageService]
    });
  });

  it('should be created', inject([UsermanageService], (service: UsermanageService) => {
    expect(service).toBeTruthy();
  }));
});
