import { render } from '../render.js';
import CreationFormView from '../view/creationForm.js';
import SortingView from '../view/sorting.js';
import FilterView from '../view/filters.js';
import EditingFormView from '../view/editingForm.js';
import WaypointView from '../view/waypoint.js';

export default class TripPlannerPresenter {
  constructor({ TripPlannerContainer }) {
    this.TripPlannerContainer = TripPlannerContainer;
  }

  init() {
    render(new EditingFormView(), this.TripPlannerContainer);
    render(new CreationFormView(), this.TripPlannerContainer);
    render(new FilterView(), this.TripPlannerContainer);
    render(new SortingView(), this.TripPlannerContainer);
    for (let i = 0; i < 3; i++) {
      render(new WaypointView(), this.TripPlannerContainer);
    }
  }
}

export { TripPlannerPresenter };
