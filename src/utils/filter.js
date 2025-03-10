import { FilterType } from '../mock/const';
import { isDateBefore,isDateToday,isDateAfter } from './date';

const filter = {
  [FilterType.EVERYTHING]: (points) => points.filter((point) => point),
  [FilterType.FUTURE]: (points) => points.filter((point) => isDateBefore(point.startDate)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isDateToday(point.startDate)),
  [FilterType.PAST]: (points) => points.filter((point) => isDateAfter((point.startDate))),
};

export {filter};

