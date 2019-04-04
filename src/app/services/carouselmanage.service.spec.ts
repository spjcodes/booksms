import { TestBed, inject } from '@angular/core/testing';

import { CarouselmanageService } from './carouselmanage.service';

describe('CarouselmanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselmanageService]
    });
  });

  it('should be created', inject([CarouselmanageService], (service: CarouselmanageService) => {
    expect(service).toBeTruthy();
  }));
});
