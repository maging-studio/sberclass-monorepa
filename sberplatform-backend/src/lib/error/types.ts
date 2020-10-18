import { HttpStatus } from '@nestjs/common';

export enum ErrorNames {
    DOMAIN_ERROR = 'DOMAIN_ERROR',
    VALIDATION_ERROR = 'VALIDATION_ERROR',
    UNAUTHORIZED = 'UNAUTHORIZED_ERROR',
    NOT_FOUND = 'NOT_FOUND_ERROR',
    UNKNOWN = 'UNKNOWN_ERROR',
}

export type ErrorName = keyof typeof ErrorNames;

export interface AppError {
    code: ErrorNames;
    data?: {
        [key: string]: string;
    };
}

export interface AppErrorHttpResponse extends AppError {
    statusCode: HttpStatus;
    originalStatus: HttpStatus;
    timestamp: number;
    name: string;
}

export interface IAppErrorFactory {
    createError: (name: ErrorNames, data: AppError['data']) => AppError;
}
