import dayjs from 'dayjs';
import { mockDestinations } from './mock/destination';
import { mockOffers } from './mock/offers';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const DATE_FORMAT = 'DD MMM HH:mm';

const DATE_EDITING_FORM = 'DD/MM/YY HH:mm';

function humanizePointDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : ' ';
}
function humanizeEditingFormDate(date) {
  return date ? dayjs(date).format(DATE_EDITING_FORM) : ' ';
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function addNull(data) {
  if (data.toString().length !== 2) {
    data = `0${data}`;
    return data;
  } else {
    return data;
  }
}
function getDate() {
  const day = getRandomInt(1, 31);
  const month = getRandomInt(1, 12);

  return `${addNull(month)}-${addNull(day)}`;
}

function getDateDifference(startDate, endDate) {
  if (dayjs(endDate).diff(dayjs(startDate), 'minute') < 60) {
    return `${dayjs(endDate).diff(dayjs(startDate), 'minute')}M`;
  } else if (dayjs(endDate).diff(dayjs(startDate), 'minute') === 60) {
    return `${dayjs(endDate).diff(dayjs(startDate), 'minute') / 60}H`;

  } else {
    return `${Math.floor(dayjs(endDate).diff(dayjs(startDate), 'minute') / 60)}H ${dayjs(endDate).diff(dayjs(startDate), 'minute') % 60}M`;

  }
}

function getDestinationById(point) {
  return mockDestinations.find((destination) => destination.id === point.destinationID);
}
function getOffersByType(point) {
  return mockOffers.find((offer) => offer.type === point.type).offers;
}
export { humanizeEditingFormDate, addNull, getDate, getRandomInt, getRandomArrayElement, humanizePointDate, getDateDifference, getDestinationById, getOffersByType };
