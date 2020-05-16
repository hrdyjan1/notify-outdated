import {
  pipe, path, split, mapObjIndexed,
} from 'ramda';

const pathString = pipe(split(/[[\].]/), path);

const addKeyInObj = mapObjIndexed((_, key, obj) => ({ key, ...obj[key] }));

export { pathString, addKeyInObj };
