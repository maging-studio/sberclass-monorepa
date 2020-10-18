
import * as mqtt from 'async-mqtt';
import { Config } from 'src/config/config.types';

export const createConnection = (config: Config) => {
    const connenction = mqtt.connect(
        config.mqtt.conenctionString,
        {
            username: config.mqtt.username,
            password: config.mqtt.password,
        });

    return connenction;
};
