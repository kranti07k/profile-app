import { TestBed, inject } from '@angular/core/testing';

import { TechskillsService } from './techskills.service';

describe('TechskillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechskillsService]
    });
  });

  it('should be created', inject([TechskillsService], (service: TechskillsService) => {
    expect(service).toBeTruthy();
  }));
});
