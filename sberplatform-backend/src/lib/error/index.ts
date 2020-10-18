import * as Terror from 'terror';
import { ErrorNames, ErrorName, IAppErrorFactory, AppError } from './types';

export const AppErrorFactory: IAppErrorFactory = Terror.create('AppError', ErrorNames);

export const isAppError = (error: any): error is AppError =>
    'code' in error
    && 'data' in error
    && Object.values(ErrorNames).includes(error.code);


export const createAppError = (
    name: ErrorName,
    data?: AppError['data'],
): AppError => {
    const errorCode = ErrorNames[name];

    return AppErrorFactory.createError(errorCode, data || {});
};

export const mapHttpToAppErrorCode = (code: number): ErrorName => {
    if (code === 404) {
        return 'NOT_FOUND';
    }

    if (code === 401 || code === 403) {
        return 'UNAUTHORIZED';
    }

    if (code >= 400 && code < 500) {
        return 'DOMAIN_ERROR';
    }

    if (code === 500) {
        return 'UNKNOWN';
    }

    return 'UNKNOWN';
}

export const mapErrorCodeToHttpCode = (errorName: ErrorNames) => {
    switch (errorName) {
        case ErrorNames.UNAUTHORIZED:
            return 401;
        case ErrorNames.NOT_FOUND:
            return 404;
        case ErrorNames.DOMAIN_ERROR:
            return 400;
        case ErrorNames.UNKNOWN:
            return 500;
        default:
            return 500;
    }
}

export const simplifyHttpStatus = (status: number): number => {
    if (status === 404) {
        return 404;
    }

    if (status < 500) {
        return 400;
    }

    return 500;
};
