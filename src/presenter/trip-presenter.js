import { RenderPosition } from '../render.js';
import { render } from '../framework/render.js';
import CreationFormView from '../view/creationForm.js';
import SortingView from '../view/sorting.js';
import FilterView from '../view/filters.js';
import EditingFormView from '../view/editingForm.js';
import WaypointView from '../view/waypoint.js';
import WaypoinListView from '../view/waypointList.js';
import TripInfoView from '../view/tripInfoView.js';

const header = document.querySelector('.page-header');
const tripMain = header.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const siteContainerElement = siteMainElement.querySelector(
  '.page-body__container'
);

export default class TripPlannerPresenter {
  #TripPlannerContainer = null;
  #pointModel = null;

  constructor({ TripPlannerContainer, pointModel }) {
    this.#TripPlannerContainer = TripPlannerContainer;
    this.#pointModel = pointModel;
  }

  #listComponent = new WaypoinListView();

  init() {
    this.points = [...this.#pointModel.getPoints()];

    render(new TripInfoView(), tripMain, RenderPosition.AFTERBEGIN);
    render(new FilterView(), tripMain, RenderPosition.BEFOREEND);
    render(new SortingView(), this.#TripPlannerContainer);
    render(this.#listComponent, this.#TripPlannerContainer);
    render(new EditingFormView({ point: this.points[0] }), this.#listComponent.element);
    render(new CreationFormView(), this.#listComponent.element);
    this.points.forEach((point) => {
      render(new WaypointView({ point: point }), this.#listComponent.element);
    });

  }
}

export { TripPlannerPresenter, siteContainerElement };
