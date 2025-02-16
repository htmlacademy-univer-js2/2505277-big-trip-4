import { getRandomArrayElement } from '../utils.js';
import { CITIES, DESCRIPTIONS } from './const.js';


const mockDestinations = [
  {
    'id': 1,
    'description': getRandomArrayElement(DESCRIPTIONS),
    'cityName': getRandomArrayElement(CITIES),
    'photos': [
      `https://loremflickr.com/300/200?random=${crypto.randomUUID()}`,
    ]
  },
  {
    'id': 2,
    'description': getRandomArrayElement(DESCRIPTIONS),
    'cityName': getRandomArrayElement(CITIES),
    'photos': [
      `https://loremflickr.com/300/200?random=${crypto.randomUUID()}`,
    ]
  },
  {
    'id': 3,
    'description': getRandomArrayElement(DESCRIPTIONS),
    'cityName': getRandomArrayElement(CITIES),
    'photos': [
      `https://loremflickr.com/300/200?random=${crypto.randomUUID()}`,
    ]
  },
  {
    'id': 4,
    'description': getRandomArrayElement(DESCRIPTIONS),
    'cityName': getRandomArrayElement(CITIES),
    'photos': [
      `https://loremflickr.com/300/200?random=${crypto.randomUUID()}`,
    ]
  }
];

export { mockDestinations };

