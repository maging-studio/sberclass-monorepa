import * as got from 'got';

export default (url: string, options?: any) => got(url, { json: true, ...options })
    .then(res => res.body);
