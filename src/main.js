import {
  TripPlannerPresenter,
  siteContainerElement,
} from './presenter/trip-presenter.js';

const tripPlannerPresenter = new TripPlannerPresenter({
  TripPlannerContainer: siteContainerElement,
});

tripPlannerPresenter.init();
