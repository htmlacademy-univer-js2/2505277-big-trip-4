import { PRICE } from './const.js';
import { getRandomInt } from '../utils/random.js';

const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 1,
        'title': 'Add Extra Luggage',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 2,
        'title': 'Book Uber Ride',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 3,
        'title': 'Choose Luxury Vehicle',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 4,
        'title': 'Request Child Safety Seat',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 5,
        'title': 'Priority Pickup Service',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 1,
        'title': 'Add Vegetarian Meal',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 2,
        'title': 'Seat with Extra Legroom',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 3,
        'title': 'Fast Track Security Access',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 4,
        'title': 'Priority Boarding Access',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 5,
        'title': 'Additional Baggage Allowance',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': 1,
        'title': 'Early Check-In Option',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 2,
        'title': 'Late Check-Out Option',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 3,
        'title': 'Room Upgrade Option',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 4,
        'title': 'Complimentary Welcome Drink',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 5,
        'title': 'City View Room Upgrade',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': [
      {
        'id': 1,
        'title': 'Wine tour',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 2,
        'title': 'Fast tour',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': 1,
        'title': 'Rent big car',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 2,
        'title': 'Fast car',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      },
      {
        'id': 3,
        'title': 'VIP Table Reservation',
        'price': getRandomInt(PRICE.MIN, PRICE.MAX / 20),
      }
    ]
  }
];

export { mockOffers };
