import { TestBed } from '@angular/core/testing';

import { BaseStorage } from './base.storage';

describe('BaseStorageService', () => {
  let service: BaseStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
