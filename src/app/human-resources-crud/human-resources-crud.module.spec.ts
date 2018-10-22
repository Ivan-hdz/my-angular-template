import { HumanResourcesCrudModule } from './human-resources-crud.module';

describe('HumanResourcesCrudModule', () => {
  let humanResourcesCrudModule: HumanResourcesCrudModule;

  beforeEach(() => {
    humanResourcesCrudModule = new HumanResourcesCrudModule();
  });

  it('should create an instance', () => {
    expect(humanResourcesCrudModule).toBeTruthy();
  });
});
