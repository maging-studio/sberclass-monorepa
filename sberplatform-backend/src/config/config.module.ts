
import { Module } from '@nestjs/common';
import { current } from './config.value';

export const CONFIG_PROVIDER = 'config';

const provider = {
    provide: CONFIG_PROVIDER,
    useValue: current,
};

@Module({
    providers: [provider],
    exports: [provider],
})

export class ConfigModule { }
