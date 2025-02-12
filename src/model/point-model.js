import { getRandomPoint } from '../mock/point.js';

const POINT_COUNT = 3;

export default class PointModel {
  points = Array.from({ length: POINT_COUNT }, getRandomPoint);

  getPoint() {
    return this.points;
  }
}
