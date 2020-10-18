import { Module } from '@nestjs/common';
import { ConfigModule, CONFIG_PROVIDER } from 'src/config/config.module';
import { createConnection } from './mqttBroker';

export const MQTT_PROVIDER = 'mqttBroker';

const providers = [
    {
        provide: MQTT_PROVIDER,
        useFactory: createConnection,
        inject: [CONFIG_PROVIDER],
    },
];

@Module({
    imports: [ConfigModule],
    providers,
    exports: providers,
})

export class MqttModule { }
