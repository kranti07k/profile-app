import { AppRoutingModule } from './approuting.module';

describe('AppRoutingModule', () => {
  let routerModule: AppRoutingModule;

  beforeEach(() => {
    routerModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(routerModule).toBeTruthy();
  });
});
