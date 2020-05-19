import {
  pipe, path, split, mapObjIndexed,
} from 'ramda';

const pathString = pipe(split(/[[\].]/), path);

const addKeyInObj = mapObjIndexed((_, key, obj) => ({ key, ...obj[key] }));

const getRandomTime = () => Math.random * 1000;

const resolveRandomTime = async () => new Promise((r) => setTimeout(r, 1000));

const checkValidation = (text) => text.length > 3;

export {
  pathString, addKeyInObj, resolveRandomTime, getRandomTime, checkValidation,
};
