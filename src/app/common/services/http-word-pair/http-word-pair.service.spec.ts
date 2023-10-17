import { TestBed } from '@angular/core/testing';

import { HttpWordPairService } from './http-word-pair.service';

describe('HttpWordPairService', () => {
  let service: HttpWordPairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpWordPairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
