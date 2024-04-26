import { Test, TestingModule } from '@nestjs/testing';
import { CloudTaskFactory } from './cloud-task.factory';

describe('CloudTaskFactoryService', () => {
  let service: CloudTaskFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CloudTaskFactory],
    }).compile();

    service = module.get<CloudTaskFactory>(CloudTaskFactory);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
