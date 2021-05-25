import copyfiles from 'copyfiles';
import _path from 'path';
import fs from 'fs';
import logIf from '../log-if';

export default async (path: string, silent = false) => new Promise<void>(res => {
    const dest = path.replace('src', 'dist');
    const dir = _path.dirname(dest);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    console.log(dir);
    fs.copyFile(path, dest, () => {
        logIf(!silent, 'Copied ' + path);
        res();
    });
});
