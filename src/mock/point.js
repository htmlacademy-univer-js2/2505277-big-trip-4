import { getRandomInt, getRandomArrayElement, getRandomBoolean } from '../utils/random.js';
import { PRICE } from './const.js';
import { nanoid } from 'nanoid';

const mockPoints = [
  {
    type: 'taxi',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-12-03 12:03'),
    endDate: new Date('2025-12-03 14:15'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [1],
  },

  {
    type: 'drive',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-11-10 12:41'),
    endDate: new Date('2025-11-14 16:44'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [2, 3],
  },
  {
    type: 'drive',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-03-02 12:10'),
    endDate: new Date('2025-03-02 18:12'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [1, 2, 3],
  },
  {
    type: 'drive',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-04-03 05:30'),
    endDate: new Date('2025-04-16 07:29'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [1, 3],
  },
  {
    type: 'flight',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-03-11 10:07'),
    endDate: new Date('2025-03-14 16:48'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [1],
  },
  {
    type: 'flight',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-05-11 06:01'),
    endDate: new Date('2025-05-11 18:22'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [3],
  },
  {
    type: 'check-in',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-03-11 12:14'),
    endDate: new Date('2025-03-12 04:44'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [1],
  },
  {
    type: 'sightseeing',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-04-03 12:40'),
    endDate: new Date('2025-04-04 14:00'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [1],
  },
  {
    type: 'sightseeing',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-01-07 11:35'),
    endDate: new Date('2025-01-12 11:24'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [2],
  },
  {
    type: 'ship',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-06-03 12:44'),
    endDate: new Date('2025-06-06 11:59'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [1,2],
  },
  {
    type: 'train',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-12-01 17:45'),
    endDate: new Date('2025-12-03 19:44'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [3],
  },
  {
    type: 'train',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-11-03 11:22'),
    endDate: new Date('2025-11-06 14:46'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [1,2],
  },
  {
    type: 'bus',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-08-15 03:15'),
    endDate: new Date('2025-08-15 04:20'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [2],
  },
  {
    type: 'restaurant',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-07-02 12:16'),
    endDate: new Date('2025-07-03 14:57'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [2],
  },
  {
    type: 'restaurant',
    destinationID: getRandomInt(1, 10),
    startDate: new Date('2025-03-03 12:05'),
    endDate: new Date('2025-03-14 19:00'),
    price: getRandomInt(PRICE.MIN, PRICE.MAX),
    isFavorite: !!getRandomBoolean(),
    offers: [1],
  },
];

function getRandomPoint() {
  return {
    id: nanoid(),
    ...getRandomArrayElement(mockPoints)
  };
}

export { getRandomPoint };


