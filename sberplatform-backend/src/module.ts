import { join } from 'path';
import { forwardRef, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppExceptionFilter } from 'src/infrastructure/nest/ExceptionFilter';
import { AppService } from 'src/service';

import { AppController } from './controller';
import { loggerMiddleware } from './infrastructure/nest/middlewares/logger.middleware';
import { requestIdMiddleware } from './infrastructure/nest/middlewares/requestId.middleware';
import { AppInterceptor } from './infrastructure/nest/Interceptor';
import { UserModule } from './domain/sber/user/user.module';
import { LessonModule } from './domain/sber/lesson/lesson.module';


const providers = [
    AppService,
    {
        provide: APP_INTERCEPTOR,
        useClass: AppInterceptor,
    },
    {
        provide: APP_FILTER,
        useClass: AppExceptionFilter,
    },
];

@Module({
    imports: [
        UserModule,
        LessonModule,
        // GraphQLModule.forRoot({
        //     debug: true,
        //     playground: true,
        //     installSubscriptionHandlers: true,
        //     autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        //     sortSchema: true,
        // }),
    ],
    controllers: [AppController],
    providers: providers,
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(requestIdMiddleware, loggerMiddleware)
            .forRoutes('*');
    }
}
