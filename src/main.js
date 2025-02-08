import TripPlannerPresenter from './presenter/trip-presenter.js';
import { render, RenderPosition } from './render.js';
import TtripInfoView from '../src/view/tripInfoView.js';
import TripTimeView from './view/tripTime.js';

const header = document.querySelector('.page-header');
const tripMain = header.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const siteContainerElement = siteMainElement.querySelector(
  '.page-body__container'
);

const tripPlannerPresenter = new TripPlannerPresenter({
  TripPlannerContainer: siteContainerElement,
});

render(new TtripInfoView(), tripMain, RenderPosition.AFTERBEGIN);
render(new TripTimeView(), tripMain, RenderPosition.BEFOREEND);

tripPlannerPresenter.init();
