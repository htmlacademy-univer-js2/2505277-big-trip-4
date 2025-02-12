import { getRandomArrayElement } from '../utils.js';

const mockPoint = [
  {
    type: 'Taxi',
    startDate: new Date('2019-03-19 10:30'),
    endDate: new Date('2019-03-19 11:00'),
    destination: 'Amsterdam',
    price: 20,
    additionalOptions: 'Order Uber',
  },

  {
    type: 'Drive',
    startDate: new Date('2019-03-18 14:30'),
    endDate: new Date('2019-03-18 16:05'),
    destination: 'Chamonix',
    price: 160,
    additionalOptions: 'Rent a car ',
  },
  {
    type: 'Drive',
    startDate: new Date('2019-03-19 16:00'),
    endDate: new Date('2019-03-19 17:00'),
    destination: 'Geneva',
    price: 20,
    additionalOptions: '',
  },
  {
    type: 'Drive',
    startDate: new Date('2019-03-20 08:25'),
    endDate: new Date('2019-03-20 09:25'),
    destination: 'Geneva',
    price: 20,
    additionalOptions: '',
  },
  {
    type: 'Flight',
    startDate: new Date('2019-03-18 12:25'),
    endDate: new Date('2019-03-18 13:35'),
    destination: 'Chamonix',
    price: 160,
    additionalOptions: 'Add luggage',
  },
  {
    type: 'Flight',
    startDate: new Date('2019-03-19 18:00'),
    endDate: new Date('2019-03-19 19:00'),
    destination: 'Geneva',
    price: 20,
    additionalOptions: 'Add luggage',
  },
  {
    type: 'Check-in',
    startDate: new Date('2019-03-18 16:20'),
    endDate: new Date('2019-03-18 17:00'),
    destination: 'Chamonix',
    price: 600,
    additionalOptions: 'Add breakfast',
  },
  {
    type: 'Sightseeing',
    startDate: new Date('2019-03-19 14:20'),
    endDate: new Date('2019-03-19 13:00'),
    destination: 'Chamonix',
    price: 50,
    additionalOptions: 'Book tickets',
  },
  {
    type: 'Sightseeing',
    startDate: new Date('2019-03-19 11:15'),
    endDate: new Date('2019-03-19 12:15'),
    destination: 'Geneva',
    price: 180,
    additionalOptions: 'Book tickets',
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoint);
}

export { getRandomPoint };
