import { TestBed } from '@angular/core/testing';

import { InquiryStoreService } from './inquiry-store.service';

describe('InquiryStoreService', () => {
  let service: InquiryStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquiryStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
