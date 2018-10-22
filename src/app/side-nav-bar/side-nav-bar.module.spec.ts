import { SideNavBarModule } from './side-nav-bar.module';

describe('SideNavBarModule', () => {
  let sideNavBarModule: SideNavBarModule;

  beforeEach(() => {
    sideNavBarModule = new SideNavBarModule();
  });

  it('should create an instance', () => {
    expect(sideNavBarModule).toBeTruthy();
  });
});
