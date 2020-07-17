import { TestBed } from '@angular/core/testing';

import { RegionsService } from './regions.service';

describe('RegionsService', () => {
  let service: RegionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly create region', () => {
    const dimensions = {
      left: 0,
      top: 0,
      width: 200,
      height: 150
    };
    const type = 'testType';
    const region = service.createRegion(dimensions, type);

    expect(region).toEqual(jasmine.objectContaining({dimensions, type}));
  });
});
