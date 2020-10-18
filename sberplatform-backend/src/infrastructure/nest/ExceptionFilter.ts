import * as _ from 'lodash/fp';
import { ArgumentsHost, Catch, ExceptionFilter as BaseExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

import { AppError, AppErrorHttpResponse } from 'src/lib/error/types';
import { isAppError, createAppError, mapHttpToAppErrorCode, mapErrorCodeToHttpCode, simplifyHttpStatus } from 'src/lib/error';
import { MongoError } from 'mongodb';


type Exception = AppError | HttpException | Error;

const mapToAppError = (
    exception: Exception,
): AppErrorHttpResponse => {
    if (isAppError(exception)) {
        const { code, data = {} } = exception;

        const originalStatus = mapErrorCodeToHttpCode(code);
        const statusCode = simplifyHttpStatus(originalStatus);

        return {
            code,
            data,
            name: 'AppError',
            statusCode,
            originalStatus,
            timestamp: Date.now(),
        };
    }

    if (exception instanceof HttpException) {
        const originalStatus = exception.getStatus();
        const statusCode = simplifyHttpStatus(originalStatus);
        const message: any = exception.getResponse();

        const errorName = mapHttpToAppErrorCode(originalStatus);

        const { code, data } = createAppError(errorName, {
            message: message.error
                || message,
        })

        return {
            code,
            data,
            name: 'HttpException',
            statusCode,
            originalStatus,
            timestamp: Date.now(),
        };
    }

    // Mongoose validation Error
    if (
        exception.name
        && ['ValidationError', 'MongooseError', 'CastError', 'MongoError'].includes(exception.name)
    ) {
        const { code, data } = createAppError('VALIDATION_ERROR', { ...exception });

        const originalStatus = mapErrorCodeToHttpCode(code);
        const statusCode = simplifyHttpStatus(originalStatus);

        return {
            code,
            data,
            name: 'AppError',
            statusCode,
            originalStatus,
            timestamp: Date.now(),
        };
    }

    const { code, data } = createAppError('UNKNOWN');

    return {
        code,
        data,
        name: 'InternalError',
        statusCode: 500,
        originalStatus: 500,
        timestamp: Date.now(),
    };
};

@Catch()
export class AppExceptionFilter implements BaseExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();

        const errorResult = mapToAppError(exception);

        return res
            .status(errorResult.statusCode)
            .json({
                error: errorResult
            });
    }
}
