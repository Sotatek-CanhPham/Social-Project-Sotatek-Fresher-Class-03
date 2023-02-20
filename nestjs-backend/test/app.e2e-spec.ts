import { AppModule } from './../src/app.module';
import { Test } from '@nestjs/testing';
import { ValidationPipe, INestApplication } from '@nestjs/common';
describe('AppController (e2e)', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const appModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = appModule.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    app.close();
  });
  it.todo('should PASS, hehe 1');
  it.todo('should PASS, hehe 2');
});
