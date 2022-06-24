import { TestBed } from '@angular/core/testing';

import { UplodImagesService } from './uplod-images.service';

describe('UplodImagesService', () => {
  let service: UplodImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UplodImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
