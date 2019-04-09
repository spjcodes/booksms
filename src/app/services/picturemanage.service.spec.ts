import { TestBed, inject } from '@angular/core/testing';

import { PicturemanageService } from './picturemanage.service';

describe('PicturemanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicturemanageService]
    });
  });

  it('should be created', inject([PicturemanageService], (service: PicturemanageService) => {
    expect(service).toBeTruthy();
  }));
});
