import { TestBed, inject } from '@angular/core/testing';

import { CardInfoService } from './card-info.service';

describe('CardInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardInfoService]
    });
  });

  it('should be created', inject([CardInfoService], (service: CardInfoService) => {
    expect(service).toBeTruthy();
  }));
});
