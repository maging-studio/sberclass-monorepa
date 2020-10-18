import { env } from 'process';
import 'module-alias/register';
import * as cors from 'cors';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';

import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/module';
// eslint-disable-next-line
declare const module: any;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(
    AppModule,
  );

  app.use(cors());

  app.use(
    rateLimit({
      windowMs: 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  app.use(helmet());

  const port = env.PORT || 4000;

  // @ts-ignore
  app.set('port', port);

  await app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
