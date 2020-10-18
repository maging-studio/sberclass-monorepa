import { env } from 'process';

import production from './production';
import dev from './dev';

const current = env.NODE_ENV === 'DEV' ? dev : production;

export {
    production,
    dev,
    current,
}