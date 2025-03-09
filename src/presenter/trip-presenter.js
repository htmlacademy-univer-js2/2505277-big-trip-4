import { RenderPosition } from '../render.js';
import { render } from '../framework/render.js';
import CreationFormView from '../view/creationForm.js';
import SortingView from '../view/sorting.js';
import FilterView from '../view/filters.js';
import WaypointListView from '../view/waypointList.js';
import TripInfoView from '../view/tripInfoView.js';
import PointPresenter from './point-presenter.js';

import { UserAction ,UpdateType} from '../mock/const.js';
const POINT_COUNT_PER_STEP = 8;
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
  #renderedPointCount = POINT_COUNT_PER_STEP;
  #pointPresenters = new Map();

  constructor({ TripPlannerContainer, pointModel }) {
    this.#TripPlannerContainer = TripPlannerContainer;
    this.#pointModel = pointModel;

    this.#pointModel.addObserver(this.#handleModelEvent);
  }

  #listComponent = new WaypointListView();

  get points(){
    return [...this.#pointModel.points];
  }

  init() {
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
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints(points){
    points.forEach((point)=>this.#renderPoint(point));
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = (actionType,updatedType,update) => {
    switch(actionType){
      case UserAction.UPDATE_POINT:
        this.#pointModel.updatePoint(updatedType,update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointModel.deletePoint(updatedType,update);
        break;
      case UserAction.ADD_POINT:
        this.#pointModel.addPoint(updatedType,update);
        break;
    }
  };

  #handleModelEvent = (updatedType,data)=>{
    switch(updatedType){
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearTripPlan();
        this.#renderTrip();
        break;
    }
  };

  #clearTripPlan(){
    const pointCount = this.points.length;

    this.#pointPresenters.forEach((presenter)=> presenter.destroy());
    this.#pointPresenters.clear();

    this.#renderedPointCount = Math.min(pointCount, this.#renderedPointCount);
  }

  #renderTrip() {
    const points = this.points;
    const pointCount = points.length;
    this.#renderTripInfo();
    this.#renderSort();
    this.#renderFilter();
    this.#renderWaypointList();

    this.#renderPoints(points.slice(0,Math.min(pointCount, this.#renderedPointCount)));
  }
}

export { TripPlannerPresenter, siteContainerElement };
