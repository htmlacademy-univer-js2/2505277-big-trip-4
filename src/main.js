import {
  TripPlannerPresenter,
  siteContainerElement,
} from './presenter/trip-presenter.js';
import PointModel from './model/point-model.js';
const pointModel = new PointModel();
const tripPlannerPresenter = new TripPlannerPresenter({
  TripPlannerContainer: siteContainerElement,
  pointModel,
});

tripPlannerPresenter.init();
