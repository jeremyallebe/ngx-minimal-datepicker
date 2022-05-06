import { TestBed } from '@angular/core/testing';

import { NgxMinimalDatepickerService } from './ngx-minimal-datepicker.service';

describe('NgxMinimalDatepickerService', () => {
  let service: NgxMinimalDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMinimalDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
