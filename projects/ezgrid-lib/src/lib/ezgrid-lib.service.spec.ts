import { TestBed } from '@angular/core/testing';

import { EzgridLibService } from './ezgrid-lib.service';

describe('EzgridLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EzgridLibService = TestBed.get(EzgridLibService);
    expect(service).toBeTruthy();
  });
});
