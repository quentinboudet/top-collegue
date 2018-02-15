import { TestBed, inject } from '@angular/core/testing';

import { CollegueService } from './collegue.service';

describe('CollegueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollegueService]
    });
  });

  it('should be created', inject([CollegueService], (service: CollegueService) => {
    expect(service).toBeTruthy();
  }));
});
