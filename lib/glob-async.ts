import glob from 'glob';

export const globAsync = (pattern: string) => new Promise<string[]>((res, rej) => {
    glob(pattern, (err, matches) => {
        if (err) rej(err);
        else res(matches);
    });
});