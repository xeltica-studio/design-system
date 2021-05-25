import fs from 'fs';
import postcss from 'postcss';
import sass from 'sass';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import logIf from '../log-if';

export default async (silent = false) => {
    logIf(!silent, 'Building css...');
    const plugins = [
        autoprefixer,
    ];

    const src = './src/styles/xeltica-ui.scss';
    const dest = './dist/css/xeltica-ui.css';
    const destMin = './dist/css/xeltica-ui.min.css';

    const compiled = sass.renderSync({ file: src }).css;

    logIf(!silent, 'Sass transpiled');

    const { css } = await postcss(plugins).process(compiled, {
        from: src,
        to: dest,
    });

    if (!fs.existsSync('dist/css')) {
        fs.mkdirSync('dist/css', { recursive: true });
    }
    fs.writeFile(dest, css, () => true);
    logIf(!silent, 'PostCSS transpiled');

    const { css: minCss } = await postcss(cssnano).process(css, {
        from: src,
        to: destMin,
    });

    fs.writeFile(destMin, minCss, () => true);
    logIf(!silent, 'min.css generated');
}
