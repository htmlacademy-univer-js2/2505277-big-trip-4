import {
  TripPlannerPresenter,
  siteContainerElement
} from './presenter/trip-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

import PointsModel from './model/point-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destination-model.js';
import FilterModel from './model/filter-model.js';

import NewPointButtonView from './view/newPointButtonView.js';
import { tripMain } from './presenter/trip-presenter.js';
import { render } from './framework/render.js';

import PointsApiService from './api/points-api-service.js';
import OffersApiService from './api/offers-api-service.js';
import DestinationsApiService from './api/destinations-api-service.js';

const AUTHORIZATION = 'Basic hS2sfS44wcl1sa2j';
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';

const filterContainer = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel({ pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) });

const destinationsModel = new DestinationsModel({ destinationsApiService: new DestinationsApiService(END_POINT, AUTHORIZATION) });
await destinationsModel.init();

const offersModel = new OffersModel({ offersApiService: new OffersApiService(END_POINT, AUTHORIZATION) });
await offersModel.init();
const filterModel = new FilterModel();

const tripPlannerPresenter = new TripPlannerPresenter({
  TripPlannerContainer: siteContainerElement, filterModel, pointsModel, destinationsModel, offersModel,
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

pointsModel.init().finally(() => {
  render(newPointButtonComponent, tripMain);
});
tripPlannerPresenter.init();
filterPresenter.init();
