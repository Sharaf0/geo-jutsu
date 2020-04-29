import Point from "./Point";
import Segment from "./Segment";

export default class Triangle {
  a: Point;
  b: Point;
  c: Point;
  ab: Segment;
  bc: Segment;
  ca: Segment;
  id: number;
  static IDs: number = 0;

  constructor(a: Point, b: Point, c: Point) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.ab = new Segment(a, b);
    this.bc = new Segment(b, c);
    this.ca = new Segment(c, a);
    this.id = Triangle.IDs++;
  }

  hasPointInside(p: Point): boolean {
    return this.ab.onLeft(p) && this.bc.onLeft(p) && this.ca.onLeft(p);
  }

  hasPointOn(p: Point): boolean {
    return this.ab.collinear(p) || this.bc.collinear(p) || this.ca.collinear(p);
  }
}
