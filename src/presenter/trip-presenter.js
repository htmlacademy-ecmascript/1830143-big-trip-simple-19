import PointsListView from '../view/points-list.js';
import NewPointView from '../view/new-point';
import PointView from '../view/point';
import { render } from '../render';

export default class TripPresenter {
  tripComponents = new PointsListView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.tripComponents, this.tripContainer);
    render(new NewPointView(), this.tripComponents.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.tripComponents.getElement());
    }
  }
}
