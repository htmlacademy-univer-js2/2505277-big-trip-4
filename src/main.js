import {
  TripPlannerPresenter,
  siteContainerElement
} from './presenter/trip-presenter.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
const filterContainer = document.querySelector('.trip-controls__filters');
const pointModel = new PointsModel();
const filterModel = new FilterModel();
const tripPlannerPresenter = new TripPlannerPresenter({
  TripPlannerContainer: siteContainerElement, filterModel,pointModel
});
const filterPresenter = new FilterPresenter({
  filterContainer: filterContainer,
  filterModel,
  pointModel
});
filterPresenter.init();
tripPlannerPresenter.init();

