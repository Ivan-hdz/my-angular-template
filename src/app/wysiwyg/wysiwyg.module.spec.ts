import { WYSIWYGModule } from './wysiwyg.module';

describe('WYSIWYGModule', () => {
  let wYSIWYGModule: WYSIWYGModule;

  beforeEach(() => {
    wYSIWYGModule = new WYSIWYGModule();
  });

  it('should create an instance', () => {
    expect(wYSIWYGModule).toBeTruthy();
  });
});
