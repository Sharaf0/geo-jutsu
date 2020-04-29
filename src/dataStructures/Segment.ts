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

  inverse(): Segment {
    return new Segment(this.end, this.start);
  }

  cross(p: Point): number {
    return (
      (this.end.x - this.start.x) * (p.y - this.start.y) -
      (this.end.y - this.start.y) * (p.x - this.start.x)
    );
  }

  onLeft(p: Point): boolean {
    return this.cross(p) < 0;
  }

  collinear(p: Point): boolean {
    return this.cross(p) === 0;
  }

  equals(segment: Segment) {
    return this.start.equals(segment.start) && this.end.equals(segment.end);
  }
}
