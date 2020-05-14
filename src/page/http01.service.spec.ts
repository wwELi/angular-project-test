/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http01Service } from './http01.service';

describe('Service: Http01', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Http01Service]
    });
  });

  it('should ...', inject([Http01Service], (service: Http01Service) => {
    expect(service).toBeTruthy();
  }));
});
