import { TestBed } from '@angular/core/testing';

import { MemberAreaService } from './member-area.service';

describe('MemberAreaService', () => {
  let service: MemberAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
