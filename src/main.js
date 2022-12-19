import FilterView from './view/filter.js';
import SortView from './view/sort.js';
import { render } from './render.js';
import TripPresenter from './presenter/trip-presenter.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-main');
const siteTripEvents = siteMainElement.querySelector('.trip-events');
const tripPresenter = new TripPresenter({tripContainer: siteTripEvents});

render(new FilterView(), siteFiltersElement);
render(new SortView, siteTripEvents);

tripPresenter.init();
