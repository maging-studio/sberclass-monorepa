import * as nanoid from 'nanoid';

export function requestIdMiddleware(req: Request, res: Response, next: Function): void {
    req.headers['x-req-id'] = nanoid();
    return next();
}
