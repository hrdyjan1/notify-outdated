export const REPETITION = {
  once: 'once',
  daily: 'daily',
  weekly: 'weekly',
  monthly: 'monthly',
  yearly: 'yearly',
};

export const DECREASE_MAXIMUM_DATE = 'DECREASE_MAXIMUM_DATE';
export const BACK_TO_NORMAL_MAXIMUM_DATE = 'BACK_TO_NORMAL_MAXIMUM_DATE';

export const DATA = [
  {
    id: '0',
  },
];

export function splitDate(date) {
  return date.split(' ');
}
export function replaceSlashForDots(string) {
  return string.replace(/\//g, '.');
}

export function changeOrder(string) {
  const array = string.split('.');
  [array[0], array[2]] = [array[2], array[0]];
  return array.toString().replace(/,/g, '.');
}

export function modifyDate(date) {
  const [d, t] = splitDate(date);
  const dotDate = replaceSlashForDots(d);
  const dotDateOrdered = changeOrder(dotDate);
  return { date: dotDateOrdered, time: t };
}

export default {
  splitDate,
  replaceSlashForDots,
  changeOrder,
  modifyDate,
  REPETITION,
  DECREASE_MAXIMUM_DATE,
  BACK_TO_NORMAL_MAXIMUM_DATE,
};
