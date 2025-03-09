import {
  TripPlannerPresenter,
  siteContainerElement,
} from './presenter/trip-presenter.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';

const pointModel = new PointsModel();
const filterModel = new FilterModel();
const tripPlannerPresenter = new TripPlannerPresenter({
  TripPlannerContainer: siteContainerElement, pointModel
});

tripPlannerPresenter.init();
