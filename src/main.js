import {
  TripPlannerPresenter,
  siteContainerElement,
} from './presenter/trip-presenter.js';
import PointsModel from './model/point-model.js';


const pointModel = new PointsModel();

const tripPlannerPresenter = new TripPlannerPresenter({
  TripPlannerContainer: siteContainerElement, pointModel
});

tripPlannerPresenter.init();
