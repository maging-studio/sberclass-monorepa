import { Module } from '@nestjs/common';
import httpRequest from './httpRequest';

export const HTTP_REQUEST_PROVIDER = 'httpRequest';

const providers = [
    {
        provide: HTTP_REQUEST_PROVIDER,
        useValue: httpRequest,
    },
];

@Module({
    providers,
    exports: providers,
})

export class RequestsModule { }
