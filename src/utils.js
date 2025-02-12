import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM DD';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizePointDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

export { getRandomArrayElement, humanizePointDate };
