import * as intel from 'intel';
import { Config } from 'src/config/config.types';
import { LoggerType, LogRecord, logTypes } from './types';

export const serializeRecord = (data: LogRecord) => JSON.stringify(data);

export const createRecord = ({
    name,
    level,
    reqId,
    data,
}): LogRecord => ({
    name,
    level,
    reqId,
    data,
    timestamp: new Date(),
    timestampMilleseconds: Date.now(),
});

export const createLogger = (config: Config | any): LoggerType => {
    if (config.logger && config.logger.file) {
        intel.addHandler(new intel.handlers.File(config.logger.file));
    }

    return {
        log: (message) => {
            const record = typeof message === 'string'
                ? createRecord({
                    name: logTypes.message,
                    level: 'INFO',
                    data: { message },
                    reqId: null,
                })
                : message;

            intel.info(serializeRecord(record));
        },
    };
};

export const logger = createLogger({});
