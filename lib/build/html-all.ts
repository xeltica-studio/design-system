import { globAsync } from '../glob-async';
import buildHtml from './html';
import logIf from '../log-if';

export default async (silent = false) => {
    logIf(!silent, 'Building HTML...');

    const sources = await globAsync('src/web/**/[!_]*.pug');
    logIf(!silent, 'Collected files');
    for (const src of sources) {
        buildHtml(src, silent);
    }
}

