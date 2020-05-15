import { pipe, path, split } from 'ramda';

const pathString = pipe(split(/[[\].]/), path);

// eslint-disable-next-line import/prefer-default-export
export { pathString };
