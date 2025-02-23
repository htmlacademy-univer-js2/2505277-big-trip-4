import { RenderPosition } from '../render.js';
import { render } from '../framework/render.js';
import CreationFormView from '../view/creationForm.js';
import SortingView from '../view/sorting.js';
import FilterView from '../view/filters.js';
import WaypointListView from '../view/waypointList.js';
import TripInfoView from '../view/tripInfoView.js';
import PointPresenter from './point-presenter.js';

const header = document.querySelector('.page-header');
const tripMain = header.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const siteContainerElement = siteMainElement.querySelector(
  '.page-body__container'
);

export default class TripPlannerPresenter {
  #TripPlannerContainer = null;
  #pointModel = null;
  #sortComponent = new SortingView();
  #tripInfoView = new TripInfoView();
  #filterView = new FilterView();
  #creationForm = new CreationFormView();

  constructor({ TripPlannerContainer, pointModel }) {
    this.#TripPlannerContainer = TripPlannerContainer;
    this.#pointModel = pointModel;
  }

  #listComponent = new WaypointListView();

  init() {
    this.points = [...this.#pointModel.points];
    this.#renderTrip();
  }

  #renderCreationForm() {
    render(this.#creationForm, this.#listComponent.element);
  }

  #renderWaypointList() {
    render(this.#listComponent, this.#TripPlannerContainer);
  }

  #renderSort() {
    render(this.#sortComponent, this.#TripPlannerContainer);
  }

  #renderTripInfo() {
    render(this.#tripInfoView, tripMain, RenderPosition.AFTERBEGIN);
  }

  #renderFilter() {
    render(this.#filterView, tripMain, RenderPosition.BEFOREEND);
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      listComponent: this.#listComponent.element,
    });
    pointPresenter.init(point);
  }

  #renderTrip() {
    this.#renderTripInfo();
    this.#renderSort();
    this.#renderFilter();
    this.#renderWaypointList();
    this.#renderCreationForm();
    this.points.forEach((point) => {
      this.#renderPoint(point);
    });
  }
}

export { TripPlannerPresenter, siteContainerElement };
