import { Vector2 } from "three";

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
  toVector2() {
    return new Vector2(this.x, this.y);
  }
}
