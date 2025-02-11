import { render, RenderPosition } from '../render.js';

import CreationFormView from '../view/creationForm.js';
import SortingView from '../view/sorting.js';
import FilterView from '../view/filters.js';
import EditingFormView from '../view/editingForm.js';
import WaypointView from '../view/waypoint.js';
import ListView from '../view/creationList.js';
import TripInfoView from '../view/tripInfoView.js';

const header = document.querySelector('.page-header');
const tripMain = header.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const siteContainerElement = siteMainElement.querySelector(
  '.page-body__container'
);

render(new TripInfoView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripMain, RenderPosition.BEFOREEND);

export default class TripPlannerPresenter {
  listComponent = new ListView();
  constructor({ TripPlannerContainer }) {
    this.TripPlannerContainer = TripPlannerContainer;
  }

  init() {
    render(this.listComponent, this.TripPlannerContainer);

    render(new SortingView(), this.listComponent.getElement());
    render(new EditingFormView(), this.listComponent.getElement());
    render(new CreationFormView(), this.listComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new WaypointView(), this.listComponent.getElement());
    }
  }
}

export { TripPlannerPresenter, siteContainerElement };
