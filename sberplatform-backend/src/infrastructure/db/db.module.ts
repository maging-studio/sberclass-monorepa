import { Module } from '@nestjs/common';
import { ConfigModule, CONFIG_PROVIDER } from 'src/config/config.module';
import { createConnection } from './db.utils';

export const MONGO_PROVIDER = 'mongoConnection';

export const providers = [
    {
        provide: MONGO_PROVIDER,
        useFactory: createConnection,
        inject: [CONFIG_PROVIDER],
    },
];

@Module({
    imports: [ConfigModule],
    providers,
    exports: providers,
})

export class DbModule { }
