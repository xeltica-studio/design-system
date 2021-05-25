import _path from 'path';
import chokidar from 'chokidar';
import buildCss from './lib/build/css';
import buildHtmlAll from './lib/build/html-all';
import buildHtml from './lib/build/html';
import buildStatic from './lib/build/static';
import buildStaticAll from './lib/build/static-all';


const $ = chokidar.watch('src', {
    persistent: true,
});

$.on('ready', () => {
    buildCss(true);
    buildHtmlAll(true);
    buildStaticAll(true);

    console.log('Ready for changes...');

    $.on('add', (path, stats) => {
        update(path);
    });

    $.on('change', (path, stats) => {
        update(path);
    });
});

function update(path: string) {
    if (path.endsWith('.pug')) {
        const fileName = _path.basename(path);
        if (fileName.startsWith('_')) {
            buildHtmlAll();
        } else {
            buildHtml(path);
        }
    } else if (path.startsWith('src/assets')) {
        buildStatic(path);
    } else if (path.endsWith('.scss')) {
        buildCss();
    }
}