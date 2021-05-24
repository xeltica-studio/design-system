import fs from 'fs';
import pug from 'pug';
import path from 'path';
import logIf from '../log-if';

export default (src: string, silent = false) => {
    const p = src
        .slice('src/web'.length)
        .replace('.pug', '.html');
    const dir = path.dirname(p);
    if (!fs.existsSync('dist' + dir)) {
        fs.mkdirSync('dist' + dir);
    }
    const html = pug.renderFile(src, {
        pretty: true,
        path: p.replace('index.html', ''),
    });
    logIf(!silent, 'Rendered ' + p);
    fs.writeFile('dist' + p, html, () => {
        logIf(!silent, 'Saved ' + p);
    });
}