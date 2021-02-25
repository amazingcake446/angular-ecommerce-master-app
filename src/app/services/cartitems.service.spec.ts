import { TestBed } from '@angular/core/testing';

import { CartitemsService } from './cartitems.service';

describe('CartitemsService', () => {
  let service: CartitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
