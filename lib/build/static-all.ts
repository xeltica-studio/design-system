import { globAsync } from '../glob-async';
import buildStatic from './static';
import logIf from '../log-if';

export default async (silent = false) => {
    logIf(!silent, 'Copying static files...');

    const sources = await globAsync('src/assets/**/*');
    logIf(!silent, 'Collected files');
    for (const src of sources) {
        buildStatic(src, silent);
    }
}

