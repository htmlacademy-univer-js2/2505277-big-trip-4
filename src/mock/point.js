import { getRandomInt, getDate, addNull, getRandomArrayElement } from '../utils.js';
import { PRICE, MINUTES, HOUR } from './const.js';

const date = getDate();
const startHour = getRandomInt(HOUR.MIN, HOUR.MAX - 1);
const startMinutes = getRandomInt(MINUTES.MIN, MINUTES.MAX - 1);

const mockPoints = [
  {
    type: 'taxi',
    destinationID: getRandomInt(1, 4),
    startDate: new Date(`2019-${date} ${addNull(startHour)}:${addNull(startMinutes)}`),
    endDate: new Date(`2019-${date} ${addNull(getRandomInt(startHour + 1, 23))}:${addNull(getRandomInt(startMinutes + 1, MINUTES.MAX))}`),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomInt(0, 1),
    offers: [1],
  },

  {
    type: 'drive',
    destinationID: getRandomInt(1, 4),
    startDate: new Date(`2019-${date} ${addNull(startHour)}:${addNull(startMinutes)}`),
    endDate: new Date(`2019-${date} ${addNull(getRandomInt(startHour + 1, 23))}:${addNull(getRandomInt(startMinutes + 1, MINUTES.MAX))}`),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomInt(0, 1),
    offers: [2, 3],
  },
  {
    type: 'drive',
    destinationID: getRandomInt(1, 4),
    startDate: new Date(`2019-${date} ${addNull(startHour)}:${addNull(startMinutes)}`),
    endDate: new Date(`2019-${date} ${addNull(getRandomInt(startHour + 1, 23))}:${addNull(getRandomInt(startMinutes + 1, MINUTES.MAX))}`),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomInt(0, 1),
    offers: [1, 2, 3],
  },
  {
    type: 'drive',
    destinationID: getRandomInt(1, 4),
    startDate: new Date(`2019-${date} ${addNull(startHour)}:${addNull(startMinutes)}`),
    endDate: new Date(`2019-${date} ${addNull(getRandomInt(startHour + 1, 23))}:${addNull(getRandomInt(startMinutes + 1, MINUTES.MAX))}`),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomInt(0, 1),
    offers: [1, 3],
  },
  {
    type: 'flight',
    destinationID: getRandomInt(1, 4),
    startDate: new Date(`2019-${date} ${addNull(startHour)}:${addNull(startMinutes)}`),
    endDate: new Date(`2019-${date} ${addNull(getRandomInt(startHour + 1, 23))}:${addNull(getRandomInt(startMinutes + 1, MINUTES.MAX))}`),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomInt(0, 1),
    offers: [1],
  },
  {
    type: 'flight',
    destinationID: getRandomInt(1, 4),
    startDate: new Date(`2019-${date} ${addNull(startHour)}:${addNull(startMinutes)}`),
    endDate: new Date(`2019-${date} ${addNull(getRandomInt(startHour + 1, 23))}:${addNull(getRandomInt(startMinutes + 1, MINUTES.MAX))}`),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomInt(0, 1),
    offers: [3],
  },
  {
    type: 'check-in',
    destinationID: getRandomInt(1, 4),
    startDate: new Date(`2019-${date} ${addNull(startHour)}:${addNull(startMinutes)}`),
    endDate: new Date(`2019-${date} ${addNull(getRandomInt(startHour + 1, 23))}:${addNull(getRandomInt(startMinutes + 1, MINUTES.MAX))}`),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomInt(0, 1),
    offers: [1],
  },
  {
    type: 'sightseeing',
    destinationID: getRandomInt(1, 4),
    startDate: new Date(`2019-${date} ${addNull(startHour)}:${addNull(startMinutes)}`),
    endDate: new Date(`2019-${date} ${addNull(getRandomInt(startHour + 1, 23))}:${addNull(getRandomInt(startMinutes + 1, MINUTES.MAX))}`),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomInt(0, 1),
    offers: [1],
  },
  {
    type: 'sightseeing',
    destinationID: getRandomInt(1, 4),
    startDate: new Date(`2019-${date} ${addNull(startHour)}:${addNull(startMinutes)}`),
    endDate: new Date(`2019-${date} ${addNull(getRandomInt(startHour + 1, 23))}:${addNull(getRandomInt(startMinutes + 1, MINUTES.MAX))}`),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomInt(0, 1),
    offers: [2],
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export { getRandomPoint };


