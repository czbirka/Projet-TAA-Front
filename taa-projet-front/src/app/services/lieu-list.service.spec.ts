import { TestBed, inject } from '@angular/core/testing';

import { LieuListService } from './lieu-list.service';

describe('LieuListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LieuListService]
    });
  });

  it('should be created', inject([LieuListService], (service: LieuListService) => {
    expect(service).toBeTruthy();
  }));
});
