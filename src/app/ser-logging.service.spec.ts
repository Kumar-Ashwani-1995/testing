import { TestBed } from '@angular/core/testing';

import { SerLoggingService } from './ser-logging.service';

describe('SerLoggingService', () => {
  let service: SerLoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerLoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
