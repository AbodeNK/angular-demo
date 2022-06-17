import { TestBed } from '@angular/core/testing';

import { ImageUplodService } from './image-uplod.service';

describe('ImageUplodService', () => {
  let service: ImageUplodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageUplodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
