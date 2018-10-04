import { TestBed, inject } from '@angular/core/testing';

import { EmployeedetailsService } from './employeedetails.service';

describe('EmployeedetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeedetailsService]
    });
  });

  it('should be created', inject([EmployeedetailsService], (service: EmployeedetailsService) => {
    expect(service).toBeTruthy();
  }));
});
