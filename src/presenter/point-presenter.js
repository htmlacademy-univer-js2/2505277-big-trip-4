import { render, replace } from '../framework/render';
import WaypointView from '../view/waypoint';
import EditingFormView from '../view/editingForm';

export default class PointPresenter {
  #listComponent = null;
  #pointComponent = null;
  #pointEditComponent = null;

  #point = null;

  constructor({ listComponent }) {
    this.#listComponent = listComponent;
  }

  init(point) {
    this.#point = point;
    this.#pointComponent = new WaypointView({
      point: this.#point,
      onButtonClick: this.#handleEditClick,
    });
    this.#pointEditComponent = new EditingFormView({
      point: this.#point,
      onFormSubmit: this.#handleFormSubmit,
    });

    render(this.#pointComponent, this.#listComponent);
  }

  #replaceCardToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToCard() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToCard();
    }
  };


  #handleEditClick = () => {
    this.#replaceCardToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToCard();
  };

}
