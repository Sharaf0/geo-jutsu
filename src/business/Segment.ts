import Point from "./Point";

export default class Segment {
  start: Point;
  end: Point;
  id: number;
  static IDs: number = 0;
  constructor(start: Point, end: Point) {
    this.start = start;
    this.end = end;
    this.id = Point.IDs++;
  }
}
