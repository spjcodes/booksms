import { TestBed, inject } from '@angular/core/testing';

import { HotrecommendService } from './hotrecommend.service';

describe('HotrecommendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotrecommendService]
    });
  });

  it('should be created', inject([HotrecommendService], (service: HotrecommendService) => {
    expect(service).toBeTruthy();
  }));
});
