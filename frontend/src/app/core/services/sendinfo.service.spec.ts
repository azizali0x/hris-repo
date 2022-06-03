import { TestBed } from '@angular/core/testing';

import { SendinfoService } from './sendinfo.service';

describe('SendinfoService', () => {
  let service: SendinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
