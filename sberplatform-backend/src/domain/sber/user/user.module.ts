import { UserResolver } from './user.resolver';
import { Module } from '@nestjs/common';
import { createModelProvider } from 'src/infrastructure/db/db.utils';
import { DbModule } from 'src/infrastructure/db/db.module';
import { UserService } from './user.service';
import { models } from './user.data';
import { UserController } from './user.controller';

const providers = [
    ...Object.values(models).map(createModelProvider),
    UserService,
    UserResolver,
];

@Module({
    imports: [
        DbModule,
    ],
    providers,
    controllers: [UserController],
    exports: providers,
})

export class UserModule { }
