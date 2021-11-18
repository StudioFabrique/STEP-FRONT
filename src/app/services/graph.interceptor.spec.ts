import { TestBed } from '@angular/core/testing';

import { GraphInterceptor } from './graph.interceptor';

describe('GraphInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GraphInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GraphInterceptor = TestBed.inject(GraphInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
