import { TestBed } from '@angular/core/testing';

import { MockLocalStorageService } from './mock-local-storage.service';

describe('MockLocalStorageService', () => {
  let service: MockLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
