import { AppError } from 'src/lib/error/types';

export type LogLevel = 'ERROR' | 'WARN' | 'INNFO';

export enum logTypes {
    http = 'HttpLog',
    error = 'Error',
    service = 'Service',
    externalApi = 'ExternalApi',
    db = 'DB',
    message = 'Message',
    gesture = 'gesture',
}

export interface GestureLog {
    name: string;
    start: Date;
    end: Date;
    durationMs: number;
    in: object;
    out: object;
}

export interface LogRecord {
    name: string;
    level: LogLevel;
    timestamp: Date;
    timestampMilleseconds: number;
    reqId: string;
    data: object;
}

export interface MessageRecord extends LogRecord {
    name: string;
    data: {
        message: string;
    };
}

export interface HttpLogRecord extends LogRecord {
    name: logTypes.http;
    data: {
        curl: string;
        httpCode: number;
        controller: string;
        handler: string;
    };
}

export interface ErrorLogRecord extends LogRecord {
    name: logTypes.error;
    data: AppError;
}

export interface ServiceLogRecord extends LogRecord {
    name: logTypes.service;
    data: {
        serviceName: string;
        method: string;
    };
}

export interface ExternalApiLogRecord extends LogRecord {
    name: logTypes.externalApi;
    data: {
        serviceName: string;
        curl: string;
        url: string;
    };
}

export interface DBLogRecord extends LogRecord {
    name: logTypes.db;
    data: {
        dbName: string;
        modelName: string;
    };
}

export interface LoggerType {
    log: (message: string | LogRecord) => void;
}
