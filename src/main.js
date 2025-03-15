import {
  TripPlannerPresenter,
  siteContainerElement
} from './presenter/trip-presenter.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/newPointButtonView.js';
import { tripMain } from './presenter/trip-presenter.js';
import { render } from './framework/render.js';


const filterContainer = document.querySelector('.trip-controls__filters');
const pointsModel = new PointsModel();
const filterModel = new FilterModel();

const tripPlannerPresenter = new TripPlannerPresenter({
  TripPlannerContainer: siteContainerElement, filterModel, pointsModel,
  onNewPointDestroy: handleNewPointFormClose
});
const filterPresenter = new FilterPresenter({
  filterContainer: filterContainer,
  filterModel,
  pointsModel,
});
const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  tripPlannerPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

render(newPointButtonComponent, tripMain);
filterPresenter.init();
tripPlannerPresenter.init();

