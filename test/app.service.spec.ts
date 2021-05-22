import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { AppService } from '../src/app.service';
import { AsyncPersonDTO } from '../src/async-person.dto';

describe('Automapper test', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Test mapper', async (done) => {
    const appService: AppService = app.get<AppService>(AppService);

    const asyncPersonDto: AsyncPersonDTO = await appService.personMapperAsync();

    expect(asyncPersonDto.lastName).toBe('async last name');
  });
});
