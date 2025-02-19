import { RenderPosition } from '../render.js';
import { render, replace } from '../framework/render.js';
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
    this.points = [...this.#pointModel.points];

    render(new TripInfoView(), tripMain, RenderPosition.AFTERBEGIN);
    render(new FilterView(), tripMain, RenderPosition.BEFOREEND);
    render(new SortingView(), this.#TripPlannerContainer);
    render(this.#listComponent, this.#TripPlannerContainer);
    render(new CreationFormView(), this.#listComponent.element);
    this.points.forEach((point) => {
      this.#renderPoint(point);
    });

  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };
    const pointComponent = new WaypointView({
      point, onButtonClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });
    const pointEditComponent = new EditingFormView({
      point,
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }, onButtonClick: () => {
        replaceFormToCard();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });
    function replaceCardToForm() {
      replace(pointEditComponent, pointComponent);
    }
    function replaceFormToCard() {
      replace(pointComponent, pointEditComponent);
    }
    render(pointComponent, this.#listComponent.element);
  }

  #renderEditingForm(points) {
    const editingFormComponent = EditingFormView({ points });
    render(editingFormComponent, this.#listComponent.element);
  }
}

export { TripPlannerPresenter, siteContainerElement };
