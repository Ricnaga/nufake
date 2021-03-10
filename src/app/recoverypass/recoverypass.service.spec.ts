import { TestBed } from '@angular/core/testing';

import { RecoverypassService } from './recoverypass.service';

describe('RecoverypassService', () => {
  let service: RecoverypassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverypassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
