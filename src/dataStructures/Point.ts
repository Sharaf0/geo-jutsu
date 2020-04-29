import { Vector2 } from "three";
import { doubleEqual } from "../utilities";

export default class Point {
  x: number;
  y: number;
  id: number;
  static IDs: number = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.id = Point.IDs++;
  }
  less(b: Point): boolean {
    if (doubleEqual(this.x, b.x)) {
      return this.y < b.y;
    }
    return this.x < b.x;
  }
  equals(b: Point): boolean {
    return doubleEqual(this.x, b.x) && doubleEqual(this.y, b.y);
  }
  toVector2() {
    return new Vector2(this.x, this.y);
  }
}
